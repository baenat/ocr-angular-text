import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WebcamModule } from 'ngx-webcam';
import { CameraComponent } from './camera/camera.component';
import { HeaderComponent } from './header/header.component';
import { ImageFileComponent } from './image-file/image-file.component';
import { TesseractComponent } from './tesseract/tesseract.component';

@NgModule({
  declarations: [
    CameraComponent,
    HeaderComponent,
    TesseractComponent,
    ImageFileComponent,
  ],
  imports: [
    CommonModule,
    WebcamModule,
  ],
  exports: [
    CameraComponent,
    HeaderComponent,
    TesseractComponent,
    ImageFileComponent
  ]
})
export class ComponentsModule { }
