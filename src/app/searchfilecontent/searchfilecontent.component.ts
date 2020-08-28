import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-searchfilecontent',
  templateUrl: './searchfilecontent.component.html',
  styleUrls: ['./searchfilecontent.component.css']
})
export class SearchfilecontentComponent {

  searchText: string;
  noOfOccurrence: number = 0;

  @Input() fileContent: string;
  @Input() uploadedFileName: string;
  @Input() validFileContent: boolean;

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
