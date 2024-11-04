import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { DodajSlikuComponent } from './dodaj-sliku/dodaj-sliku.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { LogovanjeComponent } from './logovanje/logovanje.component';
import { OrganizatorComponent } from './organizator/organizator.component';
import { UcesnikComponent } from './ucesnik/ucesnik.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { AdminComponent } from './admin/admin.component'
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { AdminLogovanjeComponent } from './admin-logovanje/admin-logovanje.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PromenaLozinkeComponent } from './promena-lozinke/promena-lozinke.component'
import {MatMenuModule} from '@angular/material/menu';
import { ProfilComponent } from './profil/profil.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ChatComponent } from './chat/chat.component';
import {StreamChatModule, StreamAutocompleteTextareaModule} from 'stream-chat-angular';
import { TranslateModule } from '@ngx-translate/core';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { TemplateComponent } from './template/template.component';
import { RadionicaComponent } from './radionica/radionica.component';
import { MojeRadioniceComponent } from './moje-radionice/moje-radionice.component';
import { KorisniciComponent } from './korisnici/korisnici.component';
import { ChatInboxComponent } from './chat-inbox/chat-inbox.component';
import { KorsComponent } from './kors/kors.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { JsonUploadComponent } from './json-upload/json-upload.component';
import { AdmRadioniceComponent } from './adm-radionice/adm-radionice.component';
import { PredlogComponent } from './predlog/predlog.component';

@NgModule({
  declarations: [
    AppComponent,
    DodajSlikuComponent,
    PocetnaComponent,
    LogovanjeComponent,
    OrganizatorComponent,
    UcesnikComponent,
    RegistracijaComponent,
    TestComponent,
    AdminComponent,
    AdminLogovanjeComponent,
    PromenaLozinkeComponent,
    ProfilComponent,
    ChatComponent,
    TemplateComponent,
    RadionicaComponent,
    MojeRadioniceComponent,
    KorisniciComponent,
    ChatInboxComponent,
    KorsComponent,
    JsonUploadComponent,
    AdmRadioniceComponent,
    PredlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatRadioModule,
    MatCheckboxModule,
    MatIconModule,
    MatDividerModule,
    NgOptimizedImage,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatSidenavModule,
    
    TranslateModule,
    StreamAutocompleteTextareaModule,
    StreamChatModule,
    MatBottomSheetModule,
    CommonModule,
    MatExpansionModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
