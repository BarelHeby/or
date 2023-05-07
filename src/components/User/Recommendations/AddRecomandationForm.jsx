import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FormControl, FormLabel, FormText } from "react-bootstrap";
import { BsStarFill } from "react-icons/bs";
import AlertBox from "../AlertBox/AlertBox";
import { useRef } from "react";
function AddRecomandationForm() {
  const [startSelected, setStarsSelected] = useState(0);
  const [alertText, setAlertText] = useState("");
  const [alertColor, setAlertColor] = useState("");
  const buttons = [];
  const successalertBox = useRef();
  const failalertBox = useRef();
  function controlAlert(color, text) {
    successalertBox.current.setAttribute("color", color);
    successalertBox.current.setAttribute("text", text);
    successalertBox.current.classList.remove("d-none");
    console.log(successalertBox.current);
  }
  for (let i = 0; i < 5; i++) {
    var currentId = "star" + i;
    const star = (
      <BsStarFill
        style={{ color: "black" }}
        className="fs-5 "
        key={i}
        id={currentId}
      />
    );

    const b = (
      <Button
        key={i}
        variant="transparent"
        className="text-center rounded border-0"
        onClick={(e) => {
          for (let j = 0; j <= i; j++) {
            const st = document.getElementById("star" + j);
            st.style.color = "#ffd500";
          }
          for (let j = i + 1; j < 5; j++) {
            const st = document.getElementById("star" + j);
            st.style.color = "black";
          }
          setStarsSelected(i + 1);
        }}
      >
        {star}
      </Button>
    );
    buttons.push(b);
  }

  function addReview(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.name.value;
    if (startSelected === 0) {
      setAlertColor("danger");
      setAlertText("בחר דירוג");
      successalertBox.current.classList.remove("d-none");
      return;
    }

    // TODO in success add review
    setAlertText("נשלח בהצלחה");
    setAlertColor("success");
    successalertBox.current.classList.remove("d-none");
  }
  return (
    <Form className="p-2 pt-0" onSubmit={addReview}>
      <h3>הוסף ביקורת</h3>
      <FormControl className="mb-2" name="name" placeholder="שם" required />
      <FormControl
        className="mb-2 "
        type="textarea"
        rows={3}
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
      <div className="mt-3 d-none " ref={successalertBox}>
        <AlertBox color={alertColor} text={alertText} />
      </div>
    </Form>
  );
}

export default AddRecomandationForm;
