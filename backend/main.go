package main

import (
	"fmt"
	"net/http"
	
	"github.com/TutorialEdge/realtime-chat-go-react/pkg/websocket"
)


// We define our websocket endpoint here
func serveWs(pool *websocket.Pool, w http.ResponseWriter, r *http.Request) {
	fmt.Println("Websocket Endpoint Hit")
	// Upgrade this connection to a Websocket connection
	conn, err := websocket.Upgrade(w, r)
	if err != nil {
		fmt.Fprint(w, "%+V\n", err)
	}
	
	client := &websocket.Client{
		Conn: conn,
		Pool: pool,
	}

	pool.Register <- client
	client.Read()
}


func setupRoutes() {
	pool := websocket.NewPool()
	go pool.Start()

	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
        serveWs(pool, w, r)
    })
}

func main() {
  fmt.Println("Distributed GoChat v0.01")
  setupRoutes()
  http.ListenAndServe(":8080", nil)
}


