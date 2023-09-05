import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-skills-cards',
  templateUrl: './skills-cards.component.html',
  styleUrls: ['./skills-cards.component.css']
})
export class SkillsCardsComponent {
  @Input() progressBars: Array<any> = [];
}
