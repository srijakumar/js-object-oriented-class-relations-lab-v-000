let store = { drivers: [], passengers: [], trips: [] };

let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver{
  constructor(name){
    this.name = name;
    this.id = driverId++;
    store.drivers.push(this);
  }
  trips(){
    return store.trips.filter( trip => {
    return trip.driverId==this.id;
  })
  }

  passengers(){
    return store.passengers.filter(passenger =>{
      return passenger.driverId == this.id;
    })
  }

}


class Passenger {
  constructor(name){
    this.name = name;
    this.id = passengerId++;
    store.passengers.push(this);
  }

trips(){
  return store.trips.filter(trip => {
    return trip.passengerId == this.Id;
  });
}

drivers (){
  return store.trips.filter(driver => {
    return driver.passengerId == this.id;
  });
}

}

class Trip {
  constructor(driver, passenger){
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    this.trip = tripId++;
    store.trips.push(this);

    driver(){
      return store.driver.filter(trip => {
        return trip.driverId == this.id;
      })
    }

  }

}
