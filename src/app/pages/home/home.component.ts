import { Component, OnInit } from '@angular/core';
import { faChevronDown, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

declare const bootstrap: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  activeNav = 'section-intro';
  faChevronCircleDown = faChevronCircleDown;
  faChevronDown = faChevronDown;
  lang = localStorage.getItem('lang') || 'en-US';

  constructor(private translateS: TranslateService) { }

  ngOnInit(): void {
    this.translateS.use(this.lang);
    this.translateS.onLangChange.subscribe((event: LangChangeEvent) => {
      setTimeout(() => {
        this.hideAllTooltips();
        this.enableTooltips();
      });
    });
  }

  goToSection(section: string): void {
    document.getElementById(section)?.scrollIntoView();
  }

  changeLanguage(lang: string): void {
    this.translateS.use(lang);
    this.lang = lang;
    localStorage.setItem('lang', lang);
  }

  private enableTooltips(): void {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map((tooltipTriggerEl) => {
      new bootstrap.Tooltip(tooltipTriggerEl, {
        container: 'body',
        offset: '0,3'
      });
    });  
  }

  private hideAllTooltips(): void {
    const tooltipElList = document.getElementsByClassName('tooltip');
    for (let i = 0; i < tooltipElList.length; i++) {
      const tooltipEl = tooltipElList[i];
      tooltipEl.remove();
    }
  }
}
