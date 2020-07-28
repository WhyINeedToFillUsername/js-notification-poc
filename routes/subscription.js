var express = require('express');
var router = express.Router();
const subscriptionHandler = require('../services/subscriptionHandler');

// "/subscription" context
router.post("/", subscriptionHandler.handlePushNotificationSubscription);
router.post("/:id", subscriptionHandler.sendPushNotification);

module.exports = router;
