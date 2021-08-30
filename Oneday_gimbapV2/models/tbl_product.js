module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define("tbl_product", {
    p_code: {
      type: DataTypes.STRING(10),
      primaryKey: true,
    },
    p_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    p_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    p_rem: {
      type: DataTypes.STRING(30),
    },
  });

  // 1:N 관계로 설정하기
  // 이때 A.a_id 칼럼과 B.b_aId 칼럼을
  // 연관지어 FK 설정하라
  product.associate = (models) => {
    product.hasMany(models.tbl_orders, { foreignKey: "o_pcode" });
  };
  return product;
};
