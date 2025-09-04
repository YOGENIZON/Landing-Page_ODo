import CountUp from 'react-countup';

const Counter = ({
  amount,
  title,
  suffix
}) => {
  return <div className="col-sm-6 col-lg-4">
      <h3 className="counter counter-lg text-white fs-36">
        <CountUp end={amount} suffix={suffix}/>
      </h3>
      <p>{title}</p>
    </div>;
};

export default Counter;