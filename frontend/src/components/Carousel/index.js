import React from "react";
import { Carousel } from "react-responsive-carousel";
import { StyledContainer } from "./styles";

export default function Carrousel({ imgArray }) {
    return (
        <StyledContainer>
            <Carousel autoPlay styles={{ textAlign: "center" }}>
                {imgArray &&
                    imgArray.map((img) => (
                        <div key={img.url}>
                            <img alt='' src={`http://${img.url}`} />
                        </div>
                    ))}
                {/* <p className="legend">Legend 1</p> */}
            </Carousel>
        </StyledContainer>
    );
}
