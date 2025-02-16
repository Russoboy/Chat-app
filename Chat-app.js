const inputText = document.getElementById("inputText");
const sendMessage = document.getElementById("sendMsg");
const displayText = document.getElementById("displayText");


sendMessage.addEventListener('click', ()=> {
    const textInput = inputText.value.trim();
    if (textInput !== '') {
        sendTextMessage(textInput)
        textInput.value = ""
    } 
})  


const sendTextMessage = () => {
 const socket = new WebSocket('ws://example.com/socketserver');



}
