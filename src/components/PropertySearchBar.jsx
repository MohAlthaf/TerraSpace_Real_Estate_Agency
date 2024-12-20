import  { useState } from 'react';
import { Form, InputGroup, Button, Container, Row, Col } from 'react-bootstrap';
import { Search } from 'lucide-react';

const PropertySearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log({ searchQuery, propertyType, price, location });
  };

  return (
    <Container className="py-4">
      <Form onSubmit={handleSearch}>
        <Row className="g-2 align-items-center bg-white rounded-3 shadow-sm p-3">
          <Col xs={12} md={3}>
            <Form.Group>
              <Form.Label className="text-muted small mb-1">Looking For</Form.Label>
              <Form.Control
                type="text"
                placeholder="What to look for?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-0 bg-light"
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={3}>
            <Form.Group>
              <Form.Label className="text-muted small mb-1">Type</Form.Label>
              <Form.Select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="border-0 bg-light"
              >
                <option value="">Property Type</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="condo">Condo</option>
                <option value="townhouse">Townhouse</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col xs={12} md={3}>
            <Form.Group>
              <Form.Label className="text-muted small mb-1">Price</Form.Label>
              <Form.Select
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="border-0 bg-light"
              >
                <option value="">Price</option>
                <option value="0-100000">$0 - $100,000</option>
                <option value="100000-250000">$100,000 - $250,000</option>
                <option value="250000-500000">$250,000 - $500,000</option>
                <option value="500000+">$500,000+</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col xs={12} md={3}>
            <Form.Group>
              <Form.Label className="text-muted small mb-1">Location</Form.Label>
              <InputGroup>
                <Form.Select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="border-0 bg-light"
                >
                  <option value="">All Cities</option>
                  <option value="new-york">New York</option>
                  <option value="los-angeles">Los Angeles</option>
                  <option value="chicago">Chicago</option>
                  <option value="houston">Houston</option>
                </Form.Select>
                <Button 
                  variant="dark" 
                  type="submit"
                  className="d-flex align-items-center gap-2"
                >
                  <Search size={18} />
                  <span>Search</span>
                </Button>
              </InputGroup>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default PropertySearchBar;