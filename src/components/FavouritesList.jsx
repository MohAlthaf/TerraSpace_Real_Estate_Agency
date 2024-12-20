import React from "react";
import { useDrop } from "react-dnd";
import PropertyCard1 from "./PropertyCard1";

const FavouritesList = ({ favourites, onAdd, onRemove, onClear }) => {
  // Drop logic for adding to favourites
  const [, drop] = useDrop(() => ({
    accept: "PROPERTY",
    drop: (item) => onAdd(item.property), // Add property when dropped into the favourites list
  }));

  return (
    <div
      ref={drop}
      className="favourite-list"
      style={{
        border: "2px dashed gray",
        padding: "10px",
        minHeight: "200px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h3>Favourites</h3>
      {favourites.length > 0 ? (
        favourites.map((property) => (
          <PropertyCard1
            key={property.id}
            property={property}
            onRemove={() => onRemove(property.id)} // Remove logic on drag out
            isFavourite
          />
        ))
      ) : (
        <p>Drag properties here to add to favourites.</p>
      )}
      {favourites.length > 0 && <button onClick={onClear}>Clear All</button>}
    </div>
  );
};

export default FavouritesList;

