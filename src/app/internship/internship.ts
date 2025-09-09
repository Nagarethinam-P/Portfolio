import { Component } from '@angular/core';

@Component({
  selector: 'app-internship',
  standalone: false,
  templateUrl: './internship.html',
  styleUrl: './internship.scss'
})
export class Internship {
  internships = [
    {
      title: 'Full Stack Web Development Intern',
      company: 'Letsify Sigma4Solution private limited, Karaikudi',
      period: '3 Months(Feb 2025 – May 2025)'
    },
    {
      title: 'Python Programming Intern',
      company: 'Phoenix Softech, Madurai',
      period: 'Mar 2025'
    },
    {
      title: 'Web Development, Embedded Systems & IoT Intern',
      company: 'Imbed Software, Karaikudi',
      period: 'Dec 2024'
    }
  ];

  courses = [
    {
      title: 'Extended Reality (XR)',
      provider: 'Naan Mudhalvan',
      year: '2024–2025'
    },
    {
      title: 'Software Testing & Automation',
      provider: 'Naan Mudhalvan',
      year: '2023–2024'
    },
    {
      title: 'Naalayathiran – IBM SkillsBuild',
      provider: 'Naan Mudhalvan',
      year: '2023–2024'
    },
    {
      title: 'Network Essentials',
      provider: 'Naan Mudhalvan',
      year: '2022–2023'
    },
    {
      title: 'Microsoft Office Fundamentals',
      provider: 'Naan Mudhalvan',
      year: '2022–2023'
    }
  ];

  course = {
    title: 'Full Stack Web Development',
    provider: 'Letsify Sigma4Solution private limited, Karaikudi',
    status: 'Course',
    duration: '3 Months',
    technologies: ['HTML', 'CSS','Bootstrap','JavaScript', 'Typescript','Angular', 'MySQL', 'c#(DotNET)']
  };
}
