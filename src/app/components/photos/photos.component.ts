import { Component, OnInit } from '@angular/core';
import { Photo } from '../../models/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {
  title: string = 'My awesome photo gallery';
  photos: Photo[] = [];

  constructor() {}

  ngOnInit(): void {
    this.photos = [
      new Photo(1, 'Photo One', 'https://picsum.photos/id/237/200/300', 'John Doe'),
      new Photo(2, 'Photo Two', 'https://picsum.photos/id/237/200/300', 'John Doe'),
      new Photo(3, 'Photo Three', 'https://picsum.photos/id/237/200/300', 'John Doe'),
    ];
  }

  onHidePhoto(photo: Photo): void {
    this.photos = this.photos.filter((p) => p.id !== photo.id);
  }
}
