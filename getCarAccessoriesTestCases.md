## Test Cases

**getCarAccessories(id)**

Returns an array of car accessories. 

```json
["clock","speedometer"]
```

If none found, returns an empty array.

```json
[]
```

Parameters: id of the car 

Return: returns accessories as an array

### Test 1: Returns an array of car accessories

```js
register.getCarAccessories(2)
```

Returns: 

```json
["clock","speedometer"]
```

### Test 2: If no accessories found returns an empty array

```js
register.getCarAccessories(3)
```

Returns: 

```json
[]
```


