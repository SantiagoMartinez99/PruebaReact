// const element =document.createElement("h1")

// element.innerText="Hola React"

// const container=document.getElementById("root")

// container.appendChild(element)

import react from "react";
import reactDom from "react-dom";

// const element= <h1>Hello React </h1>
// const container= document.getElementById("root")

// reactDom.render(____QUE,__DONDE)

// reactDom.render(element,container)




const user={
  firstName: "Raul",
  lastName: "Palacios",
  avatar:"https://th.bing.com/th/id/R.bcca3fbdff9aa4b16eebbe5183a79494?rik=CkH5HhmTlQg57Q&pid=ImgRaw&r=0"
}

function getName(user){
  return `${user.firstName} ${user.lastName}`
}

function getGreeting(user){
  if(user){
    return <h1>Hola,{getName(user)}</h1>
  }
    return <h1>Hola,extraño</h1>
}


const name = "Josh Perez";
const element =( <div>
    <h1>{getGreeting(user)}</h1>
    <img src={user.avatar} alt="" />
  </div>
);




reactDom.render(
  element,
  document.getElementById("root")
);
