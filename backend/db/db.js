import mongoose from "mongoose";

const dbURI =
  "mongodb+srv://NabeelSohail:Nabeel30@cluster0.lidnkc6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(dbURI);

mongoose.connection.on("connected", function () {
  console.log("Mongoose is connected");
});

mongoose.connection.on("disconnected", function () {
  console.log("Mongoose is disconnected");
  process.exit(1);
});

mongoose.connection.on("error", function (err) {
  console.log("Mongoose connection error: ", err);
  process.exit(1);
});

process.on("SIGINT", function () {
  console.log("app is terminating");
  mongoose.connection.close(function () {
    console.log("Mongoose default connection closed");
    process.exit(0);
  });
});

export default mongoose;
