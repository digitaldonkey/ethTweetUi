# ether-tweet-ui

This software generates an browser based User interface for EthTweet

To learn about EthTweet see: https://github.com/yep/eth-tweet

Use the following in a web browser in order to use the current Version of the client.

``
 <this path>/dist/app/dev/index.html
``


## Development 
This angular 2 based webapp using webpack and the web3 API.
You may use the following instructions to build or extend the ethTweet UI.

### Usage

You have access to the following npm scripts
* **npm run clean** (clean the `dist` folder)
* **npm run build** (build the code to the `dist` folder)
* **npm run browsersync** (open a live browser on port 5000, recompiling the code on each change)
* **npm run webpack:server** (same as browsersync but uses webpack-dev-server)
* **npm run lint** (run eslint and tslint)
* **npm run karma** (run unit test)
* **npm run karma:watch** (run unit test in watch mode)
* **npm run e2e** (run e2e test - make sure that browsersync or webpack:server is running in another console window) 
* **npm run e2e:live** (run e2e test and stop to allow debug - make sure that browsersync or webpack:server is running in another console window) 

### Distribution
Note that the code is distributed to the `dist` folder
You can pass a different TARGET or MODE using the following command:

```sh
[TARGET=newtarget MODE=dev] npm run build
```

Default TARGET is `app`, possible values will depends if you have scaffolded other targets   
Default MODE is `dev`, can be either `prod` or `dev`    

The same apply to the `webpack-server` task or `browsersync` task
`npm run webpack-server`:  compile and open a the webpack reload browser
You can pass a different TARGET or MODE using the following command:
```sh
[TARGET=newtarget MODE=dev] npm run webpack-server
```

### Launching
```sh
npm run webpack-server
# or
npm run browsersync
```
Visit your browser at `http://localhost:5000`
