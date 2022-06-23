import CountUp from 'react-countup';

const Card = ({ value, lastUpdate, title, info }) => {
  let border;
  switch (title) {
    case 'Deaths':
      border = 'border-red-500';
      break;
    case 'Recovered':
      border = 'border-green-500';
      break;
    default:
      border = 'border-blue-500';
  }
  return (
    <div
      className={`col-span-3 md:col-span-1 bg-white p-6 rounded-md shadow-md border-b-8 ${border}`}
    >
      <h2 className="text-gray-500">{title}</h2>
      <h1 className="text-xl text-black">
        <CountUp start={0} end={value} duration={2.5} separator="," />
      </h1>
      <h3 className="text-gray-500 text-lg">
        {new Date(lastUpdate).toDateString()}
      </h3>
      <p className="text-sm">{info}</p>
    </div>
  );
};

export default Card;
