
import styled from "styled-components";

const ImageDiv = styled.div`
width: 200px;
height: 200px;

`
function Logo() {
    return <ImageDiv className="">
        <img src="public/logo.webp" alt="logo" className="w-[100px] h-[100px] py-2 px-2"/>
    </ImageDiv>
}

export default Logo;



