import { Component } from '@angular/core';

@Component({
  selector: 'app-dodaj-sliku',
  templateUrl: './dodaj-sliku.component.html',
  styleUrls: ['./dodaj-sliku.component.css']
})
export class DodajSlikuComponent {
  url=""
  width:number
  height:number
  
  onselectFile(e){
    if(e.target.files){
      var reader=new FileReader()
      reader.readAsDataURL(e.target.files[0])
      const Img = new Image();

      reader.onload=(event:any)=>{
        this.url=event.target.result
      }    
      const filesToUpload = (e.target.files);

      Img.src = URL.createObjectURL(filesToUpload[0]);

      Img.onload = (e: any) => {
        this.height = e.path[0].height;
        this.width = e.path[0].width;
  
    }
    }
  }
}
