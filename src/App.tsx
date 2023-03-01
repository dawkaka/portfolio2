import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import NavBar from '../lib/NavBar'
import { isPointInsidePolygon } from '../lib/utils'
import { NavLink } from "../types"
function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [navPos, setNavPos] = useState<NavLink[]>([])
  const [cursor, setCursor] = useState("auto")

  useLayoutEffect(() => {
    let ctx = canvasRef.current!.getContext("2d")!;
    ctx.canvas.width = window.innerWidth
    ctx.canvas.height = window.innerHeight
  }, [])

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d")
      setNavPos(NavBar(ctx!, window.innerWidth / 2, window.innerHeight - 100))
    }

  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    let px = e.pageX as number
    let py = e.pageY as number

    for (let n of navPos) {
      if (isPointInsidePolygon(px, py, { x: n.x, y: n.y }, { x: n.x + n.w, y: n.y }, { x: n.x + n.w, y: n.y + n.h }, { x: n.x, y: n.y + n.h })) {
        setCursor("pointer")
        return
      }
      setCursor("default")
    }
  }

  return (
    <canvas ref={canvasRef} onMouseMove={handleMouseMove} style={{ cursor }}>
    </canvas>
  )
}

export default App
