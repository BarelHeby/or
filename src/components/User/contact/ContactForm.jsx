import React from "react";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import { useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import emailjs from "@emailjs/browser";
import Alert from "react-bootstrap/Alert";
function ContactForm() {
  const se = useRef(null);
  const form = useRef();
  const message_to_user = useRef();
  useEffect(fill_select, [se]);
  function fill_select() {
    if (se.current.length < 2) {
      let disable_option = "בחר סוג עבודה";
      let opt = new Option(disable_option, disable_option);
      opt.disabled = true;
      se.current.add(opt);
      ["חדרי שינה", "מטבח", "חידוש סלון", "אחר"].map((val) => {
        let opt = new Option(val, val);
        se.current.add(opt);
        return <li></li>;
      });
      se.current.value = disable_option;
    }
  }

  function sendMail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_indfuec",
        "template_hhcsun4",
        form.current,
        "7BTXO2R6WlXYsSMDi"
      )
      .then(
        (result) => {
          message_to_user.current.innerHTML = "הבקשה נשלחה בהצלחה.";
          message_to_user.current.className = "fade alert alert-success show";
        },
        (error) => {
          message_to_user.current.innerHTML =
            "אירעה תקלה בעת שליחת ההודעה. נסה שוב במועד מאוחר יותר.";
          message_to_user.current.className = "fade alert alert-danger show";
        }
      );
  }

  return (
    <Form className="text-center " ref={form} onSubmit={sendMail}>
      <FormControl
        placeholder="שם מלא"
        className="mt-2"
        name="user_name"
        required
      />
      <FormControl
        placeholder="טלפון לחזרה"
        className="mt-2"
        name="user_phone"
        required
      />
      <Form.Select
        ref={se}
        className="mt-2"
        name="selec"
        required
      ></Form.Select>
      <FormControl
        as="textarea"
        rows={3}
        placeholder="יש לך בקשות מיוחדות? כתוב אותן כאן או השאר ריק"
        className="mt-2"
        name="message"
      />
      <Button type="submit" className="mt-2 w-100 bg-warning-costume border-0 ">
        <labe className="text-black opacity-75">שלח</labe>
      </Button>
      <div className="fs-4">
        <Alert variant="success" className="d-none" ref={message_to_user}>
          הבקשה נשלחה בהצלחה
        </Alert>
      </div>
    </Form>
  );
}

export default ContactForm;
