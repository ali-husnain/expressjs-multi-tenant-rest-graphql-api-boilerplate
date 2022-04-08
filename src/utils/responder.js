
let Responder = {

  sendResponse: (response, statusCode, status, data, message) => {
    let returnData = {
      data: data
    };
    if(statusCode != 200) {
      returnData.errors = [{
        status: statusCode,
        message: message
      }];
    }
    response.status(statusCode).json(returnData);
  }
};

module.exports = Responder;
