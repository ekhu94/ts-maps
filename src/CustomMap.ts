export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  name: string;
}

export class CustomMap {
  googleMap: google.maps.Map;

  constructor(el: string) {
    this.googleMap = new google.maps.Map(document.querySelector(el), {
      center: {
        lat: 0,
        lng: 0,
      },
      zoom: 1,
      zoomControl: true,
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
      title: mappable.name,
      map: this.googleMap,
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
