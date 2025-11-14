{
  let dt = document.createElement("dt");
  dt.setAttribute("style", "font-size:14px");
  let buf = {};
  HTMLDivElement.prototype.setAttribute = function (a, b) {
    if (b == "tracklist-row") {
      let items = buf[location.pathname.slice(-22)];
      if (items) {
        let u = this.querySelector("a").href.slice(-22);
        let n = items.find(v => v[1].slice(-22) == u)[0];
        n && (this.lastChild.insertAdjacentElement("afterbegin", dt.cloneNode()).textContent = n);
      }
    } else
      Element.prototype.setAttribute.call(this, a, b);
  }
  let toLocale = v => {
    let n = v.playcount || "", l = n.length;
    return [
        l < 4 ? n
      : l < 7 ? n.slice(0, l - 3) + "," + n.slice(-3)
      : l < 10 ? n.slice(0, l - 6) + "," + n.slice(-6, -3) + "," + n.slice(-3)
      : (+n).toLocaleString(),
      v.uri || ""
    ]
  }
  let { json } = (p = Response.prototype);
  p.json = async function (a, b) {
    let result = await json.call(this, a, b);
    let data = result.data;
    let items = data?.albumUnion?.tracksV2?.items?.map(v => toLocale(v?.track)) ?? data?.playlistV2?.content?.items?.map(v => toLocale(v?.itemV2?.data));
    if (items) {
      let uri = location.pathname.slice(-22);
      let itemBuf = buf[uri];
      buf[uri] = itemBuf ? itemBuf.concat(items) : items;
    }
    return result;
  }
}