import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;1,500;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

* {
    /* font-family: -apple-system, system-ui, BlinkMacSystemFont; */
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
   
}
    
}

*:focus {
    outline: 0;
}

html, body, #root {
    height: 100%;
}

body {
    -webkit-font-smoothing: antialiased;

}
body, input, button {
    font: 14px;
    font: 14px 'Roboto', sans-serif;
    line-height: 1.43;
}

a {
    text-decoration: none;
}

ul {
    list-style: none;
}

button {
    border: 0;
    cursor: pointer;
}





`;
