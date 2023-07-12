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

  constructor(private housingService: HousingService) {
    this.housingLocationList = housingService.getAllHousingLocations()
   }

  ngOnInit(): void {
  }

}
