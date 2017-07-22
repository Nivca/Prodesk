### To run Firebase function locally 
1. Get all the env values set on server
    `firebase functions:config:get > .runtimeconfig.json`
    > Env values are set via `firebase functions:config:set sendgrid.token=<vale>`
2. Run server
    `firebase serve --only functions`