import "./style.scss";

import  {propTypes} from "@interface";
function index({children}:propTypes) {
    return <main>
        {children}
    </main>
}

export default index;