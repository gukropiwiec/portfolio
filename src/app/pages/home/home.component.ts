import { Component, OnDestroy, OnInit } from '@angular/core';
import { hideAllTooltips } from 'src/app/shared/functions';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    hideAllTooltips();
  }
}
