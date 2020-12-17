import mongoose from "mongoose";
mongoose
  .connect(
    "mongodb+srv://martin:eXP2fZbLaejh1Kds@grapql-db.uymsn.mongodb.net/graphql-db?retryWrites=true&w=majority"
  )
  .then((db) => console.log("database is connected"))
  .catch((err) => console.log(err));
