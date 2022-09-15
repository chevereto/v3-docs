# Social login

::: v4
Check the updated documentation at [🔌 Login providers](https://v4-admin.chevereto.com/features/login-providers.html).
:::

## Facebook login

::: danger Not secure
This service provider is known for its lack of security and violation of privacy policies. We don't recommend using this feature.
:::

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

::: danger Not secure
This service provider is known for its lack of security and violation of privacy policies. We don't recommend using this feature.
:::

To enable Twitter login you will need to create a [Twitter app](https://apps.twitter.com/).

- Go to `apps.twitter.com` and click on "Create New App".
- Use the following settings:
  - Website: `http://www.yourwebsite.com`
  - Callback URL: `http://www.yourwebsite.com/connect/twitter`
  - Allow this application to be used to Sign in with Twitter (On).
  - Use the following permissions:
    - Read and Write (selected)

## Google login

To enable Google Google Sign-in:

- Go to [Credentials page](https://console.developers.google.com/apis/credentials)
- Click **Create credentials** > **OAuth client ID**.
- Select the **Web application** application type.
- Name your OAuth 2.0 client
- Add `http://yourwebsite.com/connect/google` at **Authorized redirect URIs** and click **Create**.

After configuration is complete, **take note** of the **client ID** and **Client Secret** that got created.

Go to [Google login settings](../../settings/social-networks.md#google) to enable Google login in your Chevereto installation.

## VK login

To enable VK you will need to create a [VK app](https://vk.com/dev).

- Go to `vk.com/dev` and click on "Create An Application" and select category: Website
- Fill your website data
- Click on "Connect site"
- Authorized redirect URI: `http://www.yourwebsite.com/connect/vk`
- In app settings page make sure that Open API is enabled
