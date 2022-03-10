## Test Cases

**getAllCarsByType(type)**

Returns an array of car objects of given type

Parameters: type of the car to be searched

Returns an array of car objects of given type. If no car of given type is found, returns an empty array.

If a parameter type is missing, an exeption `'missing parameter'`is thrown.

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

Before tests create `register` -object from the `CarStorage` class with the default data

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
