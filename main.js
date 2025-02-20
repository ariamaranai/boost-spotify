XMLHttpRequest = 0;
{
  let o = Object;
  let p = Element.prototype;
  let d = document;
  let setter = { set: () => 0 };

  o.freeze =
  o.seal = a => a;
  o.isFrozen =
  o.isSealed =
  Math.random =
  p.hasAttribute = () => 0;

  isFinite =
  Number.isFinite =
  o.hasOwn =
  o.hasOwnProperty = () => 1;

  o.defineProperty(navigator, "userAgent", {
    value: " "
  });
  o.defineProperties(HTMLScriptElement.prototype, {
    charset: setter,
    onerror: setter,
    timeout: setter
  });

  HTMLBodyElement.prototype.appendChild = a =>
    a.id == "ad-tracking-pixel" ? 0 :
    a.async ? (HTMLBodyElement.prototype.appendChild = Node.prototype.appendChild, 0)
            : Node.prototype.appendChild.call(d.body, a);

            
  let createElement = d.createElement.bind(d);
  let ae = createElement("a");
  let be = createElement("b");
  ae.setAttribute("style", "display:contents");
  be.className = "encore-text-body-small HxDMwNr5oCxTOyqt85gi";
  d.createElement = a => a == "a" ? ae.cloneNode() : createElement(a);

  let buf = new Map;
  let toLocale = v => {
    let n = v.playcount || "";
    let l = n.length;
    v.playcount =
      l < 4 ? n
    : l < 7 ? n.slice(0, l - 3) + "," + n.slice(-3)
    : l < 10 ? n.slice(0, l - 6) + "," + n.slice(-6, -3) + "," + n.slice(-3)
    : (+n).toLocaleString();
    return v;
  }

  let fet = fetch;
  let dummyThen = {
    then: ()=> dummyThen,
    catch: () => dummyThen
  };
  fetch = (a, b) =>
    a != "https://gae2-spclient.spotify.com/gabo-receiver-service/public/v3/events" &&
    a != "https://gae2-spclient.spotify.com/melody/v1/msg/batch" &&
    a != "https://spclient.wg.spotify.com/ads-identity-web-enricher/v1/gpcSignals" &&
    a.slice(40, 48) != "masthead" ? fet(a, b) : dummyThen;

  p.addEventListener = function (a, b, c) {
    switch (a) {
      case "auxclick":
      case "compositionend":
      case "compositionstart":
      case "compositionupdate":
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
      case "drop":
      case "error":
      case "gotpointercapture":
      case "keydown":
      case "keypress":
      case "keyup":
      case "lostpointercapture":
      case "mouseenter":
      case "mouseleave":
      case "mouseout":
      case "mouseover":
      case "mozfullscreenchange":
      case "paste":
      case "pointercancel":
      case "pointerenter":
      case "pointerleave":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "stalled":
      case "touchcancel":
      case "touchend":
      case "touchmove":
      case "touchstart":
      case "visibilitychange":
      case "volumechange":
      case "webkitfullscreenchange":
        break;
      default:
        return EventTarget.prototype.addEventListener.call(this, a, b, c);
    }
  }
  let setAttr = p.setAttribute;
  p.setAttribute = function (a, b) {
    switch (a) {
   // case "aria-colcount":
   // case "aria-colindex":
      case "aria-live":
   // case "aria-rowcount":
   // case "aria-rowindex":
   // case "aria-setsize":
      case "aria-sort":
      case "data-animation":
      case "data-encore-id":
   // case "data-overlayscrollbars":
   // case "data-overlayscrollbars-viewport":
      case "data-theme":
      case "data-webpack":
      case "draggable":
      case "lang":
        break;
      case "height":
      case "hidden":
      case "href":
      case "id":
      case "max":
      case "min":
      case "step":
      case "src": 
      case "width":
        this[a] = b;
        break;
      case "data-testid":
        if (b == "tracklist-row" && this.tagName == "DIV") {
          let items = buf[location.pathname.slice(-22)];
          if (items) {
            let u = this.querySelector("a").href.slice(-22);
            let n = items.find(v => v?.uri?.slice(-22) == u)?.playcount;
            n && ((u = this.lastChild).insertBefore(be.cloneNode(), u.firstChild).textContent = n)
          }
        }
        break;
      default:
        setAttr.call(this, a, b);
      }
  }
  let hasOwnProperty = (p = o.prototype).hasOwnProperty;
  p.hasOwnProperty = function (a) {
    switch (a) {
      case "adsCoreConnector":
      case "adsEnabled":
      case "alt":
      case "aria-activedescendant":
      case "aria-checked":
      case "aria-controls":
      case "aria-describedby":
      case "aria-disabled":
      case "aria-expanded":
      case "aria-haspopup":
      case "aria-hidden":
      case "aria-label":
      case "aria-labelledby":
      case "aria-level":
      case "aria-modal":
      case "aria-owns":
      case "aria-posinset":
      case "aria-pressed":
      case "aria-selected":
      case "aria-valuetext":
      case "ariaHidden":
      case "ariaPauseLabel":
      case "ariaPlayLabel":
      case "borderRadius":
      case "data-is-icon-only":
      case "data-right-sidebar-hidden":
      case "data-testadtype":
      case "data-test-position":
      case "dateTime":
      case "dir":
      case "disabled":
      case "isDownloadable":
      case "isOffline":
      case "isPremium":
      case "line-clamp":
      case "lineClamp":
      case "loading":
      case "onDoubleClick":
      case "onError":
      case "onTouchEnd":
      case "onTouchStart":
      case "referrer":
      case "role":
      case "shiftKey":
      case "spellCheck":
      case "tabIndex":
      case "title":
        return 0;
      case "isDesktop":
        return 1;
      default:
        // typeof a == "string" && a.length > 2 && (kkk[a] ? ++kkk[a] : kkk[a] = 1);
        return hasOwnProperty.call(this, a);
    }
  }

  let test = (p = RegExp.prototype).test;
  p.test = function (a) {
    return typeof a == "function" || a != " " && // ua
      a == "@webgate/gabo-receiver-service/public/v3/events" ||
      test.call(this, a)
  }

  o = (p = Response.prototype).json;
  p.json = async function (a, b) {
    let result = await o.call(this, a, b);
    let data = result.data;
    let items =
      data?.albumUnion?.tracksV2?.items?.map(v => toLocale(v?.track))
        ?? data?.playlistV2?.content?.items?.map(v => toLocale(v?.itemV2?.data));
    if (items) {
      let uri = location.pathname.slice(-22);
      let itemBuf = buf[uri];
      buf[uri] = itemBuf ? itemBuf.concat(items) : items;
    }
    return result;
  }
}