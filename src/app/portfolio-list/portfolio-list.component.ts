import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent {
  jobList: Array<any> = [
    { title: 'Web design', color: 'red' },
    { title: 'Mobile design', color: 'blue' },
    { title: 'Logo design', color: 'red' },
    { title: 'Web development', color: 'blue' },
    { title: 'Mobile development', color: 'red' },
    { title: 'PWA development', color: 'blue' },
  ];

}
