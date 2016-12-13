import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { DataService} from './data.service';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { HistoryComponent } from './history/history.component';
import { TableDetailComponent } from './table-detail/table-detail.component';
import { NavigationComponent } from './navigation/navigation.component';
import { OrderEditorComponent } from './order-editor/order-editor.component';
import { FormComponent } from './order-editor/form/form.component';
import { ListComponent } from './order-editor/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HistoryComponent,
    TableDetailComponent,
    NavigationComponent,
    OrderEditorComponent,
    FormComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
