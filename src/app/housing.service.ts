import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  housingLocationList: Housinglocation[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Ha Noi',
      state: 'HN',
      photo: 'https://via.placeholder.com/600/92c952',
      availableUnits: 4,
      wifi: true,
      laundry: true
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Sai Gon',
      state: 'SG',
      photo: 'https://via.placeholder.com/600/771796',
      availableUnits: 0,
      wifi: false,
      laundry: true
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Da Nang',
      state: 'Dn',
      photo: 'https://via.placeholder.com/600/24f355',
      availableUnits: 1,
      wifi: false,
      laundry: false
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Hai Phong',
      state: 'HP',
      photo: 'https://via.placeholder.com/600/d32776',
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Can Tho',
      state: 'CT',
      photo: 'https://via.placeholder.com/600/f66b97',
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Nam Dinh',
      state: 'ND',
      photo: 'https://via.placeholder.com/600/56a8c2',
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Ha Noi',
      state: 'HN',
      photo: 'https://via.placeholder.com/600/b0f7cc',
      availableUnits: 5,
      wifi: true,
      laundry: true
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Sai Gon',
      state: 'SG',
      photo: 'https://via.placeholder.com/600/54176f',
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Da Nang',
      state: 'DN',
      photo: 'https://via.placeholder.com/600/51aa97',
      availableUnits: 10,
      wifi: false,
      laundry: false
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Hai Phong',
      state: 'HP',
      photo: 'https://via.placeholder.com/600/810b14',
      availableUnits: 6,
      wifi: true,
      laundry: true
    }
  ];

  constructor() { }

  getAllHousingLocations(): Housinglocation[] {
    return this.housingLocationList;
  }
  
  getHousingLocationById(id: number): Housinglocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
  
  getHousingByCity(query?: string) : Observable<Housinglocation[]> {
    return of(this.housingLocationList).pipe(
      map(data => 
        data.filter(res => {
          if(!query) return true;
          return res.city.toLowerCase().startsWith(query.toLowerCase());
        })
      )
    )
  }
}
