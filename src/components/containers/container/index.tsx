import "./style.scss";

import  {propTypes} from "@interface";
const index = ({children}:propTypes) => {
  return <div className="container">
    {children}
    </div>;
};

export default index;
