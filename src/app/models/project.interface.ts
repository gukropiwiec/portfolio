import { Technology } from "./technology.interface";

export interface Project {
    src: String;
    alt: String;
    title: String;
    href?: string;
    codeHref?: string;
    techs: Technology[];
    externalLinkTitle: string;
}
