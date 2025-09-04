import Image from 'next/image';

const CTA2 = () => {
  const cards = [
    {
      title: 'Dra. Cesarina Santana',
      ocupation: 'Odontología General',
      p: 'Cesarina cultiva un ambiente de confianza y comunicación abierta, fomentando relaciones colaborativas que empoderan a cada persona en su camino hacia una sonrisa radiante y una salud bucal óptima.',
      image: '/img/icons/image.png',
      alt: 'Advanced Facilities at ENTrova',
      bg: '#113377'
    },
    {
      title: 'Albert Santana',
       ocupation: 'Founder',
      image: '/img/icons/leader.webp',
      p: 'Albert quiere resaltar la importancia de un servicio excepcional y personalizado en cada interacción. Inspirado por su experiencia en la Infantería de Marina, donde la atención al detalle y el compromiso con la excelencia son fundamentales, es por esto que se ha integrado estos valores en la cultura de Monest. ',
      alt: 'State-of-the-art Operating Rooms at ENTrova',
      bgImage: '/img/photos/cta-bg.jpg'
    },
    {
      title: 'Dra. Lucy Tejada',
      ocupation: 'Rehabilitación Oral y Estética Dental',
      p: 'Elevando las sonrisas a nuevos niveles, con un toque experto y un ojo de artista para la belleza, la Dra. Tejada personifica la pasión de Monest por crear sonrisas iluminadoras que inspiran.   Su búsqueda de educación continua asegura el dominio de las últimas técnicas dentales estéticas para resultados superiores y duraderos.',
      image: '/img/icons/do2.webp',
      alt: 'Experienced Medical Experts at ENTrova',
      bg: '#17449E'
    }
  ];

  return (
    <section className="row text-center justify-content-center p-0">
      {cards.map((card, index) => (
        <div className="col-xl-4 p-0" key={index}>
          <div
            className="p-10 h-100"
            style={{
              backgroundColor: card.bg,
              backgroundImage: card.bgImage ? `url(${card.bgImage})` : undefined,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}
          >
            <div className="d-flex flex-column align-items-center justify-content-center py-5">
              <figure className="rounded mb-4">
                <Image src={card.image} alt={card.alt} width={100} height={100} className="img-fluid" />
              </figure>
              <h3 className="text-white">{card.title}</h3>
              <h5 className="text-white">{card.ocupation}</h5>
              <p className="text-white w-75 my-3">
                {card.p}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CTA2;
