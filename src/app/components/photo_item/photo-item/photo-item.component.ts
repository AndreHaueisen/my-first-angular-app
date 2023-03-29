import { Component, Input } from '@angular/core';
import { Photo } from '../../../models/photo';

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.css']
})
export class PhotoItemComponent {

  @Input() photo: Photo | undefined;

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
}
