import { clamp } from "./utils"
export default function skills(ctx: CanvasRenderingContext2D) {
    intro(ctx)

}


export function intro(ctx: CanvasRenderingContext2D) {
    ctx.save()
    const intro = "Over the years I've worked with a lot of technologies programming languages and frameworks the circle below represent the ones I use most often. The bigger the circle the higher my proficiency in that technology"
    const width = Math.min(window.innerWidth - 40, 700)
    const introX = (window.innerWidth - width) / 2
    const padding = 50
    let totalW = introX
    let h = padding
    ctx.font = "16px sans"
    for (let w of intro.split(" ")) {
        const wordLen = ctx.measureText(w + " ").width
        if (totalW + wordLen > (width + introX)) {
            totalW = introX
            h += 25
        }
        ctx.fillText(w, totalW, h)
        totalW += wordLen
    }

    ctx.restore()
    ctx.save()
    ctx.translate(window.innerWidth / 2, 400)
    let radius = 70
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
        ctx.ellipse(25, 25, 50, 50, 0, 0, 360)
        ctx.closePath()
        ctx.fill()
        ctx.font = "bold 16px sans"
        ctx.fillStyle = "white"
        const x = (100 - ctx.measureText(skills[num]).width) / 2
        ctx.fillText(skills[num], -25 + x, 50 - 16)
        ctx.restore()
    }

    radius = 170
    skills = ["", "NextJS", "Git", "Postgresql", "AWS", "NodeJS", "Prisma", "Graphql", "GSAP", "RabbitMQ", "Ten"]
    for (num = 1; num < 11; num++) {
        ang = num * Math.PI / 5;
        ctx.save()
        ctx.beginPath()
        ctx.rotate(ang);
        ctx.translate(0, -radius);
        ctx.rotate(-ang);
        ctx.ellipse(25, 25, 40, 40, 0, 0, 360)
        ctx.closePath()
        ctx.fill()
        ctx.font = "bold 14px sans"
        ctx.fillStyle = "white"
        const x = (100 - ctx.measureText(skills[num]).width) / 2
        ctx.fillText(skills[num], -25 + x, 50 - 16)
        ctx.restore()
    }
    ctx.restore()
}