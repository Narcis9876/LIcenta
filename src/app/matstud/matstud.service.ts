import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({providedIn:'root'})
export class MatStudService {
constructor(private http:HttpClient){

}
fetchPosts(){
  return this.http.get<any[]>('https://licenta-1f4ad-default-rtdb.europe-west1.firebasedatabase.app/posts.json');
}

}
