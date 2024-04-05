import { propTypes } from "@interface";
import "./style.scss";

const index = ({children}:propTypes) => {
  return <div className="grid grid-cols-3 gap-[42px]">
    {children}
    </div>;
 
};

export default index;
