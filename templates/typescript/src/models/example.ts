// /**
//  * Defines the user schema for MongoDB using Mongoose.
//  */

import mongoose, { Document, Schema } from "mongoose";

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model<IUser>("User", UserSchema);

export default User;

// /**
//  * Sets up a Sequelize instance for connecting to a PostgreSQL database.
//  */

// import { Sequelize, DataTypes, Model } from "sequelize";

// class User extends Model {
//   public username!: string;
//   public email!: string;
//   public password!: string;

//   // timestamps!
//   public readonly createdAt!: Date;
//   public readonly updatedAt!: Date;
// }

// const sequelize = new Sequelize("database", "username", "password", {
//   host: "localhost",
//   dialect: "postgres",
// });

// User.init(
//   {
//     username: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING,
//   },
//   {
//     tableName: "users",
//     sequelize, // this bit is important
//   },
// );

// export default User;

// /**
//  * Sets up a Sequelize instance for connecting to a MySQL database.
//  */

// import { Sequelize, DataTypes, Model } from "sequelize";

// class User extends Model {
//   public username!: string;
//   public email!: string;
//   public password!: string;

//   // timestamps!
//   public readonly createdAt!: Date;
//   public readonly updatedAt!: Date;
// }

// const sequelize = new Sequelize("database", "username", "password", {
//   host: "localhost",
//   dialect: "mysql",
// });

// User.init(
//   {
//     username: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING,
//   },
//   {
//     tableName: "users",
//     sequelize, // this bit is important
//   },
// );

// export default User;
