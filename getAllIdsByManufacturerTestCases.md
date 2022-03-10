# Test Cases

**getAllIdsByManufacturer(value)**

Returns all ids of the cars matching the value of manufacturer

Parameters: value of the property to be searched

Return: Returns an array of car id where the cars manufacturer matches the given value. If there is no match or parameter is missing, an empty array is returned.

Before tests create `register` -object from the `CarStorage` class with the default data

## Test 1: getAllIdsByManufacturer(value)

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
