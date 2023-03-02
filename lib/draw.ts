export function writeName(ctx: CanvasRenderingContext2D) {
    const spacing = 80
    const gap = 15

    ctx.save()
    ctx.fillStyle = "white"
    ctx.lineCap = "round"
    ctx.lineWidth = 7

    ctx.translate(100, 100)
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

    //M
    spacing2 = spacing2 + spacing + gap * 5
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
    ctx.moveTo(spacing2, 0)
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