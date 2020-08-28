import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UploadfileComponent } from './uploadfile/uploadfile.component';
import { SearchfilecontentComponent } from './searchfilecontent/searchfilecontent.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadfileComponent,
    SearchfilecontentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
