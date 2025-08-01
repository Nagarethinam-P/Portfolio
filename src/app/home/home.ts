import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  phoneNumber: string = '7010443723';
  constructor(private router: Router) {}

  goToResume(): void {
    this.router.navigate(['/resume']);
  }
}
