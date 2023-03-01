export default function NavBar(ctx: CanvasRenderingContext2D, cx: number, cy: number) {
    const w = 500
    const h = 40
    const x = cx - (w / 2)
    ctx.save()
    ctx.fillStyle = "white"
    ctx.strokeStyle = "black"
    ctx.lineCap = "round"
    ctx.lineJoin = "round"
    ctx.fillRect(x, cy, w, h)
    ctx.restore()
    ctx.save()
    ctx.fillStyle = "black"
    ctx.font = "18px sans"
    const pages = ["Home", "Skills", "Projects", "Education"]
    const bound = w / pages.length
    pages.forEach((page, ind) => {
        ctx.fillText(page, x + bound * ind + 10, cy + 27)
    })
    ctx.restore()
}