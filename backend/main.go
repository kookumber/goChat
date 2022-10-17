package main

// import (
// 	"fmt"
// 	"log"
// 	"net/http"
	

// )


// We define our websocket endpoint here
// func serveWs(w http.ResponseWriter, r *http.Request) {
// 	fmt.Println(r.Host)

// 	// Upgrade this connection to a Websocket connection
// 	ws, err := upgrader.Upgrade(w, r, nil)
// 	if err != nil {
// 		log.Println(err)
// 	}

// 	Reader(ws)
// }


// func setupRoutes() {
// 	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
// 		fmt.Fprint(w, "This is a Simple Server")
// 	})

// 	http.HandleFunc("/ws", serveWs)
// }

// func main() {
//   fmt.Println("GoChat v0.01")
//   setupRoutes()
//   http.ListenAndServe(":8080", nil)
// }


