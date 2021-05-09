import { User } from './User';
import { Company } from './Company';

const user = new User();
const company = new Company();

console.log(user);
console.log(company);

new google.maps.Map(document.querySelector('#map'), {
  center: {
    lat: 0,
    lng: 0,
  },
  zoom: 1,
  zoomControl: true,
});
