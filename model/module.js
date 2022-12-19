
import { Sequelize } from "sequelize";
import foot from "../CONFIG/config.js";

const {DataTypes} = Sequelize;
const ball = foot.define("arsenalInfo", {
    nameOfTeam: {
        type: DataTypes.STRING
    },
    homeKitColor: {
        type: DataTypes.STRING
    },
    awayKitColor: {
        type: DataTypes.STRING
    },
    playerFirstname: {
        type: DataTypes.STRING
    },
    playerAge: {
        type: DataTypes.DOUBLE
    },
    playerCountry: {
        type: DataTypes.STRING
    },
    playerJerseyNumber: {
        type: DataTypes.DOUBLE
    },
    clubOwnerName: {
        type: DataTypes.STRING
    },
    playerSigingFee: {
        type: DataTypes.DOUBLE
    },
    numberOfPlayer: {
        type: DataTypes.DOUBLE
    },
}, {
    freezeTableName: true
});

export default ball;