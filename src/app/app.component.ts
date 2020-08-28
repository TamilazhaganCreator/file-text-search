import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fileContent: string = "";
  searchText: string;
  noOfOccurrence: number = 0;
  uploadedFileName: string;
  @ViewChild("inputUpload", { static: false }) private inputUpload: ElementRef;

  constructor() {

  }

  getTextFileDetails(event) {
    let file = event.target.files[0];
    this.uploadedFileName = file.name;
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.fileContent = fileReader.result.toString();
    }
    fileReader.readAsText(file);
  }

  upload() {
    this.inputUpload.nativeElement.click();
  }

  searchTextFunc() {
    this.fileContent = this.fileContent.replace(/(<mark>|<\/mark>)/igm, "");
    if (this.searchText) {
      let searchTextRegex = this.searchText.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
      const regexExp = new RegExp(searchTextRegex, 'gi');
      this.noOfOccurrence = (this.fileContent.match(regexExp) || []).length;
      if (this.noOfOccurrence > 0)
        this.fileContent = this.fileContent.replace(regexExp, (match) => `<mark>${match}</mark>`);
    } else
      this.noOfOccurrence = 0;
  }
}
