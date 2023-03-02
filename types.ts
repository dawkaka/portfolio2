export interface NavLink {
    id: "About" | "Skills" | "Projects" | "Education"
    x: number,
    y: number,
    w: number,
    h: number
}

export interface Links extends Omit<NavLink, "id"> {
    href: "https://github.com/dawkaka" | "https://www.linkedin.com/in/yussif-mohammed/" | "https://dev.to/dawkaka",
}

export interface Point {
    x: number,
    y: number
}