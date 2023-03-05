export interface NavLink {
    id: "About" | "Skills" | "Projects" | "Education"
    x: number,
    y: number,
    w: number,
    h: number
}

export interface Links extends Omit<NavLink, "id"> {
    href: string
}

export interface Point {
    x: number,
    y: number
}