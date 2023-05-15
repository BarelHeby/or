import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RecomendationCard from "./RecomendationCard";
import { Get_Recomendations } from "../scripts/recomandations";
function RecomendationRow() {
  const recomendations = Get_Recomendations();
  if (recomendations.status === "loading") {
    return <div></div>;
  }

  return (
    <Row className="text-center">
      {recomendations.data.map((review, key) => {
        console.log(review.insert_date);
        return (
          <Col key={key} xs={6} sm={6} md={3}>
            <RecomendationCard
              name={review.name}
              review={review.review}
              rating={review.rating}
              insert_date={review.insert_date.split("T")[0]}
            />
          </Col>
        );
      })}
    </Row>
  );
}

export default RecomendationRow;
