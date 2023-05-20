import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RecomendationCard from "./RecommendationCard";
import { useGetRecommendations } from "../../../shared/queries";

function RecommendationRow({ numOfRecommendation, setNumOfRecommendations }) {
  const recomendations = useGetRecommendations();
  let firstTime = true;
  useEffect(() => {
    if (
      !recomendations.isFetching &&
      recomendations.data !== undefined &&
      recomendations.data.length < numOfRecommendation
    )
      recomendations.refetch();
  }, [recomendations, numOfRecommendation]);
  useEffect(() => {
    if (recomendations.data !== undefined)
      setNumOfRecommendations(recomendations.data.length);
  }, [setNumOfRecommendations, recomendations]);
  if (recomendations.status === "error")
    return <div>Error has occurred {recomendations.error.message}</div>;
  else if (recomendations.isFetching || recomendations.status === "loading")
    return <div>Loading...</div>;
  else
    return (
      <Row className="text-center">
        {recomendations.data.map((review, key) => {
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

export default RecommendationRow;
