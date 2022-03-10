# Test Cases

## **hasAccessories(id)**

- Parameters: id of the car

- Return: returns true if the car has accessories else returns false.

- If parameter id is missing false is returned

Before tests create `register` -object from the `CarStorage` class with the default data

## Test 1: Returns true if car has accessories

```js
register.hasAccessories(2);
```

returns

```json
true
```

## Test 2: Returns false if car doesn't have accessories

```js
register.hasAccessories(3);
```

returns

```json
false
```

## Test 3: Returns false if parameter is missing

```js
register.hasAccessories();
```

returns

```json
false
```
