import React from "react"

export default function Style(){
    return(
        
            <link rel="stylesheet" href="styles.css"></link>
       
      
            const style = document.createElement('style');
            style.innerHTML = `
          *{
            margin: 0;
               padding: 0;
            }

            .altura{
                height: 80px;
            }

            .largura-uber{
                width: 80px;
            }

            .menu{
                color: aliceblue;
                text-decoration: none;
            }

            .fundo{
                background-color: aliceblue;
                color: black;
            }

        `;
        document.head.appendChild(style);
    )
}