import { createRoot } from "react-dom/client";
import { FormCompo } from "./FormCompo";

const data = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  createRoot(document.getElementById("root")).render(
    <>
    {data.map((ele) => {
        return<FormCompo name={ele} key={ele}/>
    })}
    </>
)
