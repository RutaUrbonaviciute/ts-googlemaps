import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  }

  constructor() {
    this.name = faker.company.companyName(),
      this.catchPhrase = faker.company.catchPhrase(),
      this.location = {
        lat: +faker.address.latitude(),
        lng: +faker.address.longitude()
      }
  }

  markerContent(): string {
    return `
    company name is ${this.name} 
    catch phrase is ${this.catchPhrase}
    `
  }
}