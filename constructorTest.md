# Test cases

## **constructor(jsonData)**

The data storage json object is passed as a parameter to the constructor. If the parameter is missing, constructor throws an error `'data storage missing'`.


### Test 1: missing parameter throws an exception
```js
new CarStorage()
```

this will throw an exception `'data storage missing'`

<!-- ### Test 2: object created with given data
```js
new CarStorage(jsonData);
``` -->