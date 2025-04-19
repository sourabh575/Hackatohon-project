import ToolBar from "./Toolbar";
import Feature from "./Feature";
import Article from "./Article";
import React , {useState} from "react";

function openthat(){

}
function Front(){
  const [open, setOpen] = useState(false);
  function openthat() {
    setOpen(!open);
  }

  return (
    <div>
    <div>

      <button onClick={openthat}>Click Me</button>
      {open ? (
        <ToolBar />
      ) : (
        <>
        </>
      )}
    </div>
     <Feature/>
    </div>
  );
}
export default Front;