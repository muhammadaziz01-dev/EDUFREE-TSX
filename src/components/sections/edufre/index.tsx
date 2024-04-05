import "./style.scss";

import { Container , Grid } from "@containers";
import { Card } from "@ui";

import { cardData } from "../../veraeblis";

import { cardDataType } from "@interface";
function index() {
    return <section id="edufrre" className="pt-[122px] pb-[148px]">
        <Container>
            <h1 className="text-[#282938] text-[38px] font-semibold w-[640px] text-center mx-auto mb-[62px]">Keuntungan Bergabung Dengan  E-Learning EDUFREE</h1>
            <Grid>
                {
                    cardData.map((item:cardDataType ) : any => {
                        return <Card key={item.id}  data={item} />
                    })
                }
            </Grid>

        </Container>
    </section>
}

export default index;