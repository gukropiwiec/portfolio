export interface Slide {
    src: String;
    alt: String;
    title: String;
    href?: string;
    codeHref?: string;
    techs: {name: string; fontColor: string;}[]
}