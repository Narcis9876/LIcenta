import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profesori',
  templateUrl: './profesori.component.html',
  styleUrls: ['./profesori.component.scss']
})
export class ProfesoriComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.listFilter = '';
    this.filteredProducts.sort(value=>value.nume);
  }

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

  profesori:any[]=[{nume:'Munteanu Adrian', img:'../../assets/imag/munteanuAdrian.jpg', cabinet:'B 504', mail:'adrian.munteanu@feaa.uaic.ro' },

  {nume:'Sireteanu Napoleon', img:'../../assets/imag/celMaiTareProf.jpg', cabinet:'B 302', mail:'alexandru.sireteanu@feaa.uaic.ro'},

  {nume:'Valy Greavu', img:'../../assets/descărcare.jpg', cabinet:'B 302', mail:'valy.greavu@feaa.uaic.ro'},

  {nume:'Strambei Catalin', img:'../../assets/catalinStrambei.jpg', cabinet:'B 303', mail:'catalin.strimbei@feaa.uaic.ro'},

  {nume:'Fotache Doina', img:'../../assets/imag/DoinaFotache.jpg', cabinet:'B 305', mail:'doina.fotache@feaa.uaic.ro'},

  {nume:'Mesnita Gabriela', img:'../../assets/imag/mesnitaGabirela.jpg', cabinet:'B 305', mail:'gabriela.mesnita@feaa.uaic.ro'},

  {nume:'Fotache Marin', img:'../../assets/imag/Marin Fotache.jpg', cabinet:'B 305', mail:'marin.fotache@feaa.uaic.ro'},

  {nume:'Dumitriu Florin', img:'../../assets/fDumi.jpg', cabinet:'B 314', mail:'florin.dumitriu@feaa.uaic.ro'},

  {nume:'Homocianu Daniel', img:'../../assets/imag/homocianuDaniel.php', cabinet:'B 305', mail:'daniel.homocianu@feaa.uaic.ro'},

  {nume:'Hrubaru Ionut', img:'../../assets/imag/Ionut Hrubaru (crop).jpg', cabinet:'B 305', mail:'ionut.hrubaru@feaa.uaic.ro'},

  {nume:'Popescul Daniela', img:'../../assets/imag/Daniela Popescul.jpg', cabinet:'B 305', mail:'daniela.popescul@feaa.uaic.ro'},

  {nume:'Necula Sabina', img:'../../assets/imag/SabinaNecula.jpg', cabinet:'B 305', mail:'sabina.necula@feaa.uaic.ro'},

  {nume:'Spînu Teodor Marius ', img:'../../assets/imag/MariusSpinu.jpg', cabinet:'B 305', mail:'marius.spiu@feaa.uaic.ro'},

  {nume:'Bertea Paticia', img:'../../assets/imag/PatriciaBertea.jpg', cabinet:'B 305', mail:'patricia.bertea@feaa.uaic.ro'},

  {nume:'Dospinescu Octavian', img:'../../assets/imag/Dospi.jpg', cabinet:'B 305', mail:'octavian.dospinescu@feaa.uaic.ro'},
 ]

  performFilter(filterBy: string):any[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.profesori.filter((product: any) =>
      product.nume.toLocaleLowerCase().includes(filterBy));

  }
  allProf(){
    location.reload();
  }
  gotProf(){
this.router.navigate(['4Studs/Profesori/NapoleonSireteanu']);
  }
}

