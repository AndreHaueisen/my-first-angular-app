import { Component, OnInit } from '@angular/core';
import  {Photo}  from '../models/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  title: string = 'My awesome photo gallery';
  photos: Photo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.photos = [
      {
        id: 1,
        title: 'Photo One',
        url: 'https://picsum.photos/id/237/200/300',
        author: 'John Doe'
      },
      {
        id: 2,
        title: 'Photo Two',
        url: 'https://picsum.photos/id/237/200/300',
        author: 'John Doe'
      },
      {
        id: 3,
        title: 'Photo Three',
        url: 'https://picsum.photos/id/237/200/300',
        author: 'John Doe',
      },
    ];
  }

}

