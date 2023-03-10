import { Links } from "../types"
import { clamp } from "./utils"

export function about(ctx: CanvasRenderingContext2D): Links[] {
    ctx.save()
    const hi = "Hi, I'm "
    const name = "Yussif 'Dawkaka' Mohammed"
    const bio = `. A determined pessimist and a Software Engineer who is 'very' passionate about programming with over 3 years of experience building projects ranging from pet projects to startups. I have experience building both backend and frontend of applications and on one occassion a mobile app using React Native.`
    const innerWidth = window.innerWidth
    const isSmall = innerWidth < 600

    const bioX = isSmall ? 20 : window.innerWidth / 2
    const padding = isSmall ? 150 : 120
    const maxWidth = isSmall ? window.innerWidth - 20 : clamp(300, bioX - 20, 700)
    ctx.translate(bioX, padding)
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
    const imgSize = 30

    const image = new Image();
    image.src = "./github.jpg";
    h += padding + 20
    image.onload = function (e) {
        ctx.drawImage(image, bioX + 0, h, imgSize, imgSize);
    };
    const image2 = new Image()
    image2.src = "./linkedin.png";
    image2.onload = function () {
        ctx.drawImage(image2, bioX + imgSize + 20, h, imgSize, imgSize);
    };
    const image3 = new Image(); // Using optional size for image
    image3.src = "./dev.png";
    image3.onload = function (e) {
        ctx.drawImage(image3, bioX + imgSize * 2 + 40, h, imgSize, imgSize);
    };
    const links: Links[] = [
        { href: "https://github.com/dawkaka", x: bioX + 0, y: h, w: imgSize, h: imgSize },
        { href: "https://www.linkedin.com/in/yussif-mohammed/", x: bioX + imgSize + 20, y: h, w: imgSize, h: imgSize },
        { href: "https://dev.to/dawkaka", x: bioX + imgSize * 2 + 40, y: h, w: imgSize, h: imgSize }
    ]
    ctx.restore()
    return links
}




export function writeName(ctx: CanvasRenderingContext2D) {
    const innerWidth = window.innerWidth
    const isSmall = innerWidth < 600
    const spacing = isSmall ? window.innerWidth / 22 : 0.1 * (window.innerWidth / 2)
    const gap = spacing / 2


    const lineWidth = window.innerWidth > 680 ? 10 : 5
    ctx.save()
    ctx.fillStyle = "white"
    ctx.lineWidth = lineWidth
    ctx.lineCap = "round"
    ctx.translate(20, 50)
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
    ctx.translate(innerWidth > 680 ? innerWidth - (spacing * 8 + gap * 10 + 20) : isSmall ? spacing2 + gap * 4 : innerWidth - (spacing * 8 + gap * 10),
        isSmall ? 50 : window.innerHeight - (spacing * 2 + 200))
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

export default function About(ctx: CanvasRenderingContext2D): Links[] {
    writeName(ctx)
    return about(ctx)
}