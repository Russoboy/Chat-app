// const inputText = document.getElementById("inputText");
// const sendMessage = document.getElementById("sendMsg");
// const displayText = document.getElementById("displayText");


// sendMessage.addEventListener('click', ()=> {
//     const textInput = inputText.value.trim();
//     if (textInput !== '') {
//         sendTextMessage(textInput)
//         textInput.value = ""
//     } 
// })  


// const sendTextMessage = () => {
    function connectWebSocket() {
        socket = new WebSocket('ws://localhost:3000');
    
        socket.onopen = () => console.log("Connected to WebSocket");
    
        socket.onclose = () => {
            console.log("WebSocket disconnected. Reconnecting...");
            setTimeout(connectWebSocket, 3000); // Try reconnecting after 3 seconds
        };
    
        socket.onmessage = (event) => {
            displayText.innerHTML += `<p>${event.data}</p>`;
        };
    }
    
    connectWebSocket();
    

// }; 

function sendMessage() {
    if (socket.readyState === WebSocket.OPEN) {
        const input = document.getElementById("inputText");
        const message = input.value;
        socket.send(message);
        input.value = ""; // Clear input field
    } else {
        console.error("WebSocket is not open. ReadyState:", socket.readyState);
    }
}


