import axios from "axios";
let config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};
export default {
  getUrl() {
    axios
      .get(
        "http://forpost.gorcom.ru/account/camera/83/url.html?time=&timeZoneOffset=10800&format=hls&_=1598555265882&jsonp=parseResponse",
        config
      )
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
};
