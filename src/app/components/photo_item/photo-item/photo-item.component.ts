import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Photo } from '../../../models/photo';

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.css']
})
export class PhotoItemComponent {

  @Input() photo: Photo | undefined;
  @Output() hideEmitter = new EventEmitter<Photo>();

  constructor() {}
  
  onUpvote(): void {
    if (this.photo) {
      this.photo = this.photo.voteUp();
    }
  }

  onDownvote(): void {
    if(this.photo){
      this.photo = this.photo.voteDown();
    }
  }

  hidePhoto(photo: Photo | undefined): void {
    if(!photo) return;

    this.hideEmitter.emit(this.photo);
  }

}
