 
// import React, { useState, useEffect } from "react";
// import SearchFilter from "./SearchFilter";
// import PropertyCard from "./PropertyCard";
// import propertiesData from "../data/properties.json";
// import FavouritesList from "./FavouritesList";
// import { Row, Col, Container } from "react-bootstrap";

// const PropertyList = () => {
//   const [filteredProperties, setFilteredProperties] = useState([]);
//   const [favourites, setFavourites] = useState([]);

//   useEffect(() => {
//     console.log("SearchFilter useEffect triggered");

//     // Initialize property list on mount
//     setFilteredProperties(propertiesData);
//   }, []);

//   // Add property to favourites
//   const addFavourite = (property) => {
//     setFavourites((prev) =>
//       prev.some((item) => item.id === property.id) ? prev : [...prev, property]
//     );
//   };

//   // Remove property from favourites
//   const removeFavourite = (id) => {
//     setFavourites((prev) => prev.filter((item) => item.id !== id));
//   };

//   // Clear all favourites
//   const clearFavourites = () => {
//     setFavourites([]);
//   };

//   // Filter properties based on criteria
//   const handleFilter = (filters) => {
//     const filtered = propertiesData.filter((property) => {
//       return (
//         (!filters.type || property.type === filters.type) &&
//         (!filters.minPrice || property.price >= Number(filters.minPrice)) &&
//         (!filters.maxPrice || property.price <= Number(filters.maxPrice)) &&
//         (!filters.minBedrooms || property.bedrooms >= Number(filters.minBedrooms)) &&
//         (!filters.maxBedrooms || property.bedrooms <= Number(filters.maxBedrooms)) &&
//         (!filters.dateAdded || new Date(property.dateAdded) >= new Date(filters.dateAdded))
//       );
//     });
//     setFilteredProperties(filtered);
//   };

//   return (
//     <div>
//       <h2 className="text-center my-4">Property Listings</h2>
//       <SearchFilter onFilter={handleFilter} />

//       <Container fluid>
//         <Row>
//           {/* Property list section */}
//           <Col lg={9}>
//             <div className="property-list">
//               {filteredProperties.length > 0 ? (
//                 <Row>
//                   {filteredProperties.map((property) => (
//                     <Col key={property.id} md={4} className="mb-4">
//                       <PropertyCard
//                         property={property}
//                         onFavourite={addFavourite}
//                       />
//                     </Col>
//                   ))}
//                 </Row>
//               ) : (
//                 <p className="text-center mt-4">No properties found</p>
//               )}
//             </div>
//           </Col>

//           {/* Favourites list section */}
//           <Col lg={3}>
//             <div className="favourites-section p-3 bg-light rounded shadow-sm">
//               <h4>Favourites</h4>
//               <FavouritesList
//                 favourites={favourites}
//                 onRemove={removeFavourite}
//                 onClear={clearFavourites}
//               />
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default PropertyList;
import React, { useState, useEffect, useCallback } from "react";
import SearchFilter from "./SearchFilter";
import PropertyCard from "./PropertyCard";
import propertiesData from "../data/properties.json";
import FavouritesList from "../components/FavouritesList";
import { Row, Col, Container } from "react-bootstrap";

const PropertyList = () => {
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    setFilteredProperties(propertiesData); // Initialize with all properties
  }, []);

  const handleFilter = useCallback((filters) => {
    let filtered = propertiesData;

    filtered = filtered.filter((property) => {
      return (
        (!filters.type || property.type === filters.type) &&
        (!filters.minPrice || property.price >= Number(filters.minPrice)) &&
        (!filters.maxPrice || property.price <= Number(filters.maxPrice)) &&
        (!filters.minBedrooms || property.bedrooms >= Number(filters.minBedrooms)) &&
        (!filters.maxBedrooms || property.bedrooms <= Number(filters.maxBedrooms)) &&
        (!filters.dateAdded || new Date(property.dateAdded) >= new Date(filters.dateAdded)) &&
        (!filters.location || property.location === filters.location)
      );
    });

    setFilteredProperties(filtered);
  }, []);

  const addFavourite = (property) => {
    setFavourites((prev) =>
      prev.find((item) => item.id === property.id) ? prev : [...prev, property]
    );
  };

  const removeFavourite = (id) => {
    setFavourites((prev) => prev.filter((item) => item.id !== id));
  };

  const clearFavourites = () => {
    setFavourites([]);
  };

  return (
    <div>
      <SearchFilter onFilter={handleFilter} />
      <Container fluid>
        <Row>
          {/* Main property list (3/4 width) */}
          <Col lg={9}>
            <div className="property-list">
              {Array.isArray(filteredProperties) && filteredProperties.length > 0 ? (
                <Row>
                  {filteredProperties.map((property) => (
                    <Col key={property.id} md={4} className="mb-4">
                      <PropertyCard
                        property={property}
                        onFavourite={addFavourite}
                      />
                    </Col>
                  ))}
                </Row>
              ) : (
                <p>No properties found</p>
              )}
            </div>
          </Col>

          {/* Favorites list (1/4 width) */}
          <Col lg={3}>
            <div className="favourites-section">
              <FavouritesList
                favourites={favourites}
                onAdd={addFavourite}
                onRemove={removeFavourite}
                onClear={clearFavourites}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PropertyList;
