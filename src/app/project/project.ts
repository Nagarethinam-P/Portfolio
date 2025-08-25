import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: false,
  templateUrl: './project.html',
  styleUrl: './project.scss'
})
export class Project {
  onPlay() {
    console.log("Video started playing");
  }
  
  onPause() {
    console.log("Video paused");
  }
  
  onEnd() {
    console.log("Video ended");
  }

  videos = [
    { title: 'ER project video-1', url: 'ER project video-1.mp4' },
    { title: 'ER project video-2', url: 'ER project video-2.mp4' },
    { title: 'ER project video-3', url: 'ER project video-3.mp4' },
    { title: 'ER project video-4', url: 'ER project video-4.mp4' },
    { title: 'ER project video-5', url: 'ER project video-5.mp4' },
    { title: 'ER project video-6', url: 'ER project video-6.mp4' }
  ];

  selectedVideo = this.videos[0].url;

  selectVideo(url: string) {
    this.selectedVideo = url;
  }
  
  
}
