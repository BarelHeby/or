import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
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
    img.title = selectedFile.name;

    reader.onload = function (event) {
      img.src = event.target.result;
    };
    reader.readAsDataURL(selectedFile);
    const row = document.getElementById("imageRow");
    row.append(col);
  }

  return (
    <Container className="w-75 border p-2">
      <h1>הוסף פרויקט</h1>
      <Form>
        <FormControl placeholder="כותרת" className="mb-1" />
        <FormControl
          type="textarea"
          placeholder="תיאור"
          rows={3}
          className="mb-1"
        />
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
