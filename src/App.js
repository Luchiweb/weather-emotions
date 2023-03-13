import "./App.css";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Search from "./components/search/Search";

function App() {
  const onSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="container">
      <Search onSearchChange={onSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
