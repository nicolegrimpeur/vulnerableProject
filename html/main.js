function main() {
    createSocket();
    addEnv();
}

function createSocket() {
    const socket = io("http://localhost:3000");

    socket.on("connect", () => {
        console.log("Connected to server");
    });

    socket.on("receive-message", (message) => {
        console.log(`Received message: ${message}`);
    });

    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");

    sendButton.addEventListener("click", () => {
        socket.emit("send-message", messageInput.value);
    });
}

function addEnv() {
    const div = document.getElementById("infos");
    let p;
    for (let env of Object.keys(variables)) {
        p = document.createElement("p");
        p.innerHTML = `${env} : ${variables[env]}`;
        div.appendChild(p);
    }
}
