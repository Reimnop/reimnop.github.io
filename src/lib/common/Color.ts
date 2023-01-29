export class Color {
    r: number;
    g: number;
    b: number;

    constructor(r: number, g: number, b: number) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    static rgb(r: number, g: number, b: number): Color {
        return new Color(r, g, b);
    }

    static hex(hex: string): Color {
        return new Color(
            parseInt(hex.substring(1, 2), 16),
            parseInt(hex.substring(3, 2), 16),
            parseInt(hex.substring(5, 2), 16)
        );
    }

    toString(): string {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
}