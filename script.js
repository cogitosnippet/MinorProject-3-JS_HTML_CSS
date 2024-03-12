document.body.style.background = "black";

// document.querySelector('.display').innerHTML = "Hello I am Div";

// async function display(msg){
//   await time_delay();
//   let div = document.createElement("div");
//   div.innerHTML = msg;
//   document.body.append(div);
// }



// function time_delay(){
//   // let random = 1 + Math.random()*6;
//   return new Promise((resolve,reject)=>{
//     let random = 1 + Math.random()*6;
//     setTimeout(() => {
//       resolve();
//     }, random*1000);
//   })
// }



// let text = ['Initializing Hacking ...','Reading your files ...','Password Files Detected ...','Sending all passwords and personal files to server ...','Cleaning up ...']

// for(let i=0;i<text.length;i++){
//   display(text[i]);
// }



// async function display_msg(){
//   display("Initializing Hacking...");
//   display("Reading Your files...");
// }
// display_msg();

function display (msg){
  let time = 1 + 6 * Math.random()
  return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      let div = document.createElement("div");
      div.innerHTML = ">> " + msg;
      document.body.append(div);
      resolve();
    },time * 1000);
  })
}

// function blinking(){
//   setInterval(()=>{
//     let last = document.body.getElementsByTagName('div');
//     if(last.innerHTML.endswith("...")){
//       last.innerHTML = last.innerHTML;
//     }
//     else{
//       last.innerHTML = last.innerHTML + '.';
//     }
//   },2000)
// }


let text = ['Initialized Hacking now reading data...','Reading your files...','Password Files Detected...','Sending all passwords and personal files to server...','Cleaning up...','Hacking Done...','Thanks for all your passwords...']



async function displaying_message (){


  for (let i = 0; i<text.length;i++){
    await display(text[i]);
  }
}

document.getElementById('but').addEventListener("click",displaying_message);
