import { Component, Output, EventEmitter } from '@angular/core';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'app-create-photo',
  templateUrl: './create-photo.component.html',
  styleUrls: ['./create-photo.component.css']
})
export class CreatePhotoComponent {

  title: string = '';
  url: string = '';
  thumbnailUrl: string = '';

  @Output()
  addPhotoEmitter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  submitPhoto(): void {
    const photo = new Photo(0, this.title, this.url, this.thumbnailUrl, 0);
    this.addPhotoEmitter.emit(photo);
    this._resetForm();
  }

  _resetForm(): void {
    this.title = '';
    this.url = '';
    this.thumbnailUrl = '';
  }
}
