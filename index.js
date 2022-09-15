import Twit from "twit";

const config = {
    consumer_key: "gutJ7sejskbyRSJLhtue1oHrJ",
    consumer_secret: "AwgQQmLT7hUikfXJsVBXZnkXMkzaOOC2tYahHOhGr6vODwc3f0",
    access_token: "1570419871502028800-PC11EWnXIS4PPIMGsYywd7W9uTMj5T",
    access_token_secret: "rKTOrIu1Nskf4wqfs6VJYQNqaKClzedwBhpwHmmmCyGLE",
  }

let tweet = new Twit(config);

let test = 'Testando';

tweet.post('statuses/update',
    {
        status: test
    },
    function(err, data, response){
        console.log(data)
    });
