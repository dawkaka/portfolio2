import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import NavBar from '../lib/NavBar'
import { isPointInsidePolygon } from '../lib/utils'
import about from "../lib/about"
import skills from "../lib/skills"
import projects from "../lib/projects"
import { Links, NavLink } from "../types"
import drawClock from "../lib/clock"

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [navPos, setNavPos] = useState<NavLink[]>([])
  const [links, setLinks] = useState<Links[]>([])
  const [cursor, setCursor] = useState("auto")
  const [hovered, setHovered] = useState("")
  const [currentPage, setCurrentPage] = useState("About")
  const intervalRef = useRef<number>()
  useLayoutEffect(() => {
    let ctx = canvasRef.current!.getContext("2d")!;
    ctx.canvas.width = window.innerWidth
    ctx.canvas.height = window.innerHeight
  }, [])

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d")!
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      switch (currentPage) {
        case "About":
          setLinks(about(ctx))
          intervalRef.current = setInterval(() => {
            drawClock(currentPage)
          }, 1000)
          break;
        case "Skills":
          skills(ctx)
          break;
        case "Projects":
          setLinks(projects(ctx))
          break;
        default:
          setLinks(about(ctx))
          break;
      }

      setNavPos(NavBar(ctx, currentPage, hovered))
    }
    return () => {
      clearInterval(intervalRef.current)
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

    for (let n of links) {
      if (isPointInsidePolygon(px, py, { x: n.x, y: n.y }, { x: n.x + n.w, y: n.y }, { x: n.x + n.w, y: n.y + n.h }, { x: n.x, y: n.y + n.h })) {
        setCursor("pointer")
        setHovered(n.href)
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
        document.body.removeChild(link)
        setCurrentPage(n.id)
        return
      }
    }

    for (let n of links) {
      if (isPointInsidePolygon(px, py, { x: n.x, y: n.y }, { x: n.x + n.w, y: n.y }, { x: n.x + n.w, y: n.y + n.h }, { x: n.x, y: n.y + n.h })) {
        setCursor("pointer")
        var link = document.createElement('a');
        link.href = `${n.href}`;
        link.target = "_blank"
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link)
        return
      }
    }
  }

  return (
    <canvas id="canvas" ref={canvasRef} onClick={handleClick} onMouseMove={handleMouseMove} style={{ cursor, backgroundColor: "" }}>
    </canvas>
  )
}

export default App
