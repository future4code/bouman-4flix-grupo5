export class Episodes {
    constructor(
        private id: string,
        private title: string,
        private synopsis: string,
        private link: string,
        private length: number,         
    ) {}

    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public getSynopsis(): string {
        return this.synopsis;
    }

    public setSynopsis(synopsis: string): void {
        this.synopsis = synopsis;
    }

    public getLink(): string {
        return this.link;
    }

    public setLink(link: string): void {
        this.link = link;
    }

    public getLength(): number {
        return this.length;
    }

    public setLength(length: number): void {
        this.length = length;
    }
}