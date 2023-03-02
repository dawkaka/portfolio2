import { Point } from "../types";

export function isPointInsidePolygon(cx: number, cy: number, p1: Point, p2: Point, p3: Point, p4: Point): boolean {
    //==by chatGPT

    const polygon = [p1, p2, p3, p4]
    let point = { x: cx, y: cy }
    let intersections = 0;
    for (let i = 0; i < polygon.length; i++) {
        let p1 = polygon[i];
        let p2 = polygon[(i + 1) % polygon.length];

        // Check if point is on an edge
        if (point.y > Math.min(p1.y, p2.y) && point.y <= Math.max(p1.y, p2.y) && point.x < Math.max(p1.x, p2.x)) {
            let xIntersection = (point.y - p1.y) * (p2.x - p1.x) / (p2.y - p1.y) + p1.x;

            // Check if point is on a vertex
            if (xIntersection == point.x) {
                return true;
            }
            // Check if point is to the left of the edge
            if (xIntersection > point.x) {
                intersections++;
            }
        }
    }
    return intersections % 2 != 0;
}

export function clamp(min: number, val: number, max: number): number {
    return min > val ? min : max < val ? max : val
}