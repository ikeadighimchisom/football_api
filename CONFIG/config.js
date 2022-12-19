import { Sequelize } from "sequelize";
const foot = new Sequelize ("arsenalFc", "root", "root", {
    host: "localhost",
    dialect: "mysql"
});

export default foot;