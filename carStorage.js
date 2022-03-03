'use strict';

module.exports = class CarStorage {
    constructor(jsonData) {
        if(!jsonData) throw new Error('data storage missing');
        else this.carStorage = jsonData;
    }

    getById(id) {
        if(!id) throw new Error('parameter missing');
            if(id) {
                for(let car of this.carStorage){
                    if(car.id === id) {
                        return [{
                            "id": car.id,
                            "manufacturer": car.manufacturer,
                            "type": car.type,
                            "accessories": car.accessories,
                            "price": car.price,
                            "extras": car.extras
                        }]
                    }
                }
            }
            return null;
    }

    getAllIdsByManufacturer(value) {
        if(!value) return [];
            if(value) {
                for(let car of this.carStorage){
                    if(car.manufacturer === value) {
                        return [car.id]
                    }
                }
            }
            return [];
    }

    getAllCarTypes() {
            const found = [];
                for(let car of this.carStorage) {
                    if(car.type && car.type.length > 0) {
                        found.push(car.type)
                    }
            }
            return found;
    }

    getAllCarsByType(type) {
        if(!type) throw new Error ('missing parameter');

        const found = [];
            for(let car of this.carStorage) {
                if(car.type === type) {
                    found.push({
                        "id": car.id,
                        "manufacturer": car.manufacturer,
                        "type": car.type,
                        "accessories": car.accessories,
                        "price": car.price,
                        "extras": car.extras
                    });
                }
            }
            return found;
    }

    getCarAccessories(id) {
        for(let car of this.carStorage) {
            if(car.id === id) {
                return car.accessories
            };
        }
        return;
    }

    getPriceWithoutExtras(id) {    
        for(let car of this.carStorage) {
            if(car.id === id) {
               return car.price;
            };
        }
        throw new Error("nothing found with given id"); 
        
    }

    getTotalPrice(id) {  
        let totalPrice = 0;  
            for(let car of this.carStorage) {
                if(car.id === id) {
                    totalPrice += car.price;
                if(car.extras && car.extras.length > 0) {
                    for(let extra of car.extras) {
                        totalPrice += extra.price;  
                    }
                }
                return totalPrice;
            }
        }
        throw new Error("nothing found with given id"); 
    }
   
}