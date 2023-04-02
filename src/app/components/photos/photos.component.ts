import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';
import { Photo } from '../../models/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {
  title: string = 'My awesome photo gallery';
  photos: Photo[] = [];

  constructor(private photoService: PhotosService) {}

  ngOnInit(): void {
    this.photos = this.photoService.getPhotos();
  }

  onHidePhoto(photo: Photo): void {
    this.photos = this.photos.filter((p) => p.id !== photo.id);
  }
}
