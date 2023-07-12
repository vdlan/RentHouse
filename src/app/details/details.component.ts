import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  housingLocation!: Housinglocation | undefined;

  constructor(private route: ActivatedRoute, private service: HousingService) {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.service.getHousingLocationById(housingLocationId);
  }

  ngOnInit(): void {
  }

}
