import { Component } from '@angular/core';

@Component({
  selector: 'app-certification',
  standalone: false,
  templateUrl: './certification.html',
  styleUrl: './certification.scss'
})
export class Certification {
  certificatesRow1 = [
    {
      title:'Full-stack web development',
      provider: 'Letsify Sigma4Solutions private limited',
      year: '2025',
      imageUrl: 'full-stack cer.jpg',
      downloadLink: 'full-stack cer.jpg'
    },
    {
      title:'Python Programming',
      provider: 'Phoenix Softtech',
      year: '2025',
      imageUrl: 'phoenix cer.jpg',
      downloadLink: 'phoenix cer.jpg'
    },
    {
      title: 'Web development',
      provider:'Imbeded Software',
      year: '2024',
      imageUrl: 'web development cer.jpg',
      downloadLink: 'web development cer.jpg'
    },
    {
      title: 'Embedded Systems & IOT',
      provider: 'Imbeded Software',
      year: '2024',
      imageUrl: 'embedded and IOT cer.jpg',
      downloadLink: 'embedded and IOT cer.jpg'
    }
  
  ];
  
  certificatesRow2 = [
    {
      title: 'Software Testing',
      provider: 'Naan Mudhalvan',
      year: '2023–2024',
      imageUrl: 'software testing cer.jpg',
      downloadLink: 'software testing cer.jpg'
    },
    {
      title: 'Naalayathiran IBM Skillsbuild',
      provider: 'Naan Mudhalvan',
      year: ' 2023–2024',
      imageUrl: 'IBM cer.jpg',
      downloadLink: 'IBM cer.jpg'
    },
    {
      title: 'Network Essentials',
      provider: 'Naan Mudhalvan',
      year: '2022–2023',
      imageUrl: 'network essentials cer.jpg',
      downloadLink: 'network essentials cer.jpg'
    }
  ];
  
}
