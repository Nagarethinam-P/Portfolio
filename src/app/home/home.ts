import { Component,ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss',
  encapsulation: ViewEncapsulation.None // Ensures CSS applies globally
})
export class Home {
 constructor(private router: Router) {}

  goToResume(): void {
    this.router.navigate(['/resume']);
  }
}