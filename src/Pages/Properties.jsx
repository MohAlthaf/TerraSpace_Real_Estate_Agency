import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import PropertyList from "../components/PropertyList";
import FavouritesList from "../components/FavouritesList";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Img from "../assets/breadcrumb_gallery.jpg";
import PropertySearchBar from "../components/PropertySearchBar";
import Navbar1 from "../components/Navbar1";
const Properties = () => {
  const [favourites, setFavourites] = useState([]);

  // Add to favourites if not already present
  const addFavourite = (property) => {
    setFavourites((prev) =>
      prev.find((item) => item.id === property.id) ? prev : [...prev, property]
    );
  };

  // Remove from favourites by ID
  const removeFavourite = (id) => {
    setFavourites((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear all favourites
  const clearFavourites = () => {
    setFavourites([]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      {/* <Navbar1 /> */}
      {/* <PropertySearchBar /> */}
      <div>
        <div></div>
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ flex: 1 }}>
          <PropertyList onFavourite={addFavourite} />
        </div>
        {/* <div style={{ flex: 1 }}>
          <FavouritesList
            favourites={favourites}
            onAdd={addFavourite}
            onRemove={removeFavourite}
            onClear={clearFavourites}
          />
        </div> */}
      </div>
    </DndProvider>
  );
};

export default Properties;
