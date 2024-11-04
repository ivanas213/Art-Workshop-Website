import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  /* <div>
    <<form fxLayoutAlign="stretch" fxLayout="column" class="login-form" appInputStyle *ngIf="korisnik.tip=='organizator'">
        <button  mat-raised-button appInputStyle (click)="izaberiKorisnika()">Izaberite korisnika</button>
        <select [(ngModel)]="izabraniKorisnik" [ngModelOptions]="{standalone: true}">
          <option *ngFor="let k of korisnicii" value="{{k.id}}">{{k.korisnicko_ime}}</option>
        </select>
      </form>
 </div> */
}
