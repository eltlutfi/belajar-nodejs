const fs = require("fs");
const os = require("os");

function device(data) {
    fs.writeFileSync("./device.json", JSON.stringify(data));
}

device({
    Name: os.hostname(),
    Type: os.type(),
    Platform: os.platform(),
    Totalmem: os.totalmem(),
    Freemem: os.freemem(),
    Architecture: os.arch(),
    Release: os.release(),
});