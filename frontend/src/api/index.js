let socket = new WebSocket("ws://localhost:8080/ws")

export const connect = (callback) => {
    console.log("Attempting Connection...")

    socket.onopen = () => {
        console.log("Successfully Connected")
    }

    socket.onmessage = (msg) => {
        console.log(msg)
        callback(msg)
    }

    socket.onclose = event => {
        console.log("Socket Closed Connection: ", event);
    };

    socket.onerror = error => {
        console.log("Socket Error: ", error);
    };
}

export const sendMsg = (msg) => {
    console.log("Sending Message: ", msg)
    socket.send(msg)
}
