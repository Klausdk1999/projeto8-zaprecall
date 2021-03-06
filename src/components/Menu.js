import React from "react";
import { useEffect } from "react";


export default function Menu({erro,arr}) {
  const [correct, setCorrect] = React.useState("hide");
  const [wrong, setWrong] = React.useState("hide");

  useEffect(() => {
    if(arr.length === 8 && erro===false){
      setCorrect("show");
      setWrong("hide");
    } if(arr.length === 8 && erro===true){
      setCorrect("hide");
      setWrong("show");
    }
  });
  
	return (
    <>
      <div className="footer">
        <div className="column">
          <div className={correct}>
            <div className="header">
              <img className="emoji" src="./media/party.png" alt="party emoji" />
              <h3 className="bold">Parabéns!</h3>
            </div>
            <h3>Você não esqueceu de nenhum flashcard!</h3>
            <div className="red button" onClick={() => window.location.reload(false)}>Reiniciar ZapRecall</div>
          </div>

          <div className={wrong}>
            <div className="header">
              <img className="emoji" src="./media/sad.png" alt="sad emoji" />
              <h3 className="bold">Putzz...</h3>
            </div>
            <h3>Ainda faltam alguns...Mas não desanime!</h3>
            <div className="red button" onClick={() => window.location.reload(false)}>Reiniciar ZapRecall</div>
          </div>
                    
          <div classeName="header">
            <h3><inline className="white">-----</inline>{arr.length}/8 concluidos</h3> 
            {arr.map((name,index)=> 
            (<ion-icon key={index} name={name}></ion-icon>
            ))} 
          </div>      
        </div>  
      </div>
    </>
  );
}