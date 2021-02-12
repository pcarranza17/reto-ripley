import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ToolbarModule } from 'primeng/toolbar';
import {CardModule} from 'primeng/card';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ChartModule} from 'primeng/chart';
import {TabMenuModule} from 'primeng/tabmenu';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { ClientService } from './services/client.service';
import { ReportComponent } from './components/report/report.component';
import { NewClientComponent } from './components/new-client/new-client.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReportComponent,
    NewClientComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    ToolbarModule,
    DialogModule,
    CardModule,
    MessagesModule,
    MessageModule,
    ChartModule,
    TabMenuModule,
    APP_ROUTING
  ],
  providers: [
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
