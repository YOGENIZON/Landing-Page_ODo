import Link from "next/link";

const ServiceCard = (props) => {
  const { title, url, description, Icon, className = 'd-flex flex-row' } = props;
  return (
    <div className={className}>
      <div>{Icon}</div>
      <div>
        <Link href={url}><h3 className="mb-1 sub-h3">{title}</h3></Link>
        <p className="mb-0">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
