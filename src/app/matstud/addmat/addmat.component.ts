import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatStudService } from '../matstud.service';


@Component({
  selector: 'app-addmat',
  templateUrl: './addmat.component.html',
  styleUrls: ['./addmat.component.scss']
})
export class AddmatComponent implements OnInit {

selectedFile:File=null;
@ViewChild ('f') addMat:NgForm;
vector:any[]=[];
posts:any[]=[];
url;
msg='';
clicked=false;
  constructor(private http:HttpClient, private serviceStud: MatStudService) { }

  ngOnInit() {
    this.fetchData();
  }

onFileSelected(event){

		let type = event.target.files[0].type;

		if (type.match(/image\/*/) == null) {
			this.msg = "Puteti incarca doar imagini";
			return;
		}
this.selectedFile=event.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result;
		}
	}

storePost(){
  const obj={
    denumire:this.addMat.value.denumire, valoare:this.addMat.value.valoare,
    descriere:this.addMat.value.descriere, poza:this.selectedFile.name,
    email:this.addMat.value.contact,numar:this.addMat.value.numar }
  this.vector.push(obj);
  this.http.put('https://licenta-1f4ad-default-rtdb.europe-west1.firebasedatabase.app/posts.json', this.vector).subscribe(resp=>{
    console.log(resp);
  })
  this.addMat.reset();
  event.preventDefault();
  this.clicked=false;
}
fetchData(){
this.serviceStud.fetchPosts().subscribe(resp=>{
  resp.forEach(element=>{
    this.vector.push(element);
  })
});
}

onClick(){
  this.clicked=true;
}
}
