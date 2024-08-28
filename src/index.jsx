import ReactDOM from "react-dom/client";
import { useFlatfile, FlatfileProvider, Sheet } from "@flatfile/react";
import { blueprint } from "./blueprint";

const PUBLISHABLE_KEY = 'pk_f0a1f46b01814c0183c8a1f1405fcb91';

const FlatfilePortal = () => {
  const { openPortal } = useFlatfile();
  return (
    <>
      <button onClick={openPortal}>Open Portal!</button>
      <Sheet
        config={blueprint}
        onSubmit={async ({ sheet }) => {
          const data = await sheet.allData();
          console.log("onSubmit", data);
        }}
      />
    </>
  ); 
};

const App = () => (
  <FlatfileProvider publishableKey={PUBLISHABLE_KEY}>
    <FlatfilePortal />
  </FlatfileProvider>
); 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

