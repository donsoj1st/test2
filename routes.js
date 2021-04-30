const fs = require('fs');
const handler = (req, res) => {
    //console.log(req.url, req.method, req.headers);
    const url = req.url;
    const method = req.method
    if (url === '/') {

        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body><form action = "/message" method = "POST" ><input type = "text" name = "message"><button type = "submit">push</button></form>></body>')
        res.write('</html>')
        return res.end();
    }
    if (url === "/message" && method == "POST") {
        const body = []
        req.on("data", (chunks) => {
            console.log(chunks);
            body.push(chunks)

        })
        return req.on("end", () => {
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            const message = parseBody.split("=")[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader("Location", '/'); 
                return res.end();
            })

        })



    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>it is iiiiiiii</body>')
    res.write('</html>')
    res.end();

}
module.exports = handler;