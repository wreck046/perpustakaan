import { Component } from '@angular/core';
import { DataService } from '../data.service';
import DataBuku from '../../../assets/buku.json'

interface buku {
  image_url: String;
  judul: String;
  genre: String;
  Penerbit: String;
}

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html'
})
export class HomesComponent {

  buku$ = this.dataService.getBuku

  constructor(private dataService: DataService) {}

  pustaka: buku[] = DataBuku;
}
