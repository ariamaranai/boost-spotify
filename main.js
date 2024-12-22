XMLHttpRequest = 0;
isFinite =
Number.isFinite =
Object.hasOwn =
Object.hasOwnProperty = () => 1;
{
  let o = Object;
  o.freeze = o.seal = a => a;
  o.isFrozen = o.isSealed = () => 0;

  let e = document.createElement("b");
  e.className = "encore-text-body-small HxDMwNr5oCxTOyqt85gi";

  let buf = {};
  let toLocale = v => {
    let n = v.playcount || "";
    let l = n.length;
    v.playcount =
      l < 4
        ? n
        : l < 7
        ? n.slice(0, l - 3) + "," + n.slice(-3)
        : l < 10
        ? n.slice(0, l - 6) + "," + n.slice(-6, -3) + "," + n.slice(-3)
        : (+n).toLocaleString();
    return v;
  };

  let fet = fetch;
  fetch = (a, b) =>
    a != "https://gae2-spclient.spotify.com/gabo-receiver-service/public/v3/events" &&
    a != "https://gae2-spclient.spotify.com/melody/v1/msg/batch" &&
    a != "https://spclient.wg.spotify.com/ads-identity-web-enricher/v1/gpcSignals" &&
    a.slice(40, 48) != "masthead"
      ? fet(a, b)
      : 0;

  Node.prototype.addEventListener = function (a, b, c) {
    switch (a) {
      case "auxclick":
      case "copy":
      case "cut":
      case "dblclick":
      case "drag":
      case "dragend":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "dragstart":
      case "error":
      case "paste":
      case "touchcancel":
      case "touchend":
      case "touchmove":
      case "touchstart":
        break;
      default:
        addEventListener.call(this, a, b, c);
    }
  };
  HTMLDivElement.prototype.setAttribute = function (a, b) {
    switch (a) {
      case "class":
        this.className = b;
        break;
        case "id":
          this.id = b;
          break;
        case "aria-disabled":
        case "aria-hidden":
        case "aria-label":
        case "aria-labelledby":
        case "dir":
        case "draggable":
        case "lang":
        case "role":
        case "tabindex":
        case "title":
          break;
        case "data-testid":
          if (b == "tracklist-row") {
            let items = buf[location.pathname.slice(-22)];
            if (items) {
              let uri = this.querySelector("a").href.slice(-22);
              let n = items.find(v => v?.uri?.slice(-22) == uri)?.playcount;
              if (n) {
                let parent = this.lastChild;
                parent.insertBefore(e.cloneNode(), parent.firstChild).textContent = n;
              } 
            }
          }
        default:
          Element.prototype.setAttribute.call(this, a, b);
      }
  };

  o = Response.prototype.json;
  Response.prototype.json = async function (a, b) {
    let result = await o.call(this, a, b);
    let data = result.data;
    let items =
      data?.albumUnion?.tracksV2?.items?.map(v => toLocale(v?.track))
        ?? data?.playlistV2?.content?.items?.map(v => toLocale(v?.itemV2?.data));
    if (items) {
      let uri = location.pathname.slice(-22);
      buf[uri] = buf[uri] ? buf[uri].concat(items) : items; 
    }
    return result;
  };
}