import { useAppContext } from '../context';
import { Card } from './';

const Cards = () => {
  const {
    data: { confirmed, recovered, lastUpdate, deaths },
  } = useAppContext();
  if (!confirmed) {
    return <div>Loading...</div>;
  }
  return (
    <div className="w-3/4 mt-12 grid grid-cols-3 gap-4">
      <Card
        title="Infected"
        value={confirmed.value}
        lastUpdate={lastUpdate}
        info="Number of active cases from COVID-19"
      />
      <Card
        title="Deaths"
        value={deaths.value}
        lastUpdate={lastUpdate}
        info="Number of deaths caused by from COVID-19"
      />
      <Card
        title="Recovered"
        value={recovered.value}
        lastUpdate={lastUpdate}
        info="Number of recoveries from COVID-19"
      />
    </div>
  );
};

export default Cards;
