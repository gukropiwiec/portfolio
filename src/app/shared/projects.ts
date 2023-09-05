import { Project } from '../models/project.interface';
import { technologies } from './technologies';

export enum ExternalLinkTitles {
    OpenWebsite = 'Open website',
    PrivatePreview = 'Live preview private',
    GooglePlay = 'Open on Google Play',
    OpenDemo = 'Open demo',
    DemoInDevelopment = 'Demo in development'
}

const imagesPath = 'assets/images';

export const projects: { [name: string]: Project } = {
    esalflores: {
        name: 'Esalflores',
        mainImgSrc: `${imagesPath}/esalflores.png`,
        alt: 'Banner Esalflores',
        title: 'Banner Esalflores',
        href: 'https://www.esalflores.com.br/',
        externalLinkTitle: ExternalLinkTitles.OpenWebsite,
        detailUrl: 'esalflores',
        techs: [
            technologies['angular'],
            technologies['bootstrap'],
            technologies['laravel']
        ],
        images: [
            `${imagesPath}/esalflores.png`,
            `${imagesPath}/esalflores.png`,
        ]
    },
    orion: {
        name: 'Orion',
        mainImgSrc: `${imagesPath}/orion.png`,
        alt: 'Banner Orion',
        title: 'Banner Orion',
        externalLinkTitle: ExternalLinkTitles.PrivatePreview,
        detailUrl: 'orion',
        techs: [technologies['angular'], technologies['bootstrap']]
    },
    esalcorp: {
        name: 'Esalcorp',
        mainImgSrc: `${imagesPath}/esalcorp.png`,
        alt: 'Esalcorp App',
        title: 'Esalcorp App',
        href: 'https://play.google.com/store/apps/details?id=br.com.esal.esalcorp',
        externalLinkTitle: ExternalLinkTitles.GooglePlay,
        detailUrl: 'esalcorp',
        techs: [
            technologies['ionic'],
            technologies['angular'],
            technologies['bootstrap']
        ]
    },
    esalpet: {
        name: 'Esalpet',
        mainImgSrc: `${imagesPath}/esalpet.png`,
        alt: 'Banner Esalpet',
        title: 'Banner Esalpet',
        href: 'https://www.esalpet.com.br/',
        externalLinkTitle: ExternalLinkTitles.OpenWebsite,
        detailUrl: 'esalpet',
        techs: [
            technologies['angular'],
            technologies['bootstrap'],
            technologies['laravel']
        ]
    },
    'currency-exchange-app': {
        name: 'Currency Exchange App',
        mainImgSrc: `${imagesPath}/currency-exchange-app.png`,
        alt: 'Exchange currency to BRL',
        title: 'Exchange currency to BRL',
        href: 'https://gukropiwiec.github.io/currency-exchange-to-brl',
        codeHref: 'https://github.com/gukropiwiec/currency-exchange-to-brl',
        externalLinkTitle: ExternalLinkTitles.OpenDemo,
        detailUrl: 'currency-exchange-app',
        techs: [technologies['ionic'], technologies['angular']]
    },
    'realtime-chat-app': {
        name: 'Realtime Chat App',
        mainImgSrc: `${imagesPath}/realtime-chat-app.png`,
        alt: 'Realtime Chat app using Firebase',
        title: 'Realtime Chat app using Firebase',
        codeHref: 'https://github.com/gukropiwiec/chat-firebase',
        externalLinkTitle: ExternalLinkTitles.DemoInDevelopment,
        detailUrl: 'realtime-chat-app',
        techs: [
            technologies['firebase'],
            technologies['ionic'],
            technologies['angular']
        ]
    },
    'planting-trees': {
        name: 'Planting Trees',
        mainImgSrc: `${imagesPath}/planting-trees.png`,
        alt: 'Planting Trees Project',
        title: 'Planting Trees Project',
        codeHref: 'https://github.com/gukropiwiec/rest-api-planting-trees',
        externalLinkTitle: ExternalLinkTitles.DemoInDevelopment,
        detailUrl: 'planting-trees',
        techs: [
            technologies['ionic'],
            technologies['angular'],
            technologies['nodejs'],
            technologies['mongodb']
        ]
    }
};

export const mainProjects: Project[] = [
    projects['esalflores'],
    projects['orion'],
    projects['esalcorp'],
    projects['esalpet']
];

export const otherProjects: Project[] = [
    projects['currency-exchange-app'],
    projects['realtime-chat-app'],
    projects['planting-trees']
];
