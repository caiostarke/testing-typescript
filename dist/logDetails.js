"use strict";
function logDetails(uid, item) {
    console.log(`A product with ${uid} has a title as ${item}`);
}
function logInfo(uid, user) {
    console.info(`An user with ${uid} has a name as ${user}`);
}
logDetails(123, "sapato");
logDetails("123", "sapato");
logInfo(123, "maria");
logInfo('123', "maria");
