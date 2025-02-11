import Category from ".";
import { ScrollView } from "../../components";
const CategoryList = ({ categories }) => {
  return (
    <ScrollView
      fluid
      style={{ paddingTop: 20, paddingLeft: 20, paddingRight: 20 }}
    >
      {categories?.map((category) => (
        <Category category={category} />
      ))}
    </ScrollView>
  );
};

export default CategoryList;
