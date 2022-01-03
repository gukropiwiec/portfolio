import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
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

  constructor(private translateS: TranslateService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.languageConfig();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.currentUrl = event.url.split('?')[0];
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

  private languageConfig() {
    this.translateS.use(this.lang).subscribe(() => {
      this.activatedRoute.queryParams.subscribe(queryParams => {
        if (queryParams['lang']) {
          this.translateS.use(queryParams['lang']);
        }
      });
    });
    this.translateS.onLangChange.subscribe((event: LangChangeEvent) => {
      this.lang = event.lang;
      localStorage.setItem('lang', event.lang);
      setTimeout(() => {
        hideAllTooltips();
        enableTooltips();
      });
    });
  }
}
