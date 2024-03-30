module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define("Weather", {
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    temp_c: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    condition: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    wind_degree: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pressure_mb: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    feelslike_c: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Posts;
};
