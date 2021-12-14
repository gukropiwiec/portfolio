import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public faChevronDown = faChevronDown;
  public activeNav = 'section-intro';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToSection(section: string) {
    document.getElementById(section)?.scrollIntoView();
  }
}
