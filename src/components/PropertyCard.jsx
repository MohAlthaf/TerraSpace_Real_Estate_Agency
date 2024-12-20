import React from "react";
import { useDrag } from "react-dnd";
import { Card, Button, Badge } from "react-bootstrap";
import { Icon } from "@iconify/react";

const PropertyCard = ({
  property,
  onFavourite,
  onRemove,
  isFavourite = false,
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "PROPERTY",
    item: { id: property.id, property },
    end: (item, monitor) => {
      if (!monitor.didDrop() && isFavourite) {
        onRemove(); // Call onRemove immediately
      }
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <Card
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        marginBottom: "15px",
        border: "0",
        borderRadius: "20px",
        position: "relative",
      }}
      className="property-card"
    >
      <Card.Img
        src={property.images[0]}
        alt="property"
        style={{ height: "200px", objectFit: "cover", borderRadius: "20px" }}
      />
      {/* Heart Icon */}
      <div
        onClick={() => {
          console.log(`Toggling favorite status: ${!isFavourite}`);
          isFavourite ? onRemove(property.id) : onFavourite(property);
        }}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          cursor: "pointer",
          color: isFavourite ? "red" : "gray", // Changes color based on isFavourite
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "50%",
          padding: "5px",
        }}
      >
        <Icon
          icon={isFavourite ? "mdi:heart" : "mdi:heart-outline"}
          width="24"
          height="24"
        />
      </div>

      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title>{property.shortDescription}</Card.Title>
          <Card.Title>${property.price}</Card.Title>
        </div>
        <div>
          <p>${property.location}</p>
        </div>
        <div className="d-flex mt-2 gap-2">
          <Badge
            bg="white"
            text="muted"
            className="align-items-center border"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="d-flex align-items-center">
              <Icon
                icon="ph:house-bold"
                width="26"
                height="26"
                className="me-2"
              />

              <Card.Text style={{ fontSize: "15px" }}>
                {property.type}
              </Card.Text>
            </div>
          </Badge>
          <Badge
            bg="white"
            text="muted"
            className="align-items-center border"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="d-flex align-items-center">
              <Icon
                icon="mdi:bedroom-outline"
                width="28"
                height="28"
                className="me-2"
              />
              <Card.Text style={{ fontSize: "15px" }}>
                {property.bedrooms}
              </Card.Text>
            </div>
          </Badge> <Badge
            bg="white"
            text="muted"
            className="align-items-center border"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="d-flex align-items-center">
              <Icon
                icon="mdi:bedroom-outline"
                width="28"
                height="28"
                className="me-2"
              />
              <Card.Text style={{ fontSize: "15px" }}>
                {property.postcode}
              </Card.Text>
            </div>
          </Badge>
          
          <Badge bg="light" text="dark"></Badge>
          <Badge bg="light" text="dark"></Badge>
        </div>

        <Card.Text>
          {property.bedrooms}
          <br />
          <strong>Date Added:</strong> {property.dateAdded}
        </Card.Text>
        {!isFavourite ? (
          <Button variant="primary" onClick={() => onFavourite(property)}>
            Add to Favourites
          </Button>
        ) : (
          <Button variant="danger" onClick={() => onRemove(property.id)}>
            Remove from Favourites
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default PropertyCard;
