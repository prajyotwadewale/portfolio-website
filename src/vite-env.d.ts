/// <reference types="vite/client" />

declare module "gsap/SplitText" {
  export class SplitText {
    constructor(target: any, vars?: any);
    chars: HTMLElement[];
    lines: HTMLElement[];
    words: HTMLElement[];
    revert(): void;
  }
}

declare module "gsap/ScrollSmoother" {
  export class ScrollSmoother {
    static create(vars: any): ScrollSmoother;
    static refresh(vars?: any): void;
    static getById(id: string): ScrollSmoother | undefined;
    scrollTop(value?: number): number;
    paused(state?: boolean): boolean;
    scrollTo(target: any, smooth?: boolean, position?: string): void;
  }
}
