/* eslint-disable react/prop-types */

const HomeCard = ({ item }) => {
  const { name, image_url, description } = item || "";
  return (
    <div>
      
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure className="h-[300px]">
          <img className="h-full object-cover " src={image_url} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name.slice(0, 30)}</h2>
          <p>{description.slice(0, 90)}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
