module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define("tbl_orders", {
    o_seq: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement : true,
    },
    o_table: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    o_pcode: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    o_price: {
      type: DataTypes.INTEGER,
      allowNull : false,
    },
    o_count : {
      type : DataTypes.INTEGER,
      allowNull : false,
    },
    o_total : {
      type : DataTypes.INTEGER,
      allowNull : false,
    },
    o_buyer : {
      type : DataTypes.STRING(10),
    },
  });

  // 1:N 관계로 설정하기
  // 이때 A.a_id 칼럼과 B.b_aId 칼럼을
  // 연관지어 FK 설정하라
  // orders.associate = (models) => {
    // orders.hasMany(models.tbl_product, { foreignKey: "p_code" });
  // };
  return orders;
};
