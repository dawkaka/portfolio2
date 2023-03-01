import { useEffect, useLayoutEffect, useRef } from 'react'
import NavBar from '../lib/NavBar'
function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useLayoutEffect(() => {
    let ctx = canvasRef.current!.getContext("2d")!;
    ctx.canvas.width = window.innerWidth
    ctx.canvas.height = window.innerHeight
  }, [])
  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d")
      NavBar(ctx!, window.innerWidth / 2, window.innerHeight - 100)
    }

  }, [])
  return (
    <canvas ref={canvasRef} style={{ backgroundColor: "#fcf5eb" }}>
    </canvas>
  )
}

export default App
