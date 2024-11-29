import Product from ".";
import Category from ".";
import { ScrollView } from "../../components";
const ProductList = ({ products }) => {
  return (
    <ScrollView fluid>
      {products.map((product) => (
        <Product product={product} />
      ))}
    </ScrollView>
  );
};

export default ProductList;
