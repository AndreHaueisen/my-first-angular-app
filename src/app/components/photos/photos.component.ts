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
    this.photoService.getPhotos().subscribe((photos) => {

     const photosWithVotes = photos.map((photo) => {
        return new Photo(photo.id, photo.title, photo.url, photo.thumbnailUrl, 0);
      });

      this.photos = photosWithVotes;
    });
  }

  onHidePhoto(photo: Photo): void {
    this.photos = this.photos.filter((p) => p.id !== photo.id);
  }
}
