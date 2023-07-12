import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  housingLocation!: Housinglocation | undefined;
  applyForm = this.fb.group({
    firstName: '',
    lastName: '',
    email: ''
  });

  constructor(private route: ActivatedRoute,
    private service: HousingService,
    private fb: FormBuilder) {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.service.getHousingLocationById(housingLocationId);
  }

  ngOnInit(): void {
  }

  submitApplication() {
    this.service.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
