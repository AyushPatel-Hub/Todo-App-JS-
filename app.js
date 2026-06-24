// let todo=[];
// let req=prompt("Enter the command");
// while(true){
//     if(req=="quit"){
//         console.log("Quiting the app....");
//         break;
//     }
//     if(req=="list"){
//         for(let i=0;i<todo.length;i++){
//             console.log(i,todo[i]);
//         }
//     }
//     else if(req=="add"){
//         let task=prompt("Enter the task you want to add");
//         todo.push(task);
//         console.log("Task added");
//      } else if(req=="delete"){
//         let idx=prompt("Enter the idx of task");
//         todo.splice(idx,1);
//         console.log("task deleted")
//      } else{
//         console.log("Wrong request");
//      }
//      req=prompt("Enter the command");
// }


let btn=document.querySelector("button");


btn.addEventListener("click", function(){
    let inp=document.querySelector("input");
    let button=document.createElement("button");
    button.innerText="Delete";
    let item=document.createElement("li");
    item.innerText=inp.value;
    let ul=document.querySelector("ul");
    item.append(button);
    ul.append(item);
    inp.value="";
    button.addEventListener("click", function(){
        let ul=document.querySelector("ul");
        let item= document.querySelectorAll("li");
        let par= button.parentElement;
        par.remove();
    })
    
});

let delbtn=document.querySelectorAll(".del");
    for(delbtn of delbtn){
        let par=delbtn.parentElement;
        delbtn.addEventListener("click", function(){
            
            par.remove();
        });
    };