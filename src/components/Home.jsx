import { useEffect, useState } from "react";
import HomeCard from "./HomeCard";

const Home = () => {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  // data fetching
  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setFilteredData(data); 
      });
  }, []);

  // search data
  const handleSearch = () => {
    const searchItem = searchData.toLowerCase();
    const filterData = data.filter((item) =>
      item.name.toLowerCase().includes(searchItem)
    );
    setFilteredData(filterData);
  };

  return (
    <div>
      <div className="flex justify-end py-5">
        <div className="join">
          <input
            onChange={(e) => setSearchData(e.target.value)}
            className="input input-bordered join-item"
            placeholder="Search by name"
          />
          <button onClick={handleSearch} className="btn join-item rounded-r-full">
            Search
          </button>
        </div>
      </div>
      {filteredData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((item) => (
            <HomeCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div>
          <h1 className="text-3xl text-red-500 text-center">
            Oops!! No results found. Try searching again.
          </h1>
        </div>
      )}
    </div>
  );
};

export default Home;
