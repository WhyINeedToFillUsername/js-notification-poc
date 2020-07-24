# js-notification-poc
Simple static page to test javascript notification api. Runs on [node.js](https://nodejs.org/) ([express](https://expressjs.com/)) server.

## Requirements
You need to install [node.js](https://nodejs.org/) (with included [npm](https://www.npmjs.com/get-npm)).
<!--Also, you will need [Python](https://www.python.org/downloads/) of version **2.7.xx**.
because of https://github.com/digitalbazaar/rdf-canonize/issues/5-->

## Install
Run the following command in the **module's root folder**:
```bat
npm install
```
It installs all project dependencies, for details see https://docs.npmjs.com/cli/install.

## Run
The node.js server is set to listen on local port 3001. You can change that in the bin/www files.
Start it by this command:
```bat
npm start
```
Then go to http://localhost:3001/. Click on the "Enable notifications" button to request permission, and "Create notification" to show system notification.

Please note that request for notifications won't work in browser "private" mode.

## Documentation
Code is self-explanatory with necessary comments. See [/public/javascripts/notifs.js](notifs.js) to how it works.