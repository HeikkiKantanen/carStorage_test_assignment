## Test Cases

**getTotalPrice(id)**

Returns the total price of the car including the total price of the extras

  - Parameters: id of the car

  - Return: The price of the car including the total price of the extras

  - if no car with the given number is found throws an exeption `nothing found with given id`

### Test 1: get price with parameter 1

```js
register.getTotalPrice(1)
```

returns
```json
252500
```

### Test 2: no car found with given parameter

```js
register.getTotalPrice(150)
```

returns
```json
throws `"nothing found with given id"`
```
