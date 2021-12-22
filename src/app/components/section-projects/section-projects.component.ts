import { Component, OnInit } from '@angular/core';
import { Slide } from 'src/app/models/slide.interface';

@Component({
  selector: 'app-section-projects',
  templateUrl: './section-projects.component.html',
  styleUrls: ['./section-projects.component.scss']
})
export class SectionProjectsComponent implements OnInit {
  private imagesPath = 'assets/images/';
  public mainProjects: Slide[] = [
    { 
      src: this.imagesPath + 'esalflores.png',
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
      src: this.imagesPath + 'orion.png',
      alt: 'Banner Orion',
      title: 'Banner Orion',
      externalLinkTitle: 'Live preview private', 
      techs: [
        { name: 'Angular', fontColor: 'text-angular' }, 
        { name: 'Bootstrap', fontColor: 'text-bootstrap' }
      ]
    },
    { 
      src: this.imagesPath + 'esalcorp.png',
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
      src: this.imagesPath + 'esalpet.png',
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
  
  public otherProjects: Slide[] = [
    { 
      src: this.imagesPath + 'currency-exchange-app.png',
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
      src: this.imagesPath + 'orion-logo.svg',
      alt: 'Slide 3',
      title: 'Slide 3',
      externalLinkTitle: 'Live preview private',
      techs: [
        { name: 'Angular', fontColor: 'text-angular' }, 
        { name: 'Bootstrap', fontColor: 'text-bootstrap' }
      ]
    },
    { 
      src: this.imagesPath + 'orion-logo.svg',
      alt: 'Slide 3',
      title: 'Slide 3',
      externalLinkTitle: 'Live preview private',
      techs: [
        { name: 'Angular', fontColor: 'text-angular' }, 
        { name: 'Bootstrap', fontColor: 'text-bootstrap' }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
