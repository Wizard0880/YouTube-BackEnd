class ApiResponse {
    constructor(statusCode, data,message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}



// server ke kuch status code hote hai 
// they have specific range for specific error