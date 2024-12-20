// import React, { useState, useEffect } from "react";
// import { Form, InputGroup, Button, Container, Row, Col } from "react-bootstrap";
// import { X } from "lucide-react";
// import Img3 from "../assets/3d-rendering-wooden-house2.jpg";

// const SearchFilter = ({ onFilter }) => {
//   const [filters, setFilters] = useState({
//     type: "",
//     minPrice: "",
//     maxPrice: "",
//     minBedrooms: "",
//     maxBedrooms: "",
//     dateAdded: "",
//     location: "",
//   });

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       onFilter(filters);
//     }, 300); // Add debounce to limit frequent calls

//     return () => clearTimeout(timer);
//   }, [filters, onFilter]);

//   const handleChange = (e) => {
//     setFilters({ ...filters, [e.target.name]: e.target.value });
//   };

//   const handleReset = () => {
//     setFilters({
//       type: "",
//       minPrice: "",
//       maxPrice: "",
//       minBedrooms: "",
//       maxBedrooms: "",
//       dateAdded: "",
//       location: "",
//     });
//   };

//   return (
//     <Container fluid className="py-4">
//       <Form
//         style={{
//           backgroundImage: 'url("../assets/3d-rendering-wooden-house2.jpg")',
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           minHeight: "200px",
//         }}
//         className="rounded"
//       >
//         <Row className="g-2 align-items-center bg-white rounded-3 shadow-sm p-3 m-2 mt-4">
//           <Col xs={12} md={2}>
//             <Form.Group>
//               <Form.Label className="text-muted small mb-1">Type</Form.Label>
//               <Form.Select
//                 name="type"
//                 value={filters.type}
//                 onChange={handleChange}
//                 className="border-muted border-1 p-2"
//               >
//                 <option value="">Any</option>
//                 <option value="House">House</option>
//                 <option value="Flat">Flat</option>
//               </Form.Select>
//             </Form.Group>
//           </Col>

//           <Col xs={12} md={2}>
//             <Form.Group>
//               <Form.Label className="text-muted small mb-1">
//                 Price Range
//               </Form.Label>
//               <InputGroup>
//                 <Form.Control
//                   type="number"
//                   placeholder="Min Price"
//                   name="minPrice"
//                   value={filters.minPrice}
//                   onChange={handleChange}
//                   className="border-muted border-1 p-2"
//                 />
//                 <Form.Control
//                   type="number"
//                   placeholder="Max Price"
//                   name="maxPrice"
//                   value={filters.maxPrice}
//                   onChange={handleChange}
//                   className="border-muted border-1 p-2"
//                 />
//               </InputGroup>
//             </Form.Group>
//           </Col>

//           <Col xs={12} md={2}>
//             <Form.Group>
//               <Form.Label className="text-muted small mb-1">
//                 Location
//               </Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter location"
//                 name="location"
//                 value={filters.location}
//                 onChange={handleChange}
//                 className="border-muted border-1 p-2"
//               />
//             </Form.Group>
//           </Col>

//           <Col xs={12} md={2}>
//             <Form.Group>
//               <Form.Label className="text-muted small mb-1">
//                 Bedrooms
//               </Form.Label>
//               <InputGroup>
//                 <Form.Control
//                   type="number"
//                   placeholder="Min Beds"
//                   name="minBedrooms"
//                   value={filters.minBedrooms}
//                   onChange={handleChange}
//                   className="border-muted border-1 p-2"
//                 />
//                 <Form.Control
//                   type="number"
//                   placeholder="Max Beds"
//                   name="maxBedrooms"
//                   value={filters.maxBedrooms}
//                   onChange={handleChange}
//                   className="border-muted border-1 p-2"
//                 />
//               </InputGroup>
//             </Form.Group>
//           </Col>

//           <Col xs={12} md={2}>
//             <Form.Group>
//               <Form.Label className="text-muted small mb-1">
//                 Date Added
//               </Form.Label>
//               <Form.Control
//                 type="date"
//                 name="dateAdded"
//                 value={filters.dateAdded}
//                 onChange={handleChange}
//                 className="border-muted border-1 p-2"
//               />
//             </Form.Group>
//           </Col>

//           <Col
//             xs={12}
//             md={2}
//             className="d-flex flex-column justify-content-end"
//           >
//             <Button
//               variant="outline-dark"
//               onClick={handleReset}
//               className="bg-black text-white w-100 d-flex align-items-end gap-2 mt-auto"
//             >
//               <X size={24} />
//               <span>Reset</span>
//             </Button>
//           </Col>
//         </Row>
//       </Form>
//     </Container>
//   );
// };

// export default SearchFilter;
import React, { useState, useEffect } from "react";
import { Form, InputGroup, Button, Container, Row, Col } from "react-bootstrap";
import { X } from "lucide-react";
import Img3 from "../assets/3d-rendering-wooden-house2.jpg";

const SearchFilter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    type: "",
    minPrice: "",
    maxPrice: "",
    minBedrooms: "",
    maxBedrooms: "",
    dateAdded: "",
    location: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      onFilter(filters);
    }, 300); // Add debounce to limit frequent calls

    return () => clearTimeout(timer);
  }, [filters, onFilter]);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setFilters({
      type: "",
      minPrice: "",
      maxPrice: "",
      minBedrooms: "",
      maxBedrooms: "",
      dateAdded: "",
      location: "",
    });
  };

  return (
    <Container fluid className="py-4">
      <div
        className="rounded p-4 shadow-sm"
        style={{
          backgroundImage: `url(${Img3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="fw-bold text-black">Property Listing</h1>
        <Row
          className="g-3 align-items-end bg-white rounded-3 shadow p-4"
          style={{ marginTop: "40px" }}
        >
          <Col xs={12} md={1}>
            <Form.Group>
              <Form.Label className="text-muted small">Type</Form.Label>
              <Form.Select
                name="type"
                value={filters.type}
                onChange={handleChange}
              >
                <option value="">Any</option>
                <option value="House">House</option>
                <option value="Flat">Flat</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col xs={12} md={3}>
            <Form.Group>
              <Form.Label className="text-muted small">Price Range</Form.Label>
              <InputGroup>
                <Form.Control
                  type="number"
                  placeholder="Min Price"
                  name="minPrice"
                  value={filters.minPrice}
                  onChange={handleChange}
                />
                <Form.Control
                  type="number"
                  placeholder="Max Price"
                  name="maxPrice"
                  value={filters.maxPrice}
                  onChange={handleChange}
                />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col xs={12} md={2}>
            <Form.Group>
              <Form.Label className="text-muted small">Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter location"
                name="location"
                value={filters.location}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={3}>
            <Form.Group>
              <Form.Label className="text-muted small">Bedrooms</Form.Label>
              <InputGroup>
                <Form.Control
                  type="number"
                  placeholder="Min Beds"
                  name="minBedrooms"
                  value={filters.minBedrooms}
                  onChange={handleChange}
                />
                <Form.Control
                  type="number"
                  placeholder="Max Beds"
                  name="maxBedrooms"
                  value={filters.maxBedrooms}
                  onChange={handleChange}
                />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col xs={12} md={2}>
            <Form.Group>
              <Form.Label className="text-muted small">Date Added</Form.Label>
              <Form.Control
                type="date"
                name="dateAdded"
                value={filters.dateAdded}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          <Col
            xs={12}
            md={1}
            className="d-flex flex-column justify-content-end"
          >
            <Button
              variant="outline-dark"
              onClick={handleReset}
              className="bg-black text-white w-100 d-flex align-items-end gap-2 mt-auto"
            >
              <X size={24} />
              <span>Reset</span>
            </Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default SearchFilter;
