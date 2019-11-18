const request = require("supertest");
const fs = require("fs");
const path = require("path");

const app = require("./app");
const cupcakeOptions = require("./fixtures/cupcake-options");

describe("/cupcakes/bases", () => {
  describe("GET", () => {
    it("should return a list of bases", done => {
      request(app)
        .get("/cupcakes/bases")
        .then(response => {
          expect(response.body.bases).toEqual(cupcakeOptions.bases);
          done();
        });
    });
  });
});

describe("/cupcakes/toppings", () => {
  describe("GET", () => {
    it("should return a list of toppings", done => {
      request(app)
        .get("/cupcakes/toppings")
        .then(response => {
          expect(response.body.toppings).toEqual(cupcakeOptions.toppings);
          done();
        });
    });
  });
});

describe("/cupcakes/frostings", () => {
  describe("GET", () => {
    it("should return a list of frostings", done => {
      request(app)
        .get("/cupcakes/frostings")
        .then(response => {
          expect(response.body.frostings).toEqual(cupcakeOptions.frostings);
          done();
        });
    });
  });
});

describe("/cupcakes/orders", () => {
  afterEach(() => {
    const dbPath = path.join(__dirname, "../test.json");
    if (fs.existsSync(dbPath)) fs.unlinkSync(dbPath);
  });

  const goodOrder = {
    order: {
      cupcakes: [
        {
          base: "vanillaBase",
          toppings: ["sprinkles"],
          frosting: "vanillaFrosting"
        },
        {
          base: "redVelvetBase",
          toppings: ["gummyBears"],
          frosting: "redVelvetFrosting"
        }
      ],
      delivery_date: "Sat, 15 Sep 2018 21:25:43 GMT"
    }
  };

  const badOrder = {
    order: "no cupcakes for you"
  };

  describe("POST", () => {
    it("should persist a valid order and return its id", done => {
      request(app)
        .post("/cupcakes/orders")
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")
        .send(goodOrder)
        .then(response => {
          const db = JSON.parse(
            fs.readFileSync(path.join(__dirname, "../test.json"), "utf8")
          );
          expect(db.orders[0].cupcakes).toEqual(goodOrder.order.cupcakes);
          expect(response.body.id).toBeTruthy();
          done();
        });
    });

    it("should respond with an error for an invalid order", done => {
      request(app)
        .post("/cupcakes/orders")
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")
        .send(badOrder)
        .then(response => {
          expect(response.status).toBe(500);
          done();
        });
    });
  });

  describe("GET", () => {
    it("should return a list of orders", done => {
      request(app)
        .post("/cupcakes/orders")
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")
        .send(goodOrder)
        .then(() => {
          request(app)
            .get("/cupcakes/orders")
            .then(response => {
              expect(response.body.orders[0].cupcakes).toEqual(
                goodOrder.order.cupcakes
              );
              done();
            });
        });
    });
  });
});
