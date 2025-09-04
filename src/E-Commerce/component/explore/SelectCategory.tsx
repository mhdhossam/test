import "./SelectCategory.css";
import { FC } from "react";

interface Category {
  value: string;
  label: string;
}

interface SelectCategoryProps {
  categories: Category[];
  selectedCategory: string;
  handleCategoryChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectCategory: FC<SelectCategoryProps> = ({
  categories,
  selectedCategory,
  handleCategoryChange,
}) => {
  return (
    <div className="select-category">
      <label htmlFor="category">Filter by Category:</label>
      <select
        id="category"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="all">All Categories</option>
        {categories.map((category) => (
          <option key={category.value} value={category.label.toLowerCase()}>
            {category.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCategory;