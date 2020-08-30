import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataInputFieldComponent } from './data-input-field/data-input-field.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataOutputFieldComponent } from './data-output-field/data-output-field.component';
import { ExampleListComponent } from './example-list/example-list.component';
import { ExampleComponent } from './example/example.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DataInputFieldComponent,
    DataOutputFieldComponent,
    ExampleListComponent,
    ExampleComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
