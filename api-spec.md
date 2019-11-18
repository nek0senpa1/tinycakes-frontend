# The Tinycakes API

This document serves as a reference for the functions provided in Tinycakes API.

### GET /cupcakes/bases

#### Parameters

None

#### Response

An object with one attribute named "bases" which is an array of base declarations.

Example:

```
{
  "bases": [<base-declaration>, ...]
}
```

A base declaration is made up of the following fields:

- key - A unique key
- name - A name for presentation purposes
- price - A whole number representing the price in cents
- ingredients - An array of ingredient strings

### GET /cupcakes/frostings

#### Parameters

None

#### Response

An object with one attribute named "frostings" which is an array of frosting declarations.

Example:

```
{
  "frostings": [<frosting-declaration>, ...]
}
```

A frosting declaration is made up of the following fields:

- key - A unique key
- name - A name for presentation purposes
- price - A whole number representing the price in cents
- ingredients - An array of ingredient strings

### GET /cupcakes/toppings

#### Parameters

None

#### Response

An object with one attribute named "toppings" which is an array of toppings declarations.

Example:

```
{
  "toppings": [<topping-declaration>, ...]
}
```

A topping declaration is made up of the following fields:

- key - A unique key
- name - A name for presentation purposes
- price - A whole number representing the price in cents
- ingredients - An array of ingredient strings

### POST /cupcakes/orders

#### Parameters

Parameters are given as a JSON object in the form body.

- "order" - an order declaration.

An order declaration is made up of the following fields:

- cupcakes: an array of cupcake declarations
- delivery_date: the delivery date, as a UTC timestamp

A cupcake declaration is made up of the following fields:

- base - The key for the base
- frosting - The key for the frosting
- topping - The key for the topping

Example:

```
{
  "order": {
    cupcakes: [<cupcake-declaration>, ... ],
    delivery_date: (new Date()).toString()
  }
}
```

#### Response

An object with one attribute named "id" which is the id of the created cupcake order.

Example:

```
{
  "id": <cupcake-order-id>
}
```

### GET /cupcakes/orders

#### Parameters

None

#### Response

An array containing all created cupcake orders.

Example:

```
{
  "orders": [<cupcake-order-declaration>, ...]
}
```

A cupcake order declaration is made up of the following fields:

- id - A unique identifier for the order
- delivery_date - The UTC timestamp of the expected delivery, as a string
parseable by the javascript Date object constructor.
- cupcakes - A list of cupcake declarations

```
{
  "id": <order-id>,
  "delivery_date": <utc-timestamp>,
  "cupcakes": [<cupcake-declaration>, ...]
}
```

A cupcake declaration is made up of the following fields:

- base - The key for the base
- frosting - The key for the frosting
- topping - The key for the topping
