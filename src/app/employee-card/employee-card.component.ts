import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent {
  employees = [
    {
      name: 'Christian Hoffmann',
      jobTitle: 'Leiter Softwareentwicklung',
      bio: 'Christian ist ein erfahrener Softwareentwickler und Teamleiter...',
      imageUrl: 'https://media.licdn.com/dms/image/D4E03AQFujxrNQmZ-mw/profile-displayphoto-shrink_800_800/0/1685901525389?e=1709164800&v=beta&t=1bSe2mu5NVY93ZXH1KOaqWpsi_FsfcDLse78-dJwEb8'
    },
    {
      name: 'Name',
      jobTitle: 'Praktikant Softwareentwicklung',
      bio: ' 1 Jahre Erfahrung in der Entwicklung',
      imageUrl: 'https://pngimg.com/uploads/face/face_PNG5668.png'
    },
    {
      name: 'Name',
      jobTitle: 'Backend Software Entwickler',
      bio: ' 5 Jahre Erfahrung in der Entwicklung von Backend-Software...',
      imageUrl: 'https://pngimg.com/uploads/face/face_PNG5668.png'
    },
    {
      name: 'Name',
      jobTitle: 'Database Administrator',
      bio: ' Findet die richtigen Daten für die richtigen Leute...',
      imageUrl: 'https://pngimg.com/uploads/face/face_PNG5668.png'
    }
    // more employees
  ];

  animateCard(event: any): void {
    // Optional: Add custom logic for animation
  }
}
