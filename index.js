import axios from 'axios';
import TwitterApi from 'twitter-api-v2';

var config = {
    method: 'post',
    url: 'https://api.twitter.com/oauth/request_token?oauth_consumer_key=DrDEYezzm2FP9oZTMw5bJt4v7&oauth_token=1570419871502028800-97jl3Y1HcGk9oFySbrLAVZ9Xz7JP0S&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1663296590&oauth_nonce=6Tt2EVATNo7&oauth_version=1.0&oauth_signature=P%2FzamP785K5r%2BbI0nPy5duvF%2B4Y%3D',
    headers: { 
      'Cookie': '_twitter_sess=BAh7CSIKZmxhc2hJQzonQWN0aW9uQ29udHJvbGxlcjo6Rmxhc2g6OkZsYXNo%250ASGFzaHsABjoKQHVzZWR7ADoPY3JlYXRlZF9hdGwrCE5CLUSDAToMY3NyZl9p%250AZCIlMGQ3MDViNjhlNTMzYmJmMWIwNTRlMjE2MGNmN2NjZjk6B2lkIiViZGE5%250AZDZhOTlmNjhlZGRjZjQ5NmIzYTEyYjRiMWU1NA%253D%253D--8b04e9b012c7b35391632aeb543993e4b84c23e8; guest_id=v1%3A166329612913325105; lang=en'
    }
  };
  
  axios(config)
  .then(function (response) {
    let format = response.data.split('&' || '=')
    for (let index = 0; index < format.length; index++) {
        format[index] = format[index].split('=')
        
    }
    console.log(format)
  })
  .catch(function (error) {
    console.log(error);
  });
  

let tweet = {
    appKey: "DrDEYezzm2FP9oZTMw5bJt4v7",
    appSecret: "GET0Yjkgqk1QZnrAcyH9QrassExlvoLAYxwsMODQexuX3zoK6F",
    acessToken: "1570419871502028800-97jl3Y1HcGk9oFySbrLAVZ9Xz7JP0S",
    accessSecret: "lFNGd1oXGlaPIeR57wHsctkZh6ukEQ9HZfJS01vMyZii3"
  };

