import React from "react";
import Form from "./Form/Form";
import Search from "./Search/Search";

export default function App(props) {
  const [searchValue, setSearchValue] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const state = [
    {
      job: "lekarz",
      countries: ["Polska", "Niemcy"],
      cities: ["Szczecinek", "Poznań"],
      salary: [4000, 7000],
      experience: 2
    },
    {
      job: "stolarz",
      countries: ["Francja", "Niemcy"],
      cities: ["Paryż", "Berlin"],
      salary: [2000, 3000],
      experience: 2
    },
    {
      job: "murarz",
      countries: ["Polska"],
      cities: ["Warszawa"],
      salary: [2000, 3000],
      experience: 2
    }
  ];
  const checkArray = (propValue, value) => {
    const filteredArray = propValue.filter(item => item === value);
    return filteredArray.length ? true : false;
  };
  const offerMatch = (offer, value) => {
    let matchArray = Object.keys(offer).map(key => {
      if (Array.isArray(offer[key])) {
        return checkArray(offer[key], value);
      }
      return offer[key] === value;
    });
    matchArray = matchArray.filter(item => item);
    return matchArray.length ? true : false;
  };
  const searchState = (state, value) => {
    const matchArray = state.filter(offer => {
      return offerMatch(offer, value);
    });
    return matchArray;
  };
  const handleSearch = event => {
    const value = event.target.value;
    setSearchValue(value);
    const results = searchState(state, value);
    setSearchResults(results);
  };
  return (
    <div>
      <h1>App component</h1>
      {/* <Form /> */}
      <Search value={searchValue} onChange={handleSearch} />
    </div>
  );
}
