import { NavLink } from "../types"

export default function NavBar(ctx: CanvasRenderingContext2D, cx: number, cy: number): NavLink[] {
    const w = 500
    const h = 60
    const x = cx - (w / 2)
    const radiusSize = h / 2 - 10
    ctx.save()
    ctx.fillStyle = "white"
    ctx.lineCap = "round"
    ctx.lineJoin = "round"
    ctx.beginPath()
    ctx.moveTo(x, cy + radiusSize)
    ctx.quadraticCurveTo(x, cy, x + radiusSize, cy)
    ctx.lineTo(x + w - radiusSize, cy)
    ctx.quadraticCurveTo(x + w, cy, x + w, cy + radiusSize)
    ctx.lineTo(x + w, cy + radiusSize + (h - radiusSize * 2))
    ctx.quadraticCurveTo(x + w, cy + h, x + w - radiusSize, cy + h)
    ctx.lineTo(x + radiusSize, cy + h)
    ctx.quadraticCurveTo(x, cy + h, x, cy + h - radiusSize)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()
    ctx.restore()
    ctx.save()
    ctx.fillStyle = "black"
    ctx.font = "18px sans"
    const pages: NavLink[`id`][] = ["About", "Skills", "Projects", "Education"]
    const bound = w / pages.length
    const arr: NavLink[] = []
    pages.forEach((page, ind) => {
        arr.push({ id: page, x: x + bound * ind + 20, y: cy + h / 2, w: ctx.measureText(page).width, h: 18 })
        ctx.fillText(page, x + bound * ind + 20, cy + h / 2 + 9)
    })
    ctx.restore()
    return arr
}