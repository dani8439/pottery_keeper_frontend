export const addCollection = (data) => {
  console.log("b");
  return (dispatch) => {
    console.log("c");
    fetch("http://localhost:3000/api/v1/collections", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      method: "POST",
      body: JSON.stringify(data)
    })
      // pessimistically rendering. Could put a loading here in component. Waiting until the backend resolves adding the piece before displaying info on the frontend.
      .then((resp) => resp.json())
      .then((data) => {
        console.log("d");
        return dispatch({
          type: "ADD_COLLECTION",
          payload: data
        });
      });
    console.log("e");
  };
};
