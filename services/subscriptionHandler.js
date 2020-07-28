const crypto = require("crypto");
const webpush = require("web-push");

const subscriptions = {}; // should be stored in DB

const vapidKeys = {
    privateKey: "L2DRgvoFI_iEIybr7i813r7E2IQXIX0bvca2RrbN93A",
    publicKey: "BOFfYKYT61h76IF5vlPXGnz7DyGFvMT4FkOwVelL_L6_n7Jp3jdIfip1AqCD8gSzwdHV8l-FEOQ6vK7pfPRFZgQ"
};

webpush.setVapidDetails("mailto:example@yourdomain.org", vapidKeys.publicKey, vapidKeys.privateKey);

function createHash(input) {
    const md5sum = crypto.createHash("md5");
    md5sum.update(Buffer.from(input));
    return md5sum.digest("hex");
}

function handlePushNotificationSubscription(req, res) {
    const subscriptionRequest = req.body;
    const susbscriptionId = createHash(JSON.stringify(subscriptionRequest));
    subscriptions[susbscriptionId] = subscriptionRequest;
    res.status(201).json({id: susbscriptionId});
}

function sendPushNotification(req, res) {
    const subscriptionId = req.params.id;
    const pushSubscription = subscriptions[subscriptionId];
    webpush
        .sendNotification(
            pushSubscription,
            JSON.stringify({
                title: "New Product Available ",
                text: "HEY! Take a look at this brand new t-shirt!",
                image: "/images/fit.png",
                tag: "new-product",
                url: "/result"
            })
        )
        .catch(err => {
            console.log(err);
        });

    res.status(202).json({});
}

module.exports = {handlePushNotificationSubscription, sendPushNotification};
