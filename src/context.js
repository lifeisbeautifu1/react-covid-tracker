import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AppContext = createContext();

const URL = 'https://covid19.mathdro.id/api/';

const AppContextProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [dailyData, setDailyData] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  const fetchData = async (country) => {
    let changedURL = URL;
    if (country) changedURL += 'countries/' + country;
    const res = await axios.get(changedURL);
    setData(res.data);
  };

  const fetchDailyData = async () => {
    const res = await axios.get(URL + 'daily');
    setDailyData(
      res.data.map((item) => {
        return {
          date: item.reportDate,
          confirmed: item.confirmed.total,
          deaths: item.deaths.total,
        };
      })
    );
  };

  const fetchCountries = async () => {
    const res = await axios.get(URL + 'countries/');
    setCountries(res.data.countries.map((country) => country.name));
  };

  const handleCountryChange = (e) => {
    const newCountry = e.target.value;
    setSelectedCountry(newCountry);
    fetchData(newCountry);
  };

  useEffect(() => {
    fetchData();
    fetchDailyData();
    fetchCountries();
  }, []);

  return (
    <AppContext.Provider
      value={{
        data,
        dailyData,
        countries,
        handleCountryChange,
        selectedCountry,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

export const useAppContext = () => useContext(AppContext);
