export default function Category({ updateCategory }) {
  const categories = ["general", "technology", "business", "sports", "health"];

  const handleChange = (event) => {
    updateCategory(event.target.value);
  };

  return (
    <div>
      <select
        onChange={handleChange}
        defaultValue=""
        style={{
          border: "1px solid gray",
        }}
      >
        <option value="" disabled>
          Select Category
        </option>

        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}
