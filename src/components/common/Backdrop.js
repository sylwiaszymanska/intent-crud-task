import styled from "styled-components"

 const Backdrop = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: black;
    opacity: 0.5;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default Backdrop;