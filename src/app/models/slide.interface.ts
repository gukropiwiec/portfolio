import { Tech } from "./tech.interface";

export interface Slide {
    src: String;
    alt: String;
    title: String;
    href?: string;
    codeHref?: string;
    techs: Tech[];
    externalLinkTitle: string;
}
