import "./style.scss";

interface Style{
    titil: string;
}
const index = ({ titil }:Style) => {
    return (
        <button className="button1">
            {titil}
        </button>
    );
};

export default index;