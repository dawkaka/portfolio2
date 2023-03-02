import { clamp } from "./utils"

export function about(ctx: CanvasRenderingContext2D) {
    ctx.save()
    const hi = "Hi, I'm "
    const name = "Yussif 'Dawkaka' Mohammed"
    const bio = `. A determined pessimist and a Software Engineer who is 'very' passionate about programming with over 3 years of experience building projects 
ranging from pet projects to startups. I have experience building both backend and frontend of applications and on one occassion a mobile app using React Native.`
    const maxWidth = clamp(300, window.innerWidth / 2 - 20, 700)
    ctx.translate(window.innerWidth / 2, 120)
    ctx.font = "16px sans"
    ctx.fillText(hi, 0, 0)
    ctx.save()
    let tw = ctx.measureText(hi).width
    ctx.fillStyle = "blue"
    ctx.font = "bold 16px sans"
    ctx.fillText(name, tw, 0)
    tw += ctx.measureText(name).width
    ctx.restore()
    let totalW = tw
    let h = 0
    for (let w of bio.split(" ")) {
        const wordLen = ctx.measureText(w + " ").width
        if (totalW + wordLen > maxWidth) {
            totalW = 0
            h += 25
        }
        ctx.fillText(w, totalW, h)
        totalW += wordLen
    }

    ctx.restore()
}

export function writeName(ctx: CanvasRenderingContext2D) {
    const spacing = 80
    const gap = 40
    const lineWidth = 10
    ctx.save()
    ctx.fillStyle = "white"
    ctx.lineWidth = lineWidth
    ctx.lineCap = "round"
    ctx.translate(20, 100)
    ctx.beginPath()

    //Y
    ctx.moveTo(0, 0)
    ctx.lineTo(spacing / 2, spacing)
    ctx.lineTo(spacing, 0)
    ctx.moveTo(spacing / 2, spacing)
    ctx.lineTo(spacing / 2, spacing * 2)
    //U
    ctx.moveTo(spacing + gap, 0)
    ctx.lineTo(spacing + gap, spacing * 1.5)
    ctx.quadraticCurveTo(spacing + gap, spacing * 2, spacing + gap + spacing / 2, spacing * 2)
    ctx.quadraticCurveTo(spacing * 2 + gap, spacing * 2, spacing * 2 + gap, spacing * 1.5)
    ctx.lineTo(spacing * 2 + gap, 0)

    //S
    let spacing2 = spacing * 2 + gap
    ctx.moveTo(spacing2 + spacing + gap, 0)
    ctx.lineTo(spacing2 + gap + spacing / 2, 0)
    ctx.quadraticCurveTo(spacing2 + gap, 0, spacing2 + gap, spacing / 2)
    ctx.quadraticCurveTo(spacing2 + gap, spacing, spacing2 + gap + spacing / 2, spacing)
    ctx.quadraticCurveTo(spacing2 + spacing + gap, spacing, spacing2 + gap + spacing, spacing * 1.5)
    ctx.quadraticCurveTo(spacing2 + spacing + gap, spacing * 2, spacing2 + gap + spacing / 2, spacing * 2)
    ctx.lineTo(spacing2 + gap, spacing * 2)

    //S
    spacing2 = spacing * 3 + gap * 2
    ctx.moveTo(spacing2 + spacing + gap, 0)
    ctx.lineTo(spacing2 + gap + spacing / 2, 0)
    ctx.quadraticCurveTo(spacing2 + gap, 0, spacing2 + gap, spacing / 2)
    ctx.quadraticCurveTo(spacing2 + gap, spacing, spacing2 + gap + spacing / 2, spacing)
    ctx.quadraticCurveTo(spacing2 + spacing + gap, spacing, spacing2 + gap + spacing, spacing * 1.5)
    ctx.quadraticCurveTo(spacing2 + spacing + gap, spacing * 2, spacing2 + gap + spacing / 2, spacing * 2)
    ctx.lineTo(spacing2 + gap, spacing * 2)

    //I
    spacing2 = spacing * 4 + gap * 3
    ctx.moveTo(spacing2 + gap, 0)
    ctx.lineTo(spacing2 + gap, spacing * 2)

    //F
    spacing2 = spacing * 4 + gap * 4 + 5 + gap
    ctx.moveTo(spacing2, 0)
    ctx.lineTo(spacing2 + spacing, 0)
    ctx.moveTo(spacing2, 0)
    ctx.lineTo(spacing2, spacing * 2)
    ctx.moveTo(spacing2, spacing)
    ctx.lineTo(spacing2 + spacing, spacing)

    ctx.restore()

    //M

    ctx.save()
    ctx.fillStyle = "white"
    ctx.lineWidth = lineWidth
    ctx.lineCap = "round"
    ctx.translate(window.innerWidth - (spacing * 8 + gap * 10 + 20), window.innerHeight - (spacing * 2 + 200))
    spacing2 = spacing

    ctx.moveTo(spacing2, 0)
    ctx.lineTo(spacing2, spacing * 2)
    ctx.moveTo(spacing2, 0)
    ctx.lineTo(spacing2 + spacing / 2, spacing)
    ctx.moveTo(spacing2 + spacing, 0)
    ctx.lineTo(spacing2 + spacing / 2, spacing)
    ctx.moveTo(spacing2 + spacing, 0)
    ctx.lineTo(spacing2 + spacing, spacing * 2)

    //O
    spacing2 = spacing2 + spacing + gap
    ctx.moveTo(spacing2 + spacing, spacing)
    ctx.ellipse(spacing2 + spacing / 2, spacing, spacing / 2, spacing, 0, 0, 360)

    // Letter H
    spacing2 = spacing2 + spacing + gap
    ctx.moveTo(spacing2, 0)
    ctx.lineTo(spacing2, spacing * 2)
    ctx.moveTo(spacing2, spacing)
    ctx.lineTo(spacing2 + spacing, spacing)
    ctx.moveTo(spacing2 + spacing, 0)
    ctx.lineTo(spacing2 + spacing, spacing * 2)

    // Letter A
    spacing2 = spacing2 + spacing + gap
    ctx.moveTo(spacing2 + spacing / 2, 0)
    ctx.lineTo(spacing2, spacing * 2)
    ctx.moveTo(spacing2 + spacing / 2, 0)
    ctx.lineTo(spacing2 + spacing, spacing * 2)
    ctx.moveTo(spacing2, spacing)
    ctx.lineTo(spacing2 + spacing, spacing)

    // Letter M
    spacing2 = spacing2 + spacing + gap
    ctx.moveTo(spacing2, 0)
    ctx.lineTo(spacing2, spacing * 2)
    ctx.moveTo(spacing2, 0)
    ctx.lineTo(spacing2 + spacing / 2, spacing)
    ctx.moveTo(spacing2 + spacing, 0)
    ctx.lineTo(spacing2 + spacing / 2, spacing)
    ctx.moveTo(spacing2 + spacing, 0)
    ctx.lineTo(spacing2 + spacing, spacing * 2)

    // Letter M
    spacing2 = spacing2 + spacing + gap
    ctx.moveTo(spacing2, 0)
    ctx.lineTo(spacing2, spacing * 2)
    ctx.moveTo(spacing2, 0)
    ctx.lineTo(spacing2 + spacing / 2, spacing)
    ctx.moveTo(spacing2 + spacing, 0)
    ctx.lineTo(spacing2 + spacing / 2, spacing)
    ctx.moveTo(spacing2 + spacing, 0)
    ctx.lineTo(spacing2 + spacing, spacing * 2)

    // Letter E
    spacing2 = spacing2 + spacing + gap
    ctx.moveTo(spacing2, 0)
    ctx.lineTo(spacing2, spacing * 2)
    ctx.moveTo(spacing2, 0)
    ctx.lineTo(spacing2 + spacing, 0)
    ctx.moveTo(spacing2, spacing)
    ctx.lineTo(spacing2 + spacing, spacing)
    ctx.moveTo(spacing2, spacing * 2)
    ctx.lineTo(spacing2 + spacing, spacing * 2)

    //Letter D
    spacing2 = spacing2 + spacing + gap
    ctx.moveTo(spacing2, 0);
    ctx.lineTo(spacing2, spacing * 2)
    ctx.moveTo(spacing2, 0);
    ctx.quadraticCurveTo(spacing2 + spacing, 0, spacing2 + spacing, spacing);
    ctx.quadraticCurveTo(spacing2 + spacing, spacing * 2, spacing2, spacing * 2)

    ctx.stroke()
    ctx.restore()

}

export default function About(ctx: CanvasRenderingContext2D) {
    writeName(ctx)
    about(ctx)
}