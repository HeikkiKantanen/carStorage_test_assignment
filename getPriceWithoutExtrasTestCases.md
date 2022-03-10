## Test Cases

**getPriceWithoutExtras(id)**

Returns the price with out extras

- Parameters: id of the car

- Return: The price of the car not including the price of the extras

- if no car with the given number is found throws an exeption `nothing found with given id`

Before tests create `register` -object from the `CarStorage` class with the default data

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
