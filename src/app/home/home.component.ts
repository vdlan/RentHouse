import { Component, OnInit } from '@angular/core';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';
import { FormControl } from '@angular/forms';
import { debounceTime, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  filteredLocationList: Housinglocation[] = [];
  queryControl = new FormControl('');

  constructor(private housingService: HousingService) {
    this.filteredLocationList = housingService.getAllHousingLocations();
   }

  ngOnInit(): void {
    this.queryControl.valueChanges.pipe(
      debounceTime(500),
      switchMap(query => this.housingService.getHousingByCity(query as string).pipe()),
    )
    .subscribe(houses => {
      this.filteredLocationList = houses;
    })
  }

}
