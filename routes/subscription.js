var express = require('express');
var router = express.Router();
const subscriptionHandler = require('../services/subscriptionHandler');

router.post("/subscription", subscriptionHandler.handlePushNotificationSubscription);
router.post("/subscription/:id", subscriptionHandler.sendPushNotification);

module.exports = router;
