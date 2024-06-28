import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';
@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = "http://localhost:3000/locations"

  constructor() { }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    const response = await data.json();
    return response; // No need for?? here since we're awaiting the json() call
  }

  async getHousingLocationById(id: Number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    const response = await data.json();
    return response;
  }


  submitApplication(firstName: string, lastName: string, email: string, phone: string, message: string) {
    console.log(firstName, lastName, email, phone, message)
  }
}
