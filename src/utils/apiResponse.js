class apiResponse {
    constructor(statuscode, data, msg = "Success"){
        this.data=data,
        this.statuscode = statuscode,
        this.msg = msg,
        this.success = statuscode  < 400
    }
}