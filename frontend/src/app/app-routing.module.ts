import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmRadioniceComponent } from './adm-radionice/adm-radionice.component';
import { AdminLogovanjeComponent } from './admin-logovanje/admin-logovanje.component';
import { AdminComponent } from './admin/admin.component';
import { ChatInboxComponent } from './chat-inbox/chat-inbox.component';
import { ChatComponent } from './chat/chat.component';
import { JsonUploadComponent } from './json-upload/json-upload.component';
import { KorisniciComponent } from './korisnici/korisnici.component';
import { KorsComponent } from './kors/kors.component';
import { LogovanjeComponent } from './logovanje/logovanje.component';
import { MojeRadioniceComponent } from './moje-radionice/moje-radionice.component';
import { OrganizatorComponent } from './organizator/organizator.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { PredlogComponent } from './predlog/predlog.component';
import { ProfilComponent } from './profil/profil.component';
import { PromenaLozinkeComponent } from './promena-lozinke/promena-lozinke.component';
import { RadionicaComponent } from './radionica/radionica.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { TestComponent } from './test/test.component';
import { UcesnikComponent } from './ucesnik/ucesnik.component';
const routes: Routes = [  
{path:'',component:PocetnaComponent},
{path:'ucesnik',component:UcesnikComponent},
{path:'organizatir',component:OrganizatorComponent},
{path:'admin',component:AdminComponent},
{path:'registracija',component:RegistracijaComponent},
{path:'test',component:TestComponent},
{path:'logovanje',component:LogovanjeComponent},
{path:'admin_logovanje',component:AdminLogovanjeComponent},
{path:'promena_lozinke',component:PromenaLozinkeComponent},
{path:'registracija',component:RegistracijaComponent},
{path:'profil',component:ProfilComponent},
{path:'chat',component:ChatComponent},
{path:'radionica',component:RadionicaComponent},
{path:'moje_radionice',component:MojeRadioniceComponent},
{path:'korisnici',component:KorisniciComponent},
{path:'kors',component:KorsComponent},
{path:'chatinbox',component:ChatInboxComponent},
{path:"json_upload",component:JsonUploadComponent},
{path:"rad",component:AdmRadioniceComponent},
{path:"predlog",component:PredlogComponent}







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
