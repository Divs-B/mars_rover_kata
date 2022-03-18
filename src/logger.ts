export class Logger {
    _message: string = ""


    set message(message: string) {
        this._message = message
    }

    get message(): string {
        return this._message
    }

    log(message: string) {
        console.log("The marsRover project logs: " + message)
    }
}
