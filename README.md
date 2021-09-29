# Supply Chain Tracking use case dashboard (Extending the new Splunk dashboard framework for real world applications)


## Prerequisite 
* Install last version of [nodejs](https://nodejs.org/en/) .
* Install last version of [Yarn](https://classic.yarnpkg.com/lang/en/docs/install) 
* Install Splunk Enterprise locally and have $SPLUNK_HOME env variable setup.
* In Windows environment, to avoid any file permission issues start the command prompt with "Run as Administrator" to run the commands mentioned in the [Development](#development) section.

## Splunk Prerequisite
* Create a new index : assets
* index the data/assets.json file (sourcetype: _json)

## GMap usage
* Before you start using the Google Maps, you need to generate an authentication key. Follow those [steps](https://developers.google.com/maps/documentation/javascript/get-api-key) to generate it.
* Once done, open `packages/custom-g-map/src/CustomGMap.jsx` and replace `<YOUR_GMAP_KEY>` at line #134 by the generated KEY.

# Package the app and add it to your Splunk

Use the following steps to package the Dashboard app. 

Steps:
* Run `yarn run setup` , it's an initialization task that will install dependencies and run a first build.
* Run `yarn install` to install all dependencies.
* Run `yarn run build` to build custom components.
* Navigate to the supplier-chain-tracking app `cd packages/supplier-chain-tracking`
* Run `yarn run link:app` to symlink the generated Application into Splunk's application directory.
* The next step is to compile the application, in watch mode: `yarn run start`

Make sure to restart Splunk after those steps.
Once the restart has finished, assuming your Splunk instance is listening on the default port, the app will be available at http://localhost:8000/en-US/app/supplier-chain-tracking/start


