import { NavLink } from "../types"
import { clamp } from "./utils"

export default function NavBar(ctx: CanvasRenderingContext2D, currentPage: string, hovered: string): NavLink[] {
    const cx = window.innerWidth / 2
    const cy = window.innerHeight - 100
    const w = clamp(300, window.innerWidth - 40, 800)
    const h = 60
    const x = cx - (w / 2)
    const radiusSize = h / 2 - 10
    ctx.save()
    ctx.fillStyle = "white"
    ctx.lineCap = "round"
    ctx.lineJoin = "round"
    ctx.shadowBlur = 20
    ctx.shadowColor = "#e3e1e1"
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
    ctx.restore()
    ctx.save()
    ctx.fillStyle = "black"
    ctx.font = "18px sans"
    const pages: NavLink[`id`][] = ["About", "Skills", "Projects"]
    const bound = w / pages.length
    const arr: NavLink[] = []
    pages.forEach((page, ind) => {
        let mid = (bound - ctx.measureText(page).width) / 2
        arr.push({ id: page, x: x + bound * ind + mid - 10, y: cy + h / 2 - 10, w: ctx.measureText(page).width + 10, h: 18 + 10 })
        if (currentPage === page) {
            ctx.save()
            ctx.fillStyle = "blue"
            ctx.fillText(page, x + bound * ind + mid, cy + h / 2 + 9)
            ctx.restore()
        } else if (page === hovered) {
            ctx.save()
            ctx.fillStyle = "red"
            ctx.fillText(page, x + bound * ind + mid, cy + h / 2 + 9)
            ctx.restore()
        } else {
            ctx.fillText(page, x + bound * ind + mid, cy + h / 2 + 9)
        }
    })
    ctx.restore()
    return arr
}