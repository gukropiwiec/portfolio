import { Technology } from './technology.interface';

export interface Project {
    name: string;
    src: string;
    alt: string;
    title: string;
    href?: string;
    codeHref?: string;
    techs: Technology[];
    externalLinkTitle: string;
    detailUrl?: string;
}
