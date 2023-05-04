import React, { createElement } from "react";
import { Button, Col } from "react-bootstrap";

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
function AddProject() {
  function addPhoto(event) {
    var selectedFile = event.target.files[0];
    var reader = new FileReader();

    var img = new Image();
    var col = document.createElement("div");
    col.className = "";
    col.appendChild(img);
    img.height = 150;
    img.width = 150;
    // var imgtag = document.getElementById("myimage");
    img.title = selectedFile.name;

    reader.onload = function (event) {
      img.src = event.target.result;
    };

    reader.readAsDataURL(selectedFile);
    const row = document.getElementById("imageRow");
    row.appendChild(img);
  }

  return (
    <Container className="w-75 border p-2">
      <h1>הוסף פרויקט</h1>
      <Form>
        <FormControl placeholder="כותרת" />
        <FormControl type="textarea" placeholder="תיאור" rows={3} />
        <input
          className="form-control"
          type="file"
          onChange={addPhoto}
          accept="image/png, image/jpeg"
        />
        <Button variant="success" className="mt-3">
          הוסף פרויקט
        </Button>
      </Form>
      <div id="imageRow" className="d-flex justify-content-center"></div>
    </Container>
  );
}

export default AddProject;
