## Test Cases

**getAllCarTypes()**

Returns an array of different car types. 

Parameters: none

Return: Returns an array of different car types. If no types are found, returns an empty array. The type is added to the result array only once.

## Test 1: test with default data

```js
register.getAllCarTypes()
```

returns ['XGT','Coupe', 'solo']

## Test 2: If no types are found returns an empty array

```json
  {
    "id": 1,
    "manufacturer": "WBM",
    "type": " ",
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
```

```js
register.getAllCarTypes()
```

returns []