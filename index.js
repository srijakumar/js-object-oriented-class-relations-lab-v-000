let storeAll = { drivers: [], passengers: [], trips: [] };

let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver{
  constructor(name){
    this.name = name;
    this.id = driverId++;
    storeAll.drivers.push(this);
  }
  trips(){
    return storeAll.trips.filter( trip => {
    return trip.driverId==this.id;
  })
  }

  passengers(){
    return storeAll.passengers.filter(passenger =>{
      return passenger.driverId == this.id;
    })
  }
  
}