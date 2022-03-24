# Test Cases

## Test suite A: constructor(jsonData)

The data storage json object is passed as a parameter to the constructor. If the parameter is missing, constructor throws an error `'data storage missing'`.

### Test 1: missing parameter throws an exception

```js
new CarStorage();
```

this will throw an exception `'data storage missing'`

## Test suite B: getById(id)

- Method searches the datastorage for an object with given key. Key is unique.

- Parameters: id of the car

- Return: returns the car object matching the id or null if there is no match

- If parameter is missing, throws an exception `'parameter missing'`

The format of the returned array of object is:

```json
{
    "id": ,
    "manufacturer": "",
    "type": "",
    "accessories": ["", "", ""],
    "price": ,
    "extras": [{
        "name": "",
        "price":
        },
        {
        "name": "",
        "price":
        }
    ]
}
```

- Before tests create `register` -object from the `CarStorage` class with the default data

### Test 1: getById(id)

```js
register.getById(1);
```

returns:

```json
{
	"id": 1,
	"manufacturer": "WBM",
	"type": "XGT",
	"accessories": ["radar", "coffee warmer", "hook"],
	"price": 250000,
	"extras": [
		{
			"name": "winter tires",
			"price": 1500
		},
		{
			"name": "summer tires",
			"price": 1000
		}
	]
}
```

### Test 2: if id doesn't match returns null

```js
register getById(150);
```

returns `'null'`

### Test 3: if parameter is missing throws an exception `'parameter missing'`

```js
register getById();
```

returns `'parameter missing'`

## Test suite C: getAllIdsByManufacturer(value)

- Returns all ids of the cars matching the value of manufacturer

- Parameters: value of the property to be searched

- Return: Returns an array of car id where the cars manufacturer matches the given value. If there is no match or parameter is missing, an empty array is returned.

- Before tests create `register` -object from the `CarStorage` class with the default data

### Test 1: getAllIdsByManufacturer(value)

```js
register getAllIdsByManufacturer(WBM);
```

```json
{
	"id": 1,
	"manufacturer": "WBM",
	"type": "XGT",
	"accessories": ["radar", "coffee warmer", "hook"],
	"price": 250000,
	"extras": [
		{
			"name": "winter tires",
			"price": 1500
		},
		{
			"name": "summer tires",
			"price": 1000
		}
	]
}
```

returns [1]

### Test 2: if no match returns an empty array

```js
register getAllIdsByManufacturer(x);
```

returns []

### Test 3: if parameter is missing returns an empty array

```js
register getAllIdsByManufacturer();
```

returns []

## Test suite D: getAllCarTypes()

- Returns an array of different car types.

- Parameters: none

- Return: Returns an array of different car types. If no types are found, returns an empty array. The type is added to the result array only once.

- Before tests create `register` -object from the `CarStorage` class with the default data

### Test 1: test with default data

```js
register.getAllCarTypes();
```

returns ['XGT','Coupe', 'solo']

### Test 2: If no types are found returns an empty array

```json
{
	"id": 1,
	"manufacturer": "WBM",
	"type": " ",
	"accessories": ["radar", "coffee warmer", "hook"],
	"price": 250000,
	"extras": [
		{
			"name": "winter tires",
			"price": 1500
		},
		{
			"name": "summer tires",
			"price": 1000
		}
	]
}
```

```js
register.getAllCarTypes();
```

returns []

## Test suite E: getAllCarsByType(type)

- Returns an array of car objects of given type

- Parameters: type of the car to be searched

- Returns an array of car objects of given type. If no car of given type is found, returns an empty array.

- If a parameter type is missing, an exeption `'missing parameter'`is thrown.

The format of the returned array of object is:

```json
[
   {"id": "",
    "manufacturer": "",
    "type": "",
    "accessories": ["", "", ""],
    "price": ,
    "extras": [{
        "name": "",
        "price":
      },
      {
        "name": "",
        "price":
      }
]
```

- Before tests create `register` -object from the `CarStorage` class with the default data

### Test 1: getAllCarsByType with types: XGT, Coupe, solo

### type XGT returns

```js
register.getAllCarsByType("XGT");
```

returns:

```json
[
	{
		"id": 1,
		"manufacturer": "WBM",
		"type": "XGT",
		"accessories": ["radar", "coffee warmer", "hook"],
		"price": 250000,
		"extras": [
			{
				"name": "winter tires",
				"price": 1500
			},
			{
				"name": "summer tires",
				"price": 1000
			}
		]
	}
]
```

### type Coupe returns

```js
register.getAllCarsByType("Coupe");
```

```json
[
	{
		"id": 2,
		"manufacturer": "Baas",
		"type": "Coupe",
		"accessories": ["clock", "speedometer"],
		"price": 35000,
		"extras": [
			{
				"name": "manual",
				"price": 10
			},
			{
				"name": "warranty",
				"price": 200
			}
		]
	}
]
```

### type solo returns

```js
register.getAllCarsByType("Coupe");
```

```json
[
	{
		"id": 3,
		"manufacturer": "FauV",
		"type": "solo",
		"accessories": [],
		"price": 15000,
		"extras": []
	}
]
```

### Test 2: If no car of given type is found, returns an empty array

```js
register.getAllCarsByType("x");
```

returns []

### Test 3: If a parameter type is missing, an exeption `'missing parameter'`is thrown.

```js
register.getAllCarsByType();
```

throws an exception `'missing parameter'`

## Test suite F: getCarAccessories(id)

- Returns an array of car accessories.

```json
["clock", "speedometer"]
```

- If none found, returns an empty array.

```json
[]
```

- Parameters: id of the car

- Return: returns accessories as an array

- Before tests create `register` -object from the `CarStorage` class with the default data

### Test 1: Returns an array of car accessories

```js
register.getCarAccessories(2);
```

Returns:

```json
["clock", "speedometer"]
```

### Test 2: If no accessories found returns an empty array

```js
register.getCarAccessories(3);
```

Returns:

```json
[]
```

## Test suite G: getPriceWithoutExtras(id)

- Returns the price with out extras

- Parameters: id of the car

- Return: The price of the car not including the price of the extras

- if no car with the given number is found throws an exeption `nothing found with given id`

- Before tests create `register` -object from the `CarStorage` class with the default data

### Test 1: get price with parameter 1

```js
register.getPriceWithoutExtras(1);
```

returns

```json
250000
```

### Test 2: no car found with given parameter

```js
register.getPriceWithoutExtras(150);
```

returns

```json
throws `"nothing found with given id"`
```

## Test suite H: getTotalPrice(id)

- Returns the total price of the car including the total price of the extras

- Parameters: id of the car

- Return: The price of the car including the total price of the extras

- if no car with the given number is found throws an exeption `nothing found with given id`

- Before tests create `register` -object from the `CarStorage` class with the default data

### Test 1: get price with parameter 1

```js
register.getTotalPrice(1);
```

returns

```json
252500
```

### Test 2: no car found with given parameter

```js
register.getTotalPrice(150);
```

returns

```json
throws `"nothing found with given id"`
```

## Test suite I: getPriceOfTheExtras(id)

- Returns the total price of extras bunled with the car

- Parameters: id of the car to be searched

- Return: the total price of extras. If no extras is found returns 0

- if no car with the given number is found throws an exeption `nothing found with given id`

- Before tests create `register` -object from the `CarStorage` class with the default data

### Test 1: Get the total price of extras with parameter 2

```js
reigster.getPriceOfTheExtras(2);
```

returns

```json
210
```

### Test 2: No extras found with given parameter

```js
reigster.getPriceOfTheExtras(3);
```

returns

```json
0
```

### Test 3: No car with given id found

```js
reigster.getPriceOfTheExtras(150);
```

returns

```json
`'nothing found with given id'`
```

## Test suite J: hasAccessories(id)

- Parameters: id of the car

- Return: returns true if the car has accessories else returns false.

- If parameter id is missing false is returned

- Before tests create `register` -object from the `CarStorage` class with the default data

### Test 1: Returns true if car has accessories

```js
register.hasAccessories(2);
```

returns

```json
true
```

### Test 2: Returns false if car doesn't have accessories

```js
register.hasAccessories(3);
```

returns

```json
false
```

### Test 3: Returns false if parameter is missing

```js
register.hasAccessories();
```

returns

```json
false
```
