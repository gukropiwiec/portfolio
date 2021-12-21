import { Component, OnInit } from '@angular/core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-section-contact',
  templateUrl: './section-contact.component.html',
  styleUrls: ['./section-contact.component.scss']
})
export class SectionContactComponent implements OnInit {
  public faExternalLinkAlt = faExternalLinkAlt;

  constructor(private translateS: TranslateService) { }

  ngOnInit(): void {
  }

  sendFormEmail(): void {
    this.translateS.get('Oops! Sorry, functionality in development.').subscribe(res => {
      alert(res);
    });
  }

}
