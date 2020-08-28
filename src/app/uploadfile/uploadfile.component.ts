import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})
export class UploadfileComponent {

  uploadedFileName: string;
  uploadedFile;

  @Output() getFileContent: EventEmitter<any> = new EventEmitter()
  @Output() getFileName: EventEmitter<any> = new EventEmitter()
  @Output() validContentCheck: EventEmitter<boolean> = new EventEmitter()

  @ViewChild("inputUpload", { static: false }) private inputUpload: ElementRef;

  ngOnInit() {
    this.setFileContent(null, true, "Kindly Upload a text file to see it's content")
  }

  getTextFileDetails(event) {
    let file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.checkFileContent(fileReader, file);
    }
    fileReader.readAsText(file);
  }

  private checkFileContent(fileReader: FileReader, file: any) {
    let content = fileReader.result.toString();
    if (content.length == 0)
      this.setFileContent(null, false, "Empty file");
    else if (!content.replace(/\s/g, '').length)
      this.setFileContent(null, false, "File  contains only whitespace (ie.spaces, tabs or line breaks)");
    else
      this.setFileContent(file.name, true, fileReader.result.toString());
  }

  private setFileContent(fileName: string, validOrNot: boolean, content: string) {
    if (!fileName)
      this.uploadedFile = null;
    this.uploadedFileName = fileName;
    this.getFileName.next(this.uploadedFileName);
    this.validContentCheck.next(validOrNot)
    this.getFileContent.next(content);
  }

  upload() {
    this.inputUpload.nativeElement.click();
  }

}
