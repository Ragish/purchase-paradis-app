//app/sidebar/Search.js

const Search = ({ onSearch }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="filter searchFilter bg-gray-100 p-4">
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default Search;
