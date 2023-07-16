import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

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
      photo: '/assets/example-house.jpg',
      availableUnits: 4,
      wifi: true,
      laundry: true
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Sai Gon',
      state: 'SG',
      photo: '/assets/house1.jpg',
      availableUnits: 0,
      wifi: false,
      laundry: true
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Da Nang',
      state: 'Dn',
      photo: 'https://dotnetmastery.com/bluevillaimages/villa2.jpg',
      availableUnits: 1,
      wifi: false,
      laundry: false
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Hai Phong',
      state: 'HP',
      photo: 'https://dotnetmastery.com/bluevillaimages/villa5.jpg',
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Can Tho',
      state: 'CT',
      photo: 'https://dotnetmastery.com/bluevillaimages/villa4.jpg',
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Nam Dinh',
      state: 'ND',
      photo: 'https://dotnetmastery.com/bluevillaimages/villa1.jpg',
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Ha Noi',
      state: 'HN',
      photo: 'https://dotnetmastery.com/bluevillaimages/villa3.jpg',
      availableUnits: 5,
      wifi: true,
      laundry: true
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Sai Gon',
      state: 'SG',
      photo: '/assets/house2.png',
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Da Nang',
      state: 'DN',
      photo: '/assets/house3.jpg',
      availableUnits: 10,
      wifi: false,
      laundry: false
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Hai Phong',
      state: 'HP',
      photo: '/assets/house4.jpg',
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
}
