import "./style.scss"

import  {propTypes} from "@interface";

const index = ({children}:propTypes) => {
    return (
        <section>
            {children}
        </section>
    );
};

export default index;