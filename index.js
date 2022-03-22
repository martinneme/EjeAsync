
const amasar = async (seg) => {
    console.log("amasando...");
  return new Promise(resolve=>setTimeout(()=>{
    resolve('Masa lista')
  },seg * 1000))
}



const cocinar = async (seg) => {
    console.log("cocinando...");
  return new Promise(resolve=>setTimeout(()=>{
    resolve('Pizza cocinada')
  },seg * 1000))
}

const servir = async () => {
    console.log("Sacando pizza del horno y sirviendo...");
  return new Promise(resolve=>setTimeout(()=>{
    resolve('Pizza lista')
  },1000))
}



const comerPizza = async () => {
    console.log("*** HOY SE COME PIZZA ***");
    console.log("Se coloca harina en la mesada");
    console.log(await amasar(5));
    console.log(await cocinar(7));
    console.log(await servir());
    console.log("*** A CENAR, LA PIZZA ESTA EN LA MESA ***");
}

comerPizza();




