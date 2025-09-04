import Counter from './Counter';

const factList2 = [
  {
    id: 1,
    amount: 8,
    title: 'Years Of Experience',
    suffix: '+'
  },
  {
    id: 2,
    amount: 150000,
    title: 'Happy Patients',
    suffix: '+'
  },
  {
    id: 3,
    amount: 50000,
    title: 'Operations',
    suffix: '+'
  }
];

const Facts = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div
          className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-400 text-white border-radius-lg-top"
          style={{ backgroundImage: 'url(/img/counter-bg.png)', backgroundSize: 'cover' }}
        >
          <div className="card-body p-9 p-xl-10">
            <div className="row justify-content-center align-items-center gy-4 text-center">
              {factList2.map((item) => (
                <Counter key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;
