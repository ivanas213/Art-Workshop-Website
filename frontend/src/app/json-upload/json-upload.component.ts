import { Component, OnInit } from '@angular/core';
import { Radionica } from '../modeli/Radionica';

@Component({
  selector: 'app-json-upload',
  templateUrl: './json-upload.component.html',
  styleUrls: ['./json-upload.component.css']
})
export class JsonUploadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selectedFile
  pom
  r:Radionica
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(this.selectedFile, "UTF-8");
    fileReader.onload = () => {
     this.pom=fileReader.result
    }
    fileReader.onerror = (error) => {
      console.log(error);
    }
  }
  onUpload(){
    this.r=JSON.parse(this.pom)
    //alert(this.r.id)
  }
}
