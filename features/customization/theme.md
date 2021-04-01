# Theme

## Theme overrides

Theme overrides works by detecting a file override which replaces a given theme file, so the system will use the override instead of the default file. Overrides are placed at `app/themes/Peafowl/overrides`. For example, let's say you want to replace `app/themes/Peafowl/views/image.php` you have to simply copy the file to `app/themes/Peafowl/overrides/views/image.php` and the system will now use the override instead of the default file.

## Custom hooks

Custom hooks allows to add or edit code in designated areas or segments of the theme. Default theme includes a custom hooks folder where you can add your own stuff and is filled with plenty sample files. For example, to customize the share buttons follow these steps:

- Go to the theme custom hooks folder `app/themes/Peafowl/custom_hooks/`
- Make a copy of `share_links.sample.php` (do all your editing needed in this copy)
- Rename your working copy to `share_links.php`

Chevereto will detect your overrides and it will load this file into the theme.

## Clone default theme

If you need more customization you should clone the default "Peafowl" theme and do your work in this new theme. To clone the default theme:

- Copy `app/themes/Peafowl/` and paste it in the same directory
- Name your new theme as anything you want (no white spaces)

Best way to keep a track of default theme changes is by creating a local git repo in your computer. Create a local git repo with last Chevereto version and commit each time you want to merge the code and will be able to see exactly all the changes line by line.
