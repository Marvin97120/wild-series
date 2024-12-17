import react from "react";

interface Category {
  id: number;
  name: string;
}

const Categories = () => {
  const [categories, setCategories] = react.useState<Category[]>([]);

  react.useEffect(() => {
    fetch("http://localhost:3310/api/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <h2>{category.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
