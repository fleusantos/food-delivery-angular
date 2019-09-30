import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {
  cities = [
    { city: 'Lagos', area: ['Ikorodu', 'Badagry', 'Lekki', 'Victoria Island', 'Ajah'] },
    { city: 'Osun', area: ['Aagba', 'Ada', 'Ikirun', 'Ilesa ', 'Ibokun'] },
    { city: 'Ekiti', area: ['Ado-Ekiti', 'Oye-Ekiti', 'Ido', 'Aramoko ', 'Erio-Ekiti'] }
  ];
  areas = [];
  constructor() {}

  ngOnInit() {}
}
