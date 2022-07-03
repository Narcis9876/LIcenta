import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
public view=false;
  posts:any[];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.fetchData();
    this.listFilter = '';
  }
  ///////////////////////////////////////
  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter:', value);
    this.filteredProducts = this.performFilter(value);
  }
  filteredProducts: any[] = [];
  sort(){
    this.filteredProducts= this.filteredProducts.sort((product: any) =>
    product.nume.sort());
  }


  performFilter(filterBy: string):any[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.posts.filter((product: any) =>
      product.denumire.toLocaleLowerCase().includes(filterBy));

  }
  ///////////////////////////////////////////////////////////////////
  fetchData(){
    this.http.get<any[]>('https://licenta-1f4ad-default-rtdb.europe-west1.firebasedatabase.app/posts.json').subscribe(resp=>{
      this.posts=resp;
      console.log(this.posts);
    })
  }
  allPosts(){
    this.listFilter='';
    this.view=true;
  }
}
