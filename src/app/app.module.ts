import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosComponent } from './components/photos/photos.component';
import { PhotoItemComponent } from './components/photo-item/photo-item.component';
import { HistoryComponent } from './components/history/history.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreatePhotoComponent } from './components/create-photo/create-photo.component';

@NgModule({
  declarations: [AppComponent, PhotosComponent, PhotoItemComponent, HistoryComponent, NavBarComponent, CreatePhotoComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
