const encryptHelper = require('../src/utils/encrypthelper');
const responder = require('../src/utils/responder');

const authenticate = async (req, res, next) => {
    const accessParams = getAccessParams(req);
    if(typeof accessParams !== 'object') {
      responder.sendResponse(res, 401, "error", null, "Your request was made with invalid credentials.");
      return;
    }

    if (isCookeExpired(accessParams.ttl)) {
        responder.sendResponse(res, 401, "error", null, "Session expired.");
        return;
    }

    try {
      //if can verify the token, set req.user and pass to next middleware
      let identity = null;
      if(req.user) {
        identity = req.user;
      } else {
        const User = masterDb.User;
        identity = await  User.findOne({ where: { uid: accessParams.uid, is_delete: 0, sub_id: accessParams.sub_id, store_id: accessParams.store_id } });
      }
      if (identity !== null) {
        //subdomain
        const Subdomain = masterDb.Subdomain;
        identity.subdomain = await  Subdomain.findOne({ where: { sub_id: accessParams.sub_id } });

        //store
        const Stores = masterDb.Stores;
        identity.storeInfo = await  Stores.findOne({ where: { id: accessParams.store_id, sub_id: accessParams.sub_id } });

        //setting timezone
        setTimezone(identity.storeInfo);

        //set in request
        req.user = identity;
        req.server = accessParams.server

        next();
      }
      
    } catch (ex) {
      //if invalid token
      responder.sendResponse(res, 400, "error", null, "Opps! Something went wrong.");
    }
 }

const getAccessParams = (request) => {
     //$request->enableCookieValidation = false;
   
    const tokenValue = request.header('authorization').replace("Bearer ","");
    const jwtToken = encryptHelper.decrypt(tokenValue);
    const accessParams = JSON.parse(jwtToken);
    return accessParams;
}

const isCookeExpired = (expiryInSeconds) => {
    const currentTimeInSeconds = new Date().getTime()/1000;
    if (expiryInSeconds < currentTimeInSeconds) {
        return true;
    }
    return false;
}

const setTimezone = (store) => {
 if(store){
   process.env.TZ = store.time_zone;
 }
}


module.exports = {authenticate}