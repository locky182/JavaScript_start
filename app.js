//задача

//const task = ['задача 1'];
//добавление задачи в конец списка
//метод push()
// function addTaskToEnd(myArrayTask, task){
//     result = myArrayTask.push(task);//push меняет исходный массив
//     console.log(myArrayTask);

// }

// const tasks = ['task 1'];
// addTaskToEnd(tasks, 'task 2');
// console.log(tasks);
//+++++++++++++++++++++++++++++++++++++++++++++
//удаление задачи по названию 

const tasks2 = ['user', 'admin', 'superUser'];
function delTaskForName(myArrayTask, task){
    const index = myArrayTask.indexOf(task);//может удалять по индексу
    if(index === -1){
        return;//благодаря return мы выйдем полностью из функции 
    }//и не будем выполнятькод ниже
    myArrayTask.splice(index,1);
    console.log(myArrayTask);
}


delTaskForName(tasks2, 'user');
console.log(tasks2);//массив изменен
//++++++++++++++++++++++++++++++++++++++++++++++
//Перенос задачи в начало списка по названию
// function carryTaskToTheStart(myArrayTask, task){
//     const res = myArrayTask.unshift(task);
//     myArrayTask.splice(-1);
//     console.log(myArrayTask);
// }
   


// const tasks2 = ['user', 'admin', 'superUser'];
// carryTaskToTheStart(tasks2, 'superUser' );
// console.log(tasks2);//массив изменен
