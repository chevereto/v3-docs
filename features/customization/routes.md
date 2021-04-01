# Routes

Routes refers to virtual paths like `/dashboard` which doesn't exists in the system as a real folder and Chevereto map that request to PHP. By default Chevereto comes with a lot of routes and all of them are in the `/app/routes` folder.

Custom routes are useful if you want to add things like your own API or you want to change how the default `/image` route works. With this system you don't need plugins at all and you can highly customize anything by adding routes or overriding the existing ones.

## Adding or overwriting routes

You can totally overwrite the default routes or add your own new routes safely. To do this simply do your work in the `app/routes/overrides` folder. You will need to look around the default routes to get used to it.

Feel free to do anything you want in the `app/routes/overrides` folder, your changes won't mess the default routes at all and you will keep your changes when you update the script.

Routes are a feature of G\ Library so you should check the [G\ Library documentation](https://g.chevereto.com/) for extended information about system routes.
