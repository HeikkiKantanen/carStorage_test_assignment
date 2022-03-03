# Test cases

## **getById(id)**

Method searches the datastorage for an object with given key. Key is unique.

Parameters: id of the car

Return: returns the car object matching the id or null if there is no match

If parameter is missing, throws an exception `'parameter missing'`

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
Before tests create `register` -object from the `CarStorage` class with the default data

### Test 1: getById(id)

```js
register.getById(1)
```

returns:
```json
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
