# Update Note:
Several pull requests were automatically made by GitHub/DependaBot to attempt
to update the backend dependencies.  These have been ignored per the instructions.

# The Sweetest Client

Tinycakes, LLC is a small startup specializing in less-than-truckload cupcake
delivery. Every day, across the city, people order customized cupcakes from
Tinycakes, LLC’s ordering system via cell phone app, and the company’s
proprietary Cupcake Transport Planning System (TPS) finds optimized routes for
Tinycakes’ fleet of cupcake delivery trucks.

Recently Tinycakes has contracted CarrierDirect to build a web UI to complement
their cell phone app. They have requested that it be developed on top of their
existing API (see `api-spec.md`) using either React, or Angular (1+). Your assignment is to
prototype some of the application's most important screens.

_The code that you submit should be functionally correct and satisfy the
requirements. A beautiful design is not a requirement of this exercise, but
if you have design skills, feel free to show them off here. The scope of this
exercise is frontend only - no changes should be made to the backend API code._

_Feel free to use zero-config tools like `create-react-app` or `@angular/cli`._

### The Cupcake Customization Screen

Create a screen that can be used to customize a single cupcake and order it.

1. The user is offered a choice of three cupcake components, available from `/cupcakes/{bases,frostings,toppings}` respectively (see **API Instructions** below):

   - a base cupcake
   - a frosting
   - toppings (each cupcake can have more than one)

2) The user should be shown a price breakdown including:

   - cupcake price based on pricing of selected cupcake components
   - delivery charge of $1.50 per order
   - sales tax for the state of IL (8.75%)
   - total without tax
   - total with tax

3) The user should choose a delivery date more than 24 hours in the future.

4) The user should click a button to create the order by POSTing it to `localhost:4000/cupcakes/orders`.

### The Cupcake Order Management Screen

Create a screen where users can monitor their existing orders.

1. The user should be displayed their orders in a table ordered by delivery
   time, soonest first, by default.

2. The user should be able to sort orders by delivery time, either ascending,
   or descending.

3. The user should be able to filter orders by cupcake component.

### API Instructions

The `server/` directory contains an implementation of the Tinycakes API server.

To execute the server locally, please use the following instructions:

- Enter the server directory

```
cd server
```

- Install dependencies

```
npm install
```

- Build the server files from typescript

```
npm run build-ts
```

- Execute the server

```
npm start
```

The server should now be running at http://localhost:4000/.

### Submission

Please submit your code via one of the following methods:

- ZIP file
- Public repo
- Private repo with access
