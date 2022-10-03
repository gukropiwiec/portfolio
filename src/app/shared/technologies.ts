import { Technology } from '../models/technology.interface';

export const technologiesFrontend: Technology[] = [
    { name: 'HTML', fontColor: 'text-html', icon: 'assets/icons/html.png' },
    { name: 'CSS', fontColor: 'text-css', icon: 'assets/icons/css.png' },
    {
        name: 'JavaScript',
        fontColor: 'text-javascript',
        icon: 'assets/icons/javascript.png'
    },
    {
        name: 'TypeScript',
        fontColor: 'text-typescript',
        icon: 'assets/icons/typescript.png'
    },
    // {
    //     name: 'Bootstrap',
    //     fontColor: 'text-bootstrap',
    //     icon: 'assets/icons/bootstrap.png'
    // },
    { name: 'Ionic', fontColor: 'text-ionic', icon: 'assets/icons/ionic.png' },
    // { name: 'PHP', fontColor: 'text-php', icon: 'assets/icons/php.png' },
    {
        name: 'Angular',
        fontColor: 'text-angular',
        icon: 'assets/icons/angular.png'
    }
    // {
    //     name: 'Laravel',
    //     fontColor: 'text-laravel',
    //     icon: 'assets/icons/laravel.png'
    // }
];

export const technologiesBackend: Technology[] = [
    {
        name: 'Serverless',
        fontColor: 'text-serverless',
        icon: 'assets/icons/serverless-48.png'
    },
    {
        name: 'NodeJS',
        fontColor: 'text-nodejs',
        icon: 'assets/icons/nodejs.png'
    },
    {
        name: 'Python',
        fontColor: 'text-python',
        icon: 'assets/icons/python-48.png'
    },
    {
        name: 'Firebase',
        fontColor: 'text-firebase',
        icon: 'assets/icons/firebase-48.png'
    },
    {
        name: 'SQL',
        fontColor: 'text-sql',
        icon: 'assets/icons/database-48.png'
    },
    {
        name: 'Amazon Web Services',
        fontColor: 'text-aws',
        icon: 'assets/icons/aws-48.png',
        size: 'aws-logo-size'
    }
];
