{
let o = Object
let k = {}
let e = document.createElement("b")
let f =v=> {
  let n = v.playcount || ""
  v.playcount =
    (o = n.length) < 4 ? n :
    o < 7 ? n.slice(0, o - 3) + "," + n.slice(-3) :
    o < 10 ?n.slice(0, o - 6) +"," + n.slice(-6,-3) + "," + n.slice(-3) :
    (+n).toLocaleString()
  return v
}
HTMLDivElement.prototype.setAttribute=new Proxy(e.setAttribute, {
  apply: (a,b,c)=> {
    switch (c[0]) {
      case "class":
        b.className = c[1]
        break
      case "id":
        b.id = c[1]
        break
      case "aria-label":
      case "aria-labelledby":
      case "dir":
      case "draggable":
      case "lang":
      case "role":
      case "tabindex":
      case "title":
        break
      case "data-testid":
        Reflect.apply(a,b,c),
        c[1] == "tracklist-row" && (c = k[location.pathname.slice(-22)]) && (
          a = b.querySelector("a").href.slice(-22),
          (c = c.find(v=> v?.uri?.slice(-22) == a)?.playcount) && (
            (b = b.lastChild).insertBefore(e.cloneNode(), b.firstChild).textContent = c
          )
        )
        break
      default:
        Reflect.apply(a,b,c)
    }
  }
}),
o.freeze = o.seal =a=> a,
o.isFrozen = o.isSealed =()=> 0,
(o=Response.prototype).json= new Proxy(o.json, {
  apply: async (a,b,c)=> (
    (a = (b = (c = await Reflect.apply(a,b,c)).data)?.albumUnion?.tracksV2?.items?.map(v=> f(v?.track)) ??
     b?.playlistV2?.content?.items?.map(v=> f(v?.itemV2?.data))) &&
    (k[b=location.pathname.slice(-22)] = k[b] ? k[b].concat(a) : a),
    c
  )
}),
e.className = "encore-text-body-small HxDMwNr5oCxTOyqt85gi"
}
isFinite = Number.isFinite =()=> 1
