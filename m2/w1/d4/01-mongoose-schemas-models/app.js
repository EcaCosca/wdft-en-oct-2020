const mongoose = require("mongoose");
const data = require("./data.js");

// CLIENT MODEL
const Client = require("./models/ClientModel");

const DB_NAME = "iron-bank";

// CREATE A DATABASE CONNECTION INSTANCE - TO DB `example-mongoose`
mongoose
  .connect(`mongodb://localhost:27017/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`Connected to the database "${DB_NAME}".`);

    const client1 = {
      name: "Infamous Bob 2",
      age: 60,
      accountActive: true,
      balance: 31218.56,
      payments: [],
    };

    // Start async operation of creating a document
    const pr = Client.create(client1);

    return pr;
  })
  .then((createdClient) => {
    // console.log('createdClient', createdClient);

    const pr = Client.findById("5fad4306560812fd42780458");

    return pr;
  })
  .then((foundClient) => {
    // console.log('foundClient', foundClient);

    const pr = Client.insertMany(data);

    return pr;
  })
  .then((result) => {
    // console.log('insertMany result',  result);

    const pr = Client.find();

    return pr;
  })
  .then((result) => {
    let total = 0;

    result.forEach((clientObj) => {
      total += clientObj.balance;
    });

    console.log("total", total);

    const newPayments = [{ amount: 5000 }, { amount: 10000 }];
    const totalPayments = 5000 + 10000;

    const pr = Client.findOneAndUpdate(
      { name: "Tucker Adams" },
      { $set: { balance: totalPayments, payments: newPayments } }
    );

    return pr;
  })
  .then(() => {
    console.log("Field balance was updated");

    const pr = Client.deleteOne({ name: "John Stevenson" });

    return pr;
  })
  .then((result) => {
    console.log("result.deletedCount", result.deletedCount);
  })
  .catch((err) =>
    console.log("Error while trying to connect to the database", err)
  );
