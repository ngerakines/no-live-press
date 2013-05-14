# Create a simple "Hello World" server
express = require \express
app = express()

app.get \/ !(req, res) ->
	res.send 'Hello World'

app.get \/test (req, res) ->
	body = 'Hello headers!'
	res.setHeader \Content-Type   \text/plain
	res.setHeader \Content-Length body.length
	res.end body

# Run the application
port = 3000

app.listen port
console.log "Listening on port #port"
console.log "Serving routes '/' and '/test'"