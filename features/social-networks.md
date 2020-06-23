# Social networks

This feature allows you to customize the built-in social networks integrations which are located at Dashboard > Settings > Social networks.

## Enable social network login

To enable a social network you will need to get API keys in each social network service so is recommended to follow the steps in this documentation in each case. Once you get the API keys you only need to enable/disable the target social network in Dashboard > Settings > Social networks and put the API keys of each app.

## Facebook login

To enable Facebook login you will need to create a [Facebook app](https://developers.facebook.com/).

- Go to `https://developers.facebook.com/apps` (you must be logged in Facebook) and click on "Add a New App".

- Enter your new app display name, email and category when prompted

- Click on "Create App ID", you will redirected to a new page

- Go to "Settings" and then click on "Add Platform"

- Select "Website" and then enter your website URL, click on "Save Changes" at the bottom of the page

- Add your app domain, privacy and terms URLs. Remember to click on "Save Changes" at the bottom

- Go to "Products" and then click on "Facebook Login" (you must add that product if isn't there)

- On "Client OAuth Settings" make sure to enable "Web OAuth Login"

- Under "Valid OAuth redirect URIs" enter `http://yourwebsite.com/connect/facebook`
- Under "Deauthorize Callback URL" enter `http://yourwebsite.com/`

- Go to "App Review" and make your app public (this will enable your app for everybody)

- Once your app gets approved as public you can go to "Dashboard" and then copy "App ID" and "App Secret" in your Chevereto website (Dashboard > Settings > Social Networks)

Take special note for the Facebook APP Review. Your app will be only visible to you until you complete all the information required by Facebook.

## Twitter login

To enable Twitter you will need to create a [Twitter app](https://apps.twitter.com/).

- Go to `apps.twitter.com` and click on "Create New App".
- Use the following settings:

  - Website: `http://www.yourwebsite.com`
  - Callback URL: `http://www.yourwebsite.com/connect/twitter`
  - Allow this application to be used to Sign in with Twitter (On).

- Use the following permissions:

  - Read and Write (selected).

## Google Sign-in

To enable Google Google Sign-in:

- Go to [Integrating Google Sign-In into your web app](https://developers.google.com/identity/sign-in/web/sign-in#before_you_begin) and click on "Configure Project".
- Set the project and product name when asked.
- In "Configure your OAuth client" under "Where are you calling from?" select `Web server`

  - Authorized redirect URIs: `http://yourwebsite.com/connect/google`
  - Hit "Create"
  - After clicking on "Create" you will get your `Client ID` and `Client Secret` that you will need to provide in your Chevereto dashboard.

- You can always manage your API credentials and usage later in the [API Console](https://console.cloud.google.com/).

## VK login

To enable VK you will need to create a [VK app](https://vk.com/dev).

- Go to `vk.com/dev` and click on "Create An Application" and select category: Website
- Fill your website data
- Click on "Connect site"
- Authorized redirect URI: `http://www.yourwebsite.com/connect/vk`
- In app settings page make sure that Open API is enabled
