import Logo from './image.png';
import { Cards, Charts, CountryPicker } from './components';

const App = () => {
  return (
    <div className="h-full overflow-auto bg-gray-100 font-primary py-16">
      <div className="h-full w-4/5 m-auto flex flex-col items-center gap-8">
        <div>
          <img src={Logo} alt="logo" className="w-full" />
        </div>
        <Cards />
        <CountryPicker />
        <Charts />
      </div>
    </div>
  );
};

export default App;
