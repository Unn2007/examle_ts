import './style.css'
enum HttpCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
}

function respond(status: HttpCodes) {
 console.log(status)
}

respond(HttpCodes.OK);

export {};
