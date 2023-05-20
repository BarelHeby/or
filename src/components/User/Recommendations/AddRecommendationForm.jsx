import React, { useMemo, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import FormLabel from "react-bootstrap/FormLabel";
import { BsStarFill } from "react-icons/bs";
import AlertBox from "../AlertBox/AlertBox";
import { useRef } from "react";

function AddRecommendationForm() {
  const [starsSelected, setStarsSelected] = useState(0);
  const [alertText, setAlertText] = useState('');
  const [isAddReviewSucceeded, setIsAddReviewSucceeded] = useState(true);
  const successAlertBox = useRef();

  const buttons = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => {
      return (
        <Button
          key={i}
          variant="transparent"
          className="text-center rounded border-0"          
          onClick={() => setStarsSelected(i + 1)}
        >
          <BsStarFill
            style={{color: i < starsSelected ? '#ffd500' : 'black'}}
            className="fs-5 "
            key={i}
            id={"star" + i}
          />
        </Button>
      );
    });
  }, [starsSelected]);

  const addReview = (e) => {
    e.preventDefault();
    if (starsSelected === 0) {
      setIsAddReviewSucceeded(false);
      setAlertText("בחר דירוג");
      successAlertBox.current.classList.remove("d-none");
      return;
    }

    // TODO in success add review
    setAlertText("נשלח בהצלחה");
    successAlertBox.current.classList.remove("d-none");
  }

  return (
    <div>
      <Form
        className="p-2 pt-3 mb-1 mt-1 border rounded bg-light "
        onSubmit={addReview}
      >
        <h3>הוסף ביקורת</h3>
        <FormControl className="mb-2" name="name" placeholder="שם" required />
        <FormControl
          className="mb-2 "
          as="textarea"
          rows={2}
          placeholder="תוכן הביקורת"
          name="description"
          required
        />
        <div className="d-flex justify-content-center align-items-center  ">
          <FormLabel className="mt-1">לא מרוצה</FormLabel>
          <div className="mb-2 d-flex" key={0} id="btns">
            {buttons}
          </div>
          <FormLabel className="mt-1"> מרוצה מאוד</FormLabel>
        </div>
        <Button type="submit" variant="dark">
          הוסף ביקורת
        </Button>
      </Form>
      <div ref={successAlertBox}>
        <AlertBox color={isAddReviewSucceeded ? "success" : "danger"} text={alertText} />
      </div>
    </div>
  );
}

export default AddRecommendationForm;
