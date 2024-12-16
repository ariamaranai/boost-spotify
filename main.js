XMLHttpRequest = 0;
isFinite =
Number.isFinite =
Object.hasOwnProperty =() => 1;
{
  let o = Object;
  let buf = {};
  let e = document.createElement("b");
  e.className = "encore-text-body-small HxDMwNr5oCxTOyqt85gi";
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
  let res = new Response(null, { status: 404 });
  
  fetch = (a, b) =>
    a != "https://gae2-spclient.spotify.com/gabo-receiver-service/public/v3/events" &&
    a != "https://gae2-spclient.spotify.com/melody/v1/msg/batch"
      ? fet(a, b)
      : Promise.reject(res);
  HTMLDivElement.prototype.setAttribute = new Proxy(e.setAttribute, {
    apply: (a, b, c) => {
      switch (c[0]) {
        case "class":
          b.className = c[1];
          break;
        case "id":
          b.id = c[1];
          break;
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
          Reflect.apply(a, b, c);
          if (c[1] == "tracklist-row") {
            let items = buf[location.pathname.slice(-22)];
            if (items) {
              let uri = b.querySelector("a").href.slice(-22);
              let n = items.find(v => v?.uri?.slice(-22) == uri)?.playcount;
              if (n) {
                let parent = b.lastChild;
                parent.insertBefore(e.cloneNode(), parent.firstChild).textContent = n;
              } 
            }
          }
          break;
        default:
          Reflect.apply(a, b, c);
      }
    },
  });
  o.freeze = o.seal = a => a;
  o.isFrozen = o.isSealed = () => 0;
  (o = Response.prototype).json = new Proxy(o.json, {
    apply: async (a, b, c) => {
      let result = await Reflect.apply(a, b, c);
      let data = result.data;
      let items =
        data?.albumUnion?.tracksV2?.items?.map(v => toLocale(v?.track))
        ?? data?.playlistV2?.content?.items?.map(v => toLocale(v?.itemV2?.data));
      if (items) {
        let uri = location.pathname.slice(-22);
        buf[uri] = buf[uri] ? buf[uri].concat(items) : items; 
      }
      return result;
    }
  });
}
