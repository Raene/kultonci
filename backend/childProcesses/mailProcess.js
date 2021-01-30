//Create an event handler:
const { fork } = require('child_process');

exports.mailProcess = function (obj,command) {
    var args = [JSON.stringify(obj)];
    const child = fork(__dirname +'/mailjob', args);
    child.send(command);
    child.on('message', (message) => {
        if (message.error) {
            console.error(message.error);
        } else {
            console.log('mail sent', message);
        }
    });

    child.on("exit", (code) => {
        console.log(`child_process exited with code ${code}`);
    });
    return
}
