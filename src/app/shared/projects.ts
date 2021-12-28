import { Project } from "../models/project.interface";

const imagesPath = 'assets/images/';

export const mainProjects: Project[] = [
    { 
      src: imagesPath + 'esalflores.png',
      alt: 'Banner Esalflores',
      title: 'Banner Esalflores',
      href: 'https://www.esalflores.com.br/',
      externalLinkTitle: 'Open website',
      techs: [
        { name: 'Angular', fontColor: 'text-angular' }, 
        { name: 'Bootstrap', fontColor: 'text-bootstrap' },
        { name: 'Laravel', fontColor: 'text-laravel' }
      ]
    },
    { 
      src: imagesPath + 'orion.png',
      alt: 'Banner Orion',
      title: 'Banner Orion',
      externalLinkTitle: 'Live preview private', 
      techs: [
        { name: 'Angular', fontColor: 'text-angular' }, 
        { name: 'Bootstrap', fontColor: 'text-bootstrap' }
      ]
    },
    { 
      src: imagesPath + 'esalcorp.png',
      alt: 'Esalcorp App',
      title: 'Esalcorp App',
      href: 'https://play.google.com/store/apps/details?id=br.com.esal.esalcorp',
      externalLinkTitle: 'Open on Google Play',
      techs: [
        { name: 'Ionic', fontColor: 'text-ionic' }, 
        { name: 'Angular', fontColor: 'text-angular' }, 
        { name: 'Bootstrap', fontColor: 'text-bootstrap' }
      ]
    },
    { 
      src: imagesPath + 'esalpet.png',
      alt: 'Banner Esalpet',
      title: 'Banner Esalpet',
      href: 'https://www.esalpet.com.br/',
      externalLinkTitle: 'Live preview private',
      techs: [
        { name: 'Angular', fontColor: 'text-angular' }, 
        { name: 'Bootstrap', fontColor: 'text-bootstrap' },
        { name: 'Laravel', fontColor: 'text-laravel' }
      ]
    },
];

export const otherProjects: Project[] = [
    { 
      src: imagesPath + 'currency-exchange-app.png',
      alt: 'Exchange currency to BRL',
      title: 'Exchange currency to BRL',
      href: 'https://gukropiwiec.github.io/currency-exchange-to-brl',
      codeHref: 'https://github.com/gukropiwiec/currency-exchange-to-brl',
      externalLinkTitle: 'Open demo',
      techs: [
        { name: 'Ionic', fontColor: 'text-ionic' },
        { name: 'Angular', fontColor: 'text-angular' }
      ]
    },
    { 
      src: imagesPath + 'realtime-chat-app.png',
      alt: 'Realtime Chat app using Firebase',
      title: 'Realtime Chat app using Firebase',
      codeHref: 'https://github.com/gukropiwiec/chat-firebase',
      externalLinkTitle: 'Demo in development',
      techs: [
        { name: 'Firebase', fontColor: 'text-firebase' },
        { name: 'Ionic', fontColor: 'text-ionic' }, 
        { name: 'Angular', fontColor: 'text-angular' }
      ]
    },
    { 
      src: imagesPath + 'planting-trees.png',
      alt: 'Planting Trees Project',
      title: 'Planting Trees Project',
      codeHref: 'https://github.com/gukropiwiec/rest-api-planting-trees',
      externalLinkTitle: 'Demo in development',
      techs: [
        { name: 'Ionic', fontColor: 'text-ionic' }, 
        { name: 'Angular', fontColor: 'text-angular' }, 
        { name: 'NodeJS', fontColor: 'text-nodejs' },
        { name: 'MongoDB', fontColor: 'text-mongo-db' }
      ]
    }
];