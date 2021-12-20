import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faChevronDown, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

declare const bootstrap: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public faChevronDown = faChevronDown;
  public faChevronCircleDown = faChevronCircleDown;
  public activeNav = 'section-intro';
  public lang = localStorage.getItem('lang') || 'en-US';

  constructor(private router: Router, private translateS: TranslateService) { }

  ngOnInit(): void {
    this.translateS.use(this.lang);
    this.translateS.onLangChange.subscribe((event: LangChangeEvent) => {
      setTimeout(() => {
        this.hideAllTooltips();
        this.enableTooltips();
      });
    });
  }

  goToSection(section: string) {
    document.getElementById(section)?.scrollIntoView();
  }

  changeLanguage(lang: string) {
    this.translateS.use(lang);
    this.lang = lang;
    localStorage.setItem('lang', lang);
  }

  enableTooltips() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map((tooltipTriggerEl) => {
      new bootstrap.Tooltip(tooltipTriggerEl, {
        container: 'body',
        offset: '0,3'
      });
    });  
  }

  hideAllTooltips() {
    const tooltipElList = document.getElementsByClassName('tooltip');
    for (let i = 0; i < tooltipElList.length; i++) {
      const tooltipEl = tooltipElList[i];
      tooltipEl.remove();
    }
  }
}
