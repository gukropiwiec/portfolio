import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { enableTooltips, hideAllTooltips } from 'src/app/shared/functions';

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
        hideAllTooltips();
        enableTooltips();
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
}
