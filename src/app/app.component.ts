import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fileContent: string;
  uploadedFileName: string;
  validFileContent: boolean;

  constructor() { }

  setFileContent(event) {
    this.fileContent = event;
  }

  setFileName(event) {
    this.uploadedFileName = event;
  }

  checkFileContent(event) {
    this.validFileContent = event;
  }
}
