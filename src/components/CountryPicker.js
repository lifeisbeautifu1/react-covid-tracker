import { useAppContext } from '../context';

const CountryPicker = () => {
  const { countries, selectedCountry, handleCountryChange } = useAppContext();
  return (
    <form className="w-3/4">
      <select
        className="w-full py-2 px-3 outline-none border-b-4 border-blue-500 rounded"
        value={selectedCountry}
        onChange={handleCountryChange}
      >
        <option value="">Global</option>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
    </form>
  );
};

export default CountryPicker;
