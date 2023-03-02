import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import NavBar from '../lib/NavBar'
import { isPointInsidePolygon } from '../lib/utils'
import { writeName } from "../lib/draw"
import { NavLink } from "../types"
function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [navPos, setNavPos] = useState<NavLink[]>([])
  const [cursor, setCursor] = useState("auto")
  const [hovered, setHovered] = useState("")
  const [currentPage, setCurrentPage] = useState("About")

  useLayoutEffect(() => {
    let ctx = canvasRef.current!.getContext("2d")!;
    ctx.canvas.width = window.innerWidth
    ctx.canvas.height = window.innerHeight
  }, [])

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d")!
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      setNavPos(NavBar(ctx, currentPage, hovered))
      writeName(ctx)
    }
  }, [hovered, currentPage])

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    let px = e.pageX as number
    let py = e.pageY as number

    for (let n of navPos) {
      if (isPointInsidePolygon(px, py, { x: n.x, y: n.y }, { x: n.x + n.w, y: n.y }, { x: n.x + n.w, y: n.y + n.h }, { x: n.x, y: n.y + n.h })) {
        setCursor("pointer")
        setHovered(n.id)
        return
      }
      setHovered("")
      setCursor("default")
    }
  }

  function handleClick(e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) {
    let px = e.pageX as number
    let py = e.pageY as number
    for (let n of navPos) {
      if (isPointInsidePolygon(px, py, { x: n.x, y: n.y }, { x: n.x + n.w, y: n.y }, { x: n.x + n.w, y: n.y + n.h }, { x: n.x, y: n.y + n.h })) {
        setCursor("pointer")
        var link = document.createElement('a');
        link.href = `#${n.id}`;
        document.body.appendChild(link);
        link.click();
        setCurrentPage(n.id)
        return
      }
    }
  }

  return (
    <canvas ref={canvasRef} onClick={handleClick} onMouseMove={handleMouseMove} style={{ cursor }}>
    </canvas>
  )
}

export default App
