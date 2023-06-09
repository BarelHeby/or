import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import FormLabel from "react-bootstrap/FormLabel";
import { BsStarFill } from "react-icons/bs";
import AlertBox from "../AlertBox/AlertBox";
import { useRef } from "react";
import { Add_Recomendations } from "../scripts/recomandations";
function AddRecomandationForm() {
  const [startSelected, setStarsSelected] = useState(0);
  const [alertText, setAlertText] = useState("");
  const [alertColor, setAlertColor] = useState("");
  const buttons = [];
  const successalertBox = useRef();

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

  async function addReview(e) {
    e.preventDefault();
    successalertBox.current.classList.remove("d-none");
    const name = e.target.name.value;
    const review = e.target.review.value;
    if (startSelected === 0) {
      setAlertColor("danger");
      setAlertText("בחר דירוג");
      successalertBox.current.classList.remove("d-none");
      return;
    }

    const resp = await Add_Recomendations(name, review, startSelected);
    if (resp.ok) {
      setAlertText("נשלח בהצלחה");
      setAlertColor("success");
      successalertBox.current.classList.remove("d-none");
    } else {
      setAlertText("שגיאה בשליחה");
      setAlertColor("danger");
      successalertBox.current.classList.remove("d-none");
    }
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
          name="review"
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
      <div className=" " ref={successalertBox}>
        <AlertBox color={alertColor} text={alertText} />
      </div>
    </div>
  );
}

export default AddRecomandationForm;
