import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})

export class Contact {
  email = "nagarethinamp68@gmail.com";

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor(private http: HttpClient) { }

  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      this.http.post('http://localhost:5150/api/contact', this.formData)
        .subscribe({
          next: (response) => {
            alert('Message sent successfully!');
            this.formData = { name: '', email: '', subject: '', message: '' };
          },
          error: (error) => {
            console.error('Error sending message', error);
            alert('Failed to send message.');
          }
        });
    }
  }
}
