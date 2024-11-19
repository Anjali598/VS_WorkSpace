// import ListGroup from "./components/ListGroup";

import { useState } from "react";
import Alert from "./components/Alert";
import ButtonEx from "./components/ButtonEx";

// let items = ["New york", "Tokoyo", "Texas", "Mexico", "Denmark"];
function App() {
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <p>here is the App</p> */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <ButtonEx onClick={() => setAlertVisibility(true)}>My Button</ButtonEx>
    </div>
  );
}

export default App;
