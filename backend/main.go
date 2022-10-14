package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

// We'll need to define an Upgrader
// this will require a Read and Write buffer size
var upgrader = websocket.Upgrader{
	ReadBufferSize: 1024,
	WriteBufferSize: 1024,

	// This is to check origin of our connection
	// which will allow us to make requests from our React
	// development server to here
	CheckOrigin: func(r *http.Request) bool {return true},
}

func reader(conn *websocket.Conn) {
	for {
		// Read the message
		messageType, p, err := conn.ReadMessage()
		if err != nil {
			log.Println(err)
			return
		}
		// Print the message for clarity
		fmt.Println(string(p))

		if err := conn.WriteMessage(messageType, p); err != nil {
			log.Println(err)
			return
		}
	}
}

// We define our websocket endpoint here
func serveWs(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r.Host)

	// Upgrade this connection to a Websocket connection
	ws, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println(err)
	}

	reader(ws)
}


func setupRoutes() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "This is a Simple Server")
	})

	http.HandleFunc("/ws", serveWs)
}

func main() {
  fmt.Println("GoChat v0.01")
  setupRoutes()
  http.ListenAndServe(":8080", nil)
}

