import { Links } from "../types"

export default function projects(ctx: CanvasRenderingContext2D): Links[] {
    let arr: Links[] = []
    let h = project(ctx, 50,
        "Prime Couples, a social media for couples, just like instagram but only couples can post.",
        "github.com/dawkaka/theone"
    )
    arr.push(h.link)
    h = project(ctx, h.y + 40,
        "Bond Better, a website that sends five questions to couples daily to help them know each other better",
        "github.com/dawkaka/BondBetter"
    )
    arr.push(h.link)
    h = project(ctx, h.y + 40,
        "Draaaw, an HTML canvas drawing app that allows users to draw shapes and diagrams for presentations, blogs, etc. Similar to Microsoft Paint",
        "github.com/dawkaka/drawapp"
    )
    arr.push(h.link)
    h = project(
        ctx, h.y + 40,
        "Toonji lyrics, A music lyrics sharing website that allows users to provide breakdowns of lyrics, take top fans quizes to climb the leaderboard of a particular artiste and also a real time lyrics competition with other users. It's basically similar genius.com but better!",
        "github.com/dawkaka/toonji-lyrics"
    )
    arr.push(h.link)
    h = project(ctx, h.y + 40,
        "Path finding algorithms visualizer. Visualize depth first search, breadth first search, A star, and Dijkstra's algorithm",
        "github.com/dawkaka/path-finding-algorithms"
    )
    arr.push(h.link)
    h = project(ctx, h.y + 40,
        "Sorting algorithms visualizer, visualize bubble sort, inserstion sort, selection sort etc.",
        "github.com/dawkaka/sortalgorithmsvisualizer"
    )
    arr.push(h.link)
    h = project(ctx, h.y + 40, "Find these and more on my github", "github.com/dawkaka")
    arr.push(h.link)

    return arr
}


function project(ctx: CanvasRenderingContext2D, padding: number, title: string, github: string) {

    ctx.save()
    const w = Math.min(window.innerWidth - 40, 300)
    let x = 0
    let y = 0

    ctx.font = "16px sans"
    const width = Math.min(window.innerWidth - 40, 700)
    const introX = (window.innerWidth - width) / 2
    let totalW = introX
    let h = padding
    ctx.font = "16px sans"
    const lines = []
    const inArr = title.split(" ")
    let words = ""

    for (let i = 0; i < inArr.length; i++) {
        const w = inArr[i]
        const wordLen = ctx.measureText(words + w + " ").width
        if (totalW + wordLen > (width + introX)) {
            lines.push(words)
            words = w
        } else {
            words += " " + w
        }
    }
    lines.push(words)
    let hh = 0
    lines.forEach((line, ind) => {
        const x = (width - ctx.measureText(line).width) / 2
        hh = padding + (ind * 25)
        ctx.fillText(line, introX + x, hh)
    })

    ctx.fillStyle = "blue"
    const textwidth = ctx.measureText(github).width
    const xx = (width - textwidth) / 2
    hh += 20
    ctx.fillText(github, introX + xx, hh)
    ctx.restore()
    return { y: hh, link: { x: introX + xx, y: hh - 8, w: textwidth, h: 16, href: "https://www." + github } }
}