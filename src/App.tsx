import { useLayoutEffect, useRef } from 'react'

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useLayoutEffect(() => {
    let ctx = canvasRef.current!.getContext("2d")!;
    ctx.canvas.width = window.innerWidth
    ctx.canvas.height = window.innerHeight
  }, [])
  return (
    <canvas ref={canvasRef} style={{ backgroundColor: "#fcf5eb" }}>
    </canvas>
  )
}

export default App
