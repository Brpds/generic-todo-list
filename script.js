let id = 0
let textValue = ''
addTaskCard = () => {
    let taskCard = document.createElement('div')
    taskCard.style.width = '135px'
    taskCard.style.height = '135px'
    taskCard.style.marginLeft = '10px'
    taskCard.style.marginTop = '10px'
    taskCard.style.borderRadius = '5%'
    taskCard.style.background = 'rgb(250, 165, 165)'
    taskCard.style.display = 'inline-block'
    taskCard.style.padding = '15px'
    taskCard.style.fontWeight = 'bold'
    taskCard.style.fontSize = '.8em'
    //I wanted to track each card's id, might us
    taskCard.id = `taskCard_${id}`
    taskCard.innerHTML = document.getElementById('taskName').value
    let textValue = document.getElementById('taskName').value
    textValue = document.getElementById('taskName').value
    
    //checks if there's any value to add the task
    if(document.getElementById('taskName').value != ''){
        document.getElementById('tasksTodo').appendChild(taskCard)
        document.getElementById('taskName').value = ''
        //it's named removeButton because at first it was an actual button to remove the task card
        let removeButton = document.createElement('div')
        removeButton.style.width = '24px'
        removeButton.style.height = '24px'
        removeButton.innerHTML = '<span class="material-symbols-outlined" style="width:fit-content; cursor:pointer;">done</span>'
        removeButton.style.marginLeft = '4px'
        //adds a simple priority styling to the complete button
        switch(document.getElementById('priority-select').value){
            case '3': removeButton.style.background = 'green'
            break
            case '2': removeButton.style.background = 'yellow'
            break
            case '1': removeButton.style.background = 'red'
            break
            default: removeButton.style.background = 'green'
        }
        removeButton.style.borderRadius = '25%'
        removeButton.style.position = 'relative'
        removeButton.style.left = '80%'
        removeButton.style.top = '70%'
        removeButton.onclick = function(){
            taskCard.remove()
            markComplete(textValue)
        }
        document.getElementById('priority-select').value = ''
        document.getElementById(taskCard.id).appendChild(removeButton)
        //here's the Id from each card
        console.log(taskCard.id)
        id++
    }else{
        alert('Add a valid task')
    }
    
}


markComplete = (textValue) => {
    let taskCardComplete = document.createElement('div')
    taskCardComplete.style.width = '135px'
    taskCardComplete.style.height = '135px'
    taskCardComplete.style.marginLeft = '10px'
    taskCardComplete.style.marginTop = '10px'
    taskCardComplete.style.fontSize = '.8em'
    taskCardComplete.style.fontWeight = 'bold'
    taskCardComplete.style.borderRadius = '5%'
    taskCardComplete.style.padding = '15px'
    taskCardComplete.style.background = 'rgb(80, 255, 80)'
    taskCardComplete.style.display = 'inline-block'
    taskCardComplete.innerHTML = textValue
    document.getElementById('tasksDone').append(taskCardComplete)
}