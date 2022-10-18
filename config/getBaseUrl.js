module.exports.getBaseUrl = getBaseUrl();

function getBaseUrl() {
  // TODO: Verify production config
  if (process.env.NODE_ENV === 'development') {
    // return "http://patria.alchemylms.com/";
    //return "http://localhost:18190";
    //return "http://snsdev7:18190";
    //return "http://ec2-35-165-249-11.us-west-2.compute.amazonaws.com";
    //return "http://ec2-35-165-20-111.us-west-2.compute.amazonaws.com";
    return "http://localhost:18190/";
  } else if (process.env.NODE_ENV === 'staging') {
    //return "http://snsdev7:18190";
    //return "http://localhost:8000";
    return "https://amicus.alchemylms.com/";
  } else if (process.env.NODE_ENV === 'uat') {
    //return "http://snsdev7:18190";
    return "https://amicus.alchemylms.com/";
  } else if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod') {
    //return "http://snsdev7:18190";
    return "https://api.amicuslending.com/";
  } else {
    //return "http://localhost:18190";
    //return "http://snsdev7:18190";
    //return "http://ec2-35-165-249-11.us-west-2.compute.amazonaws.com";
    //return "http://ec2-35-165-20-111.us-west-2.compute.amazonaws.com";
    return "https://amicus.alchemylms.com/";
    //return "http://snsdev7:18190";
  }
}
