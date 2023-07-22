import PropertyCard from "./PropertyCard";

const PropertiesGridContainer = ({allProperties}) => {
  return (
    <div className="self-stretch flex flex-row flex-wrap items-start justify-center text-left text-[14.51px] text-gray-700 font-body-regular-600">
      <div className="flex-1 flex flex-row flex-wrap items-start justify-center gap-[12px] px-2.5">
        {allProperties.map((property) =>(
          <PropertyCard 
          key={property.id}
          imgUrl={property.image}
          name={property.name}
          price={property.price}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertiesGridContainer;
