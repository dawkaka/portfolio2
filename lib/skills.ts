import { clamp } from "./utils"
export default function skills(ctx: CanvasRenderingContext2D) {
    intro(ctx)

}


export function intro(ctx: CanvasRenderingContext2D) {
    ctx.save()
    const intro = "Over the years I've worked with a lot of technologies, programming languages, and frameworks the circle below represent the ones I use most often"
    const width = Math.min(window.innerWidth - 40, 700)
    const introX = (window.innerWidth - width) / 2
    const padding = 50
    let totalW = introX
    let h = padding
    ctx.font = "16px sans"
    const lines = []
    const inArr = intro.split(" ")
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
    lines.forEach((line, ind) => {
        const x = (width - ctx.measureText(line).width) / 2
        ctx.fillText(line, introX + x, padding + (ind * 25))
    })
    ctx.restore()
    ctx.save()
    ctx.translate(window.innerWidth / 2, padding + (lines.length * 25) + 175)
    let radius = 60
    let ang;
    let num;
    let skills = ["", "React", "Typescript", "Go", "Mongo"]
    for (num = 1; num < 5; num++) {
        ang = num * Math.PI / 2;
        ctx.save()
        ctx.beginPath()
        ctx.rotate(ang);
        ctx.translate(0, -radius);
        ctx.rotate(-ang);
        ctx.ellipse(0, 25, 40, 40, 0, 0, 360)
        ctx.closePath()
        ctx.fill()
        ctx.font = "bold 16px sans"
        ctx.fillStyle = "white"
        const x = (100 - ctx.measureText(skills[num]).width) / 2
        ctx.fillText(skills[num], -50 + x, 50 - 16)
        ctx.restore()
    }

    radius = 150
    skills = ["", "NextJS", "Git", "Postgresql", "AWS", "NodeJS", "Prisma", "Graphql", "GSAP", "RabbitMQ", "Ten"]
    for (num = 1; num < 11; num++) {
        ang = num * Math.PI / 5;
        ctx.save()
        ctx.beginPath()
        ctx.rotate(ang);
        ctx.translate(0, -radius);
        ctx.rotate(-ang);
        ctx.ellipse(0, 25, 40, 40, 0, 0, 360)
        ctx.closePath()
        ctx.fill()
        ctx.font = "bold 14px sans"
        ctx.fillStyle = "white"
        const x = (100 - ctx.measureText(skills[num]).width) / 2
        ctx.fillText(skills[num], -50 + x, 50 - 16)
        ctx.restore()
    }
    ctx.restore()
}