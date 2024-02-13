const express = require('express')
const path = require('path')
const port = 8012
const reactapi = require("./api/reactapi");

const app = express();

app.use(express.static(path.join(__dirname, './osulloc/build')))

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, './osulloc/build/index.html'))
})

app.use("/api", reactapi);

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, './www/nopage.html'))
}
)

app.listen(port, () => {
    console.log(`localhost:${port} 서버정상구동`)
})