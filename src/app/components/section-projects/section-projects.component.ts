import { Component, OnInit } from '@angular/core';
import { Slide } from 'src/app/models/slide.interface';

@Component({
  selector: 'app-section-projects',
  templateUrl: './section-projects.component.html',
  styleUrls: ['./section-projects.component.scss']
})
export class SectionProjectsComponent implements OnInit {
  private srcPath = 'assets/images/';
  public mainProjects: Slide[] = [
    { src: this.srcPath + 'orion.png', alt: 'Banner Orion', title: 'Banner Orion', 
      techs: [
        { name: 'Angular', fontColor: 'text-angular' }, 
        { name: 'Bootstrap', fontColor: 'text-bootstrap' }
      ]
    },
    { src: this.srcPath + 'esalflores.png', alt: 'Banner Esalflores', title: 'Banner Esalflores', href: 'https://www.esalflores.com.br/',
      techs: [
        { name: 'Angular', fontColor: 'text-angular' }, 
        { name: 'Bootstrap', fontColor: 'text-bootstrap' },
        { name: 'Laravel', fontColor: 'text-orange' }
      ]
    },
    { src: this.srcPath + 'esalpet.png', alt: 'Banner Esalpet', title: 'Banner Esalpet', href: 'https://www.esalpet.com.br/',
      techs: [
        { name: 'Angular', fontColor: 'text-angular' }, 
        { name: 'Bootstrap', fontColor: 'text-bootstrap' }
      ]
    }
  ];
  public otherProjects: Slide[] = [
    { src: this.srcPath + 'orion-logo.svg', alt: 'Slide 1', title: 'Slide 1', techs: [{ name: 'Angular', fontColor: 'text-angular' }, { name: 'Bootstrap', fontColor: 'text-bootstrap' }]},
    { src: this.srcPath + 'orion-logo.svg', alt: 'Slide 2', title: 'Slide 2', techs: [{ name: 'Angular', fontColor: 'text-angular' }, { name: 'Bootstrap', fontColor: 'text-bootstrap' }]},
    { src: this.srcPath + 'orion-logo.svg', alt: 'Slide 3', title: 'Slide 3', techs: [{ name: 'Angular', fontColor: 'text-angular' }, { name: 'Bootstrap', fontColor: 'text-bootstrap' }]}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
