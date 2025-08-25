import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
    skills = [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'Angular', level: 80 },
      { name:'Python',level:70},
      { name: 'MySQL', level: 75 },
      { name: 'C#', level: 70 }
    ];
    
}
