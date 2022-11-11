import { Technology } from '../models/technology.interface';

export const technologies: { [name: string]: Technology } = {
    html: {
        name: 'HTML',
        fontColor: 'text-html',
        icon: 'assets/icons/html.png'
    },
    css: { name: 'CSS', fontColor: 'text-css', icon: 'assets/icons/css.png' },
    javascript: {
        name: 'JavaScript',
        fontColor: 'text-javascript',
        icon: 'assets/icons/javascript.png'
    },
    typescript: {
        name: 'TypeScript',
        fontColor: 'text-typescript',
        icon: 'assets/icons/typescript.png'
    },
    bootstrap: {
        name: 'Bootstrap',
        fontColor: 'text-bootstrap',
        icon: 'assets/icons/bootstrap.png'
    },
    ionic: {
        name: 'Ionic',
        fontColor: 'text-ionic',
        icon: 'assets/icons/ionic.png'
    },
    php: { name: 'PHP', fontColor: 'text-php', icon: 'assets/icons/php.png' },
    angular: {
        name: 'Angular',
        fontColor: 'text-angular',
        icon: 'assets/icons/angular.png'
    },
    laravel: {
        name: 'Laravel',
        fontColor: 'text-laravel',
        icon: 'assets/icons/laravel.png'
    },
    serverless: {
        name: 'Serverless',
        fontColor: 'text-serverless',
        icon: 'assets/icons/serverless-48.png'
    },
    nodejs: {
        name: 'NodeJS',
        fontColor: 'text-nodejs',
        icon: 'assets/icons/nodejs.png'
    },
    python: {
        name: 'Python',
        fontColor: 'text-python',
        icon: 'assets/icons/python-48.png'
    },
    firebase: {
        name: 'Firebase',
        fontColor: 'text-firebase',
        icon: 'assets/icons/firebase-48.png'
    },
    sql: {
        name: 'SQL',
        fontColor: 'text-sql',
        icon: 'assets/icons/database-48.png'
    },
    aws: {
        name: 'Amazon Web Services',
        fontColor: 'text-aws',
        icon: 'assets/icons/aws-48.png',
        size: 'aws-logo-size'
    },
    mongodb: {
        name: 'MongoDB',
        fontColor: 'text-mongo-db'
    }
};

export const technologiesFrontend: Technology[] = [
    technologies['html'],
    technologies['css'],
    technologies['javascript'],
    technologies['typescript'],
    technologies['ionic'],
    technologies['angular']
];

export const technologiesBackend: Technology[] = [
    technologies['serverless'],
    technologies['nodejs'],
    technologies['python'],
    technologies['firebase'],
    technologies['sql'],
    technologies['aws']
];
