let todo=[];
let req=prompt("Enter the command");
while(true){
    if(req=="quit"){
        console.log("Quiting the app....");
        break;
    }
    if(req=="list"){
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
    }
    else if(req=="add"){
        let task=prompt("Enter the task you want to add");
        todo.push(task);
        console.log("Task added");
     } else if(req=="delete"){
        let idx=prompt("Enter the idx of task");
        todo.splice(idx,1);
        console.log("task deleted")
     } else{
        console.log("Wrong request");
     }
     req=prompt("Enter the command");
}