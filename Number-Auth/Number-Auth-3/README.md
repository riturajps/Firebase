### google-phone-auth ###
  this project helps to explain how to setup google firebase based phone authentication

### firebase and code setup ###
  0. download this repository https://github.com/Varadsingh/google-phone-auth/archive/master.zip
  1. go to https://console.firebase.google.com/project/
  2. create a new project
  3. go to the setting button and then click on "Project settings"
  4. now in the "Your apps" section select the "Config" radio button
  5. copy the code given
  6. paste the code in /firebase/init.js change the variable name as required
  10. now back to firebase console, in the "Develop" section click on the "Authentication", then go to "Sign-in method", here in "Sign-in providers" section, click on "Phone" section and enable it
  11. you can also add a dummy phone number and verification code for testing purpose
  12. in "Authorized domains" section, add you domain for example "localhost"
  
### points to be noted ###
  0. the code runs properly on a server environment, meaning it won't run by just double-clicking on the html file
  1. you need to copy the code to the root/htdocs/public_html folder on the server that you use example XAMPP
  2. firebase authentication requires captcha verification, and in the code the verification has been kept invisible, therefore it might take a few moments to initialize
