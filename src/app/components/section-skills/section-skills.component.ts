import { Component, OnInit } from '@angular/core';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-section-skills',
  templateUrl: './section-skills.component.html',
  styleUrls: ['./section-skills.component.scss']
})
export class SectionSkillsComponent implements OnInit {
  public faMobileAlt = faMobileAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
