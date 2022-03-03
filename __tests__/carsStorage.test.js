'use strict';

const CarStorage = require('../carStorage');
const cars = require('../dataStorage.json');

describe('Testing constructor', () => {
    test('Test 1: missing parameter throws an exception', () => {
        expect(() => new CarStorage()).toThrow('data storage missing');
    });
});

describe('Testing method getById(id)', () => {
    const register = new CarStorage(cars);
    test('id 1 returns the corresponding equal from the dataStorage', () => {
        const expected = [
            {
                "id": 1,
                "manufacturer": "WBM",
                "type": "XGT",
                "accessories": ["radar", "coffee warmer", "hook"],
                "price": 250000,
                "extras": [{
                    "name": "winter tires",
                    "price": 1500
                },
                {
                    "name": "summer tires",
                    "price": 1000
                }
                ]
            }
            ];
        const register = new CarStorage(cars);
        expect(register.getById(1)).toEqual(expected);
    });

    test('Test 2: if id does not match returns null', () => {
        expect(register.getById(150)).toBeNull();
    });

    test('Test 3: if parameter is missing throws an exception', () => {
        expect(() => register.getById()).toThrow('parameter missing');
    });
    
}); // end of getById tests

describe('testing method getAllIdsByManufacturer(value)', () => {
    const register = new CarStorage(cars);
    test('Test 1: get with parameter WBM', () => {
        expect(register.getAllIdsByManufacturer('WBM')).toEqual([1])
    });

    test('Test 2: if no match returns an empty array', () => {
        expect(register.getAllIdsByManufacturer('x')).toEqual([])
    });

    test('Test 3: if parameter is missing returns an empty array', () => {
        expect(register.getAllIdsByManufacturer()).toEqual([])
    });
}); // end of getAllIdsByManufacturer tests

describe('testing method getAllCarTypes()', () =>{
    const register = new CarStorage(cars);
    test('Test 1: test with default data', () => {
        expect(register.getAllCarTypes()).toEqual(['XGT','Coupe', 'solo'])
    });

    test('Test 2: If no types are found returns an empty array', () => {
        const testData = [
            {
                "id": 1,
                "manufacturer": "WBM",
                "type": '',
                "accessories": ["radar", "coffee warmer", "hook"],
                "price": 250000,
                "extras": [{
                    "name": "winter tires",
                    "price": 1500
                  },
                  {
                    "name": "summer tires",
                    "price": 1000
                  }
                ]
              }
        ];
        const register = new CarStorage(testData);
        expect(register.getAllCarTypes()).toEqual([]);
    }); 
}); // end of getAllCarTypes tests

describe('Testing method getAllCarsByType(type)', () =>{
    const register = new CarStorage(cars);

    describe('Test 1: testing individually', () => {
        test('type XGT returns', () => {
            const expected = [
            {
                 "id": 1,
                "manufacturer": "WBM",
                "type": "XGT",
                "accessories": ["radar", "coffee warmer", "hook"],
                "price": 250000,
                "extras": [{
                    "name": "winter tires",
                    "price": 1500
                },
                {
                    "name": "summer tires",
                    "price": 1000
                }
                ]
            }
            ];
            expect(register.getAllCarsByType('XGT')).toEqual(expected);
        });

        test('type Coupe returns', () => {
            const expected = [
                {
                     "id": 2,
                        "manufacturer": "Baas",
                        "type": "Coupe",
                        "accessories": ["clock","speedometer"],
                        "price": 35000,
                        "extras": [{
                            "name": "manual",
                            "price": 10
                          },
                          {
                            "name": "warranty",
                            "price": 200
                          }
                        ]
                    }
                ];
                expect(register.getAllCarsByType('Coupe')).toEqual(expected);
            });

            test('type solo returns', () => {
                const expected = [
                    {
                        "id": 3,
                        "manufacturer": "FauV",
                        "type": "solo",
                        "accessories": [],
                        "price": 15000,
                        "extras": []
                      }
                ];
                expect(register.getAllCarsByType('solo')).toEqual(expected);
            });
       });

       describe('Test 2: If no car of given type is found, returns an empty array', () => {
           test('type not found, returns an empty array', () => {
               expect(register.getAllCarsByType('x')).toEqual([]);
           });
       });

       describe('Test 3: If a parameter type is missing throws an exeption', () => {
           test('missing type throws an exception', () => {
               expect(() => register.getAllCarsByType()).toThrow('missing parameter');
           });
       });
    }); // end of getAllCarsByType tests

    describe('Testing method getCarAccessories(id)', () => {
        const register = new CarStorage(cars);

        test('Test 1: Get accessories of car id 2', () => {
            expect(register.getCarAccessories(2)).toEqual(['clock','speedometer']);
        });

        test('Test 2: No accessories found returns an empty array', () => {
            expect(register.getCarAccessories(3)).toEqual([]);
        });
    }); // end of getCarAccessories tests

    describe('Testing method getPriceWithoutExtras(id)', () => {
        const register = new CarStorage(cars);

        test('Test 1: get price with parameter 1', () => {
            expect(register.getPriceWithoutExtras(1)).toEqual(250000);
        });

        test('Test 2: no car found with given parameter', () => {
            expect(() => register.getPriceWithoutExtras(150)).toThrow('nothing found with given id');
        });
    }); // end of getPriceWithoutExtras tests

    describe('Testing method getTotalPrice(id)', () => {
        const register = new CarStorage(cars);

        test('Test 1: get price with parameter 1', () => {
            expect(register.getTotalPrice(1)).toEqual(252500);
        });

        test('Test 2: no car found with given parameter', () => {
            expect(() => register.getTotalPrice(150)).toThrow('nothing found with given id');
        });
    })