import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-cards',
  templateUrl: './portfolio-cards.component.html',
  styleUrls: ['./portfolio-cards.component.css']
})
export class PortfolioCardsComponent {
  @Input() job: any;
}
