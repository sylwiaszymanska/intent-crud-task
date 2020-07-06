import styled from "styled-components"

 const Backdrop = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: black;
    opacity: 0.5;
    overflow-y: hidden;
`

export default Backdrop;