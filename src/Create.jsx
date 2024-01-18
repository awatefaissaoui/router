import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function Name() {
  const [preview, setPreview] = useState("");
  useEffect(() => {
    console.log("new is on screen ");
  }, []);
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const newMovie = {
        title: e.target.title.value,
        description: e.target.description.value,
        posterUrl: e.target.url.value,
        rating: e.target.rating.value,
      };
      await fetch("http://localhost:3000/movies", {
        method: "POST",
        body: JSON.stringify(newMovie),
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <center>
        <h1>Create New Movie</h1>
      </center>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Form onSubmit={handleSubmit} style={{ width: "25vw" }}>
          <Form.Group className="mb-3">
            <Form.Label>title</Form.Label>
            <Form.Control id="title" type="text" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control id="description" as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>posterUrl</Form.Label>
            <Form.Control
              onChange={(e) => {
                setPreview(e.target.value);
              }}
              type="text"
              id="url"
              rows={3}
            />
            <img width="200vw" src={preview || ""} alt="test"></img>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>rating</Form.Label>
            <Form.Control id="rating" type="number" />
          </Form.Group>
          <Button type="submit">Create</Button>
        </Form>
      </div>
    </>
  );
}

export default Name;
