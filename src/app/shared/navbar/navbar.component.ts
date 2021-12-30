import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { checkElement, enableTooltips, hideAllTooltips } from 'src/app/shared/functions';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  activeNav = 'section-intro';
  currentColorMode = localStorage.getItem('colorMode') || 'dark';
  currentUrl = '/';
  lang = localStorage.getItem('lang') || 'en-US';
  faSun = faSun;
  faMoon = faMoon;

  constructor(private translateS: TranslateService, private router: Router) { }

  ngOnInit(): void {
    this.translateS.use(this.lang);
    this.translateS.onLangChange.subscribe((event: LangChangeEvent) => {
      setTimeout(() => {
        hideAllTooltips();
        enableTooltips();
      });
    });
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationStart) {
        this.currentUrl = ev.url;
      }
    });
  }
  
  ngAfterViewInit(): void {
    this.checkNgParticles();
  }
  
  async checkNgParticles() {
    const particlesEL = await checkElement('.tsparticles-canvas-el');
    if (particlesEL) {
      this.changeColorMode(this.currentColorMode);
    }
  }

  changeColorMode(mode: string): void {
    hideAllTooltips();
    this.currentColorMode = mode;
    const bodyEl = document.querySelector('body') as HTMLBodyElement;
    if (mode === 'light') {
      bodyEl.classList.add('light-mode');
      localStorage.setItem('colorMode', 'light');
    } else if (mode === 'dark') {
      bodyEl.classList.remove('light-mode');
      localStorage.setItem('colorMode', 'dark');
    }
    enableTooltips();
  }

  changeLanguage(lang: string): void {
    this.translateS.use(lang);
    this.lang = lang;
    localStorage.setItem('lang', lang);
  }

  goToSection(section: string): void {
    document.getElementById(section)?.scrollIntoView();
  }

  navigateHome(): void {
    if (this.currentUrl === '/') {
      this.goToSection('section-intro');
      return;
    }
    this.router.navigateByUrl('/');
  }
}
