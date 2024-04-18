import { ExternalLinkTitles } from '../shared/projects';
import { Technology } from './technology.interface';

export interface Project {
    name: string;
    mainImgSrc: string;
    alt: string;
    title: string;
    href?: string;
    codeHref?: string;
    techs: Technology[];
    externalLinkTitle: ExternalLinkTitles;
    detailUrl?: string;
    images?: string[];
    active: boolean;
}
