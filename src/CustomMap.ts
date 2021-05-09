import { User } from './User';
import { Company } from './Company';

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(el: string) {
    this.googleMap = new google.maps.Map(document.querySelector(el), {
      zoom: 2,
      zoomControl: true,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addUser(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });
  }
}
