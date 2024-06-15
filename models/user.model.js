const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "mysql",
  username: "Vanessa",
  password: "myroxane5",
  database: "sm",
  host: "localhost",
  port: 3306, 
});

const User = sequelize.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    full_names:{
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len : [6, 255]
      }
    },
    phone_number:{
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len : [10, 13]
      }
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true, // Ensure email is unique
      validate: {
        isEmail: true, // Validate email format
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [6, 255], // Validate password length
      },
    },
  },
  {
    timestamps: false,
    indexes: [
      {
        name: "tb_full_names",
        fields: ["full_names"],
      },
      {
        name: "tb_phone_number",
        fields: ["phone_number"],
      },
      {
        name: "tb_email",
        fields: ["email"],
      },
      {
        name: "tb_password",
        fields: ["password"],
      },
    ],
  }
);


User.sync({ alter: true })
  .then(() => {
    console.log("Data table created successfully");
  })
  .catch((error) => {
    console.error("Error creating Data table:", error);
  });

module.exports = User;
