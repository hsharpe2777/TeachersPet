module.exports = function(sequelize, DataTypes) {
  var Teachers = sequelize.define('Teachers', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING
    },
    last_login: {
      type: DataTypes.DATE
    },
    status: {
      type: DataTypes.ENUM('active', 'inactive'),
      defaultValue: 'active'
    }
  });
  Teachers.associate = function(models) {
    Teachers.hasMany(models.Students, {
      onDelete: 'cascade'
    });

    Teachers.hasMany(models.Cal_Events, {
      onDelete: 'cascade'
    });
  };
  return Teachers;
};
