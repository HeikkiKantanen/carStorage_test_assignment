# Test Cases

**getPriceOfTheExtras(id)**

Returns the total price of extras bunled with the car

- Parameters: id of the car to be searched

- Return: the total price of extras. If no extras is found returns 0

- if no car with the given number is found throws an exeption `nothing found with given id`

Before tests create `register` -object from the `CarStorage` class with the default data

## Test 1: Get the total price of extras with parameter 2

```js
reigster.getPriceOfTheExtras(2);
```

returns

```json
210
```

## Test 2: No extras found with given parameter

```js
reigster.getPriceOfTheExtras(3);
```

returns

```json
0
```

## Test 3: No car with given id found

```js
reigster.getPriceOfTheExtras(150);
```

returns

```json
`'nothing found with given id'`
```
