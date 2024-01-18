import { useEffect } from "react";

function Filter({ setFiltred, movies }) {
  const handleTitle = (e) => {
    const regex = new RegExp("\\b" + e.target.value + "\\w*\\b", "gi");

    const filtred = movies.filter((e) => {
      return regex.test(e.title);
    });
    if (filtred.length > 0) setFiltred(filtred);
  };

  const handleRating = (e) => {
    const query = e.target.value.toString().split(".")[0];
    console.log(query);

    const regex = new RegExp(
      "\\b(" + query + "|\\b" + Math.round(query) + ")\\b"
    );

    const filtred = movies.filter((e) => {
      return regex.test(e.rating.toString().split(".")[0]);
    });
    if (filtred.length > 0) setFiltred(filtred);
  };

  return (
    <div style={{ backgroundColor: "#F6D776", margin: 15, height: 80 }}>
      <input
        style={{
          backgroundColor: "#F6D776",
          width: 180,
          height: 80, marginLeft:450,
          textAlign: "center",textTransform: "uppercase", fontWeight:800
        }}
        onChange={handleTitle}
        type="text"
        placeholder="filter by title"
      />
      <input
        style={{
          backgroundColor: "#F6D776",
          width: 180,
          height: 80,marginRight:450,
          textAlign: "center", textTransform: "uppercase", fontWeight:800
        }}
        onChange={handleRating}
        type="text"
        placeholder="filter by rating"
      />
    </div>
  );
}

export default Filter;
