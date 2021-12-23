import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

declare const bootstrap: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  activeNav = 'section-intro';
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

  
  changeLanguage(lang: string): void {
    this.translateS.use(lang);
    this.lang = lang;
    localStorage.setItem('lang', lang);
  }

  goToSection(section: string): void {
    document.getElementById(section)?.scrollIntoView();
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
