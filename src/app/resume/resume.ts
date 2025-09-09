import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-resume',
  standalone: false,
  templateUrl: './resume.html',
  styleUrl: './resume.scss'
})
export class Resume {
  downloadResumeAsPDF() {
    const doc = new jsPDF();

    const img = new Image();
    img.src = 'NAGARETHINAM-P.jpg';

    img.onload = () => {
      const imgWidth = 210; 
      const pageHeight = 297; 
      const imgHeight = (img.height * imgWidth) / img.width;

      doc.addImage(img, 'JPEG', 0, 0, imgWidth, imgHeight);
      doc.save('NAGARETHINAM-P.pdf');
    };
  }

}
