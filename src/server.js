import http from 'http';

const PORT = 3333;

const routes = {
    "/": "Home Page",
    "/create_session": "Create a Session",
    "/delete_session": "Delete a Session",
    
}

const server = http.createServer((req,res) => {
    res.writeHead(200, {"Content-Type": "text/plain"})
    res.end(routes[req.url])

})

server.listen(PORT, () =>{
    console.log("Server is going good")
})