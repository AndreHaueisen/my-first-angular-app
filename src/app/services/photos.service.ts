import { Injectable } from '@angular/core';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor() { }

  getPhotos(): Photo[] {
    return [
      new Photo(1, 'Photo One', 'https://picsum.photos/id/237/200/300', 'John Doe'),
      new Photo(2, 'Photo Two', 'https://picsum.photos/id/237/200/300', 'John Doe'),
      new Photo(3, 'Photo Three', 'https://picsum.photos/id/237/200/300', 'John Doe'),
    ];
  }
}
