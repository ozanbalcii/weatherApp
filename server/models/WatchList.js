module.exports = (sequelize, DataTypes) => {
  const WatchList = sequelize.define("WatchList", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
  });
  return WatchList;
};