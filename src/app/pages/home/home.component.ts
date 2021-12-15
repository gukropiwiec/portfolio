import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faChevronDown, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

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
  }

  goToSection(section: string) {
    document.getElementById(section)?.scrollIntoView();
  }

  changeLanguage(lang: string) {
    this.translateS.use(lang);
    this.lang = lang;
    localStorage.setItem('lang', lang);
  }
}
