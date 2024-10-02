import React from "react"


export default function Header(){

return(
    <header  class="container-fluid bg-black altura ">
        <link rel="stylesheet" href="style.css"/>
    <img src="page/uberlogo.png" class="largura-uber" alt="Logo do uber"/>

    <div class="col d-none d-sm-flex">
                <a href="#" class="m-3 menu">company</a>
                <a href="#" class="m-3 menu">Safety</a>
                <a href="#" class="m-3 menu">Help</a>
              </div>

              <div>
                <a href="#" class="m-4 menu">Login</a>
                <a href="#" class="m-3 menu fundo rounded-5">Sign Up</a>
              </div>
    <div/>
    
   
</header>
);
}