function sendMessage(){

let message=document.getElementById("userInput").value

let chatBox=document.getElementById("chatBox")

chatBox.innerHTML += "<p><b>You:</b> "+message+"</p>"

fetch("/chat",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
message:message
})

})
.then(res=>res.json())
.then(data=>{

chatBox.innerHTML += "<p><b>CampusAI:</b> "+data.reply+"</p>"

})

document.getElementById("userInput").value=""

}
document.getElementById("user-input")
.addEventListener("keypress",function(e){
if(e.key==="Enter"){
sendMessage()
}
})