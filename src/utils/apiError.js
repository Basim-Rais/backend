class apiError extends Error{
    constructor( 
        statuscode,
        msg = "Something went wrong",
        stack = "",
        error = []
    ) {
        super(msg)
        this.statuscode = statuscode,
        this.data = null,
        this.msg = msg,
        this.errors = errors,
        this.success = false;
    }
}


export { apiError }