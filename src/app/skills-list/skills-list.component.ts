import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.css']
})
export class SkillsListComponent {


  skills = 'Skills';
  skills_desc =
    'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length...'; // Your description here
  myfocus = 'My focus';
  mylist: string[] = [
    'UI/UX Design',
    'Responsive Design',
    'Web Design',
    'Mobile App Design'
  ];

  progressBars: Array<any> = [
    { label: 'Html', value: 40 },
    { label: 'Css', value: 50 },
    { label: 'Javascript', value: 60 },
    { label: 'React', value: 70 },
    { label: 'Vue', value: 60 },
    { label: 'Angular', value: 60 }
  ];

}
