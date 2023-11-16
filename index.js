const title = document.getElementById("title")
const createBtn = document.getElementById("addBtn")
const listElement = document.getElementById("list")
const goals = [
]
render()
function render(){
    listElement.innerHTML = " "
    for (let i = 0; i<goals.length;i++){
        listElement.insertAdjacentHTML("beforeend",getGoalTemplate(goals[i],i))
    }
}
createBtn.onclick = function (){
    if (title.value === ""){
        return
    }else{
        goals.push({
            title:title.value,
            completed:false,
        })
    }
    render()
    title.value = ""
}
function getGoalTemplate(goal,index){
    return`
    <li>
        <span class=${goal.completed ? "text-decoration-line-through" : ""}>${goal.title}</span>
        <span class="buttons">
            <span class="completeBtn-${goal.completed ? "true" : "false"}" data-index="${index}" data-type="toggle">&check;</span>
            <span class="deleteBtn" data-index="${index}" data-type="remove">&times;</span>
        </span>
            </li>
    `

}
listElement.onclick = function (e){
    if(e.target.dataset.index){
        const index = Number(e.target.dataset.index)
        const type = (e.target.dataset.type)
        if (type === "remove"){
            goals.splice(index,1)
        }else{
            goals[index].completed = !goals[index].completed
        }
        render()
    }
}
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
       createBtn.click()
    }
});