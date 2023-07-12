import { Component, OnInit } from '@angular/core';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  housingLocationList: Housinglocation[] = [];
  filteredLocationList: Housinglocation[] = [];

  constructor(private housingService: HousingService) {
    this.housingLocationList = housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
   }

  ngOnInit(): void {
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    }
  
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }

}
