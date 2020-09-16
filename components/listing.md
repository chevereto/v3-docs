# Listing

The listing component is in charge of handling the fetching of user generated resources (user, images, albums). It works by programmatically building filtered MySQL queries context-aware of the user requesting these resources.

A list of any type can be created anywhere and the query-result can be retrieved directly as an `array` or as a template-able HTML presentation.

## Helpers

The values returned by helpers will be aware of the current `HTTP GET` parameters.

### Listing helper `getParams`

The helper function `CHV\Listing::getParams` allows to fetch the applicable listing parameters for a given list.

### Listing helper `getTabs`

The helper function `CHV\Listing::getTabs` allows to handle tabbed listings. Tabs provide a different sort option for Chevereto listings.

### GET parameters

The following GET parameters will affect the return of the helpers.

| Parameter  | Description                                        | Values                                                                        |
| ---------- | -------------------------------------------------- | ----------------------------------------------------------------------------- |
| pagination | Pagination mode                                    | `endless`, `classic`                                                           |
| offset     | The offset to fetch results                        | type integer                                                                  |
| sort       | List sort option (`sortable`_asc, `sortable`_desc) | Sortable: `date`,  `size`, `views`, `id`, `image_count`, `name`, `title`, `username` |
| seek       | ID to seek next-to                                 | type public id                                                                |
| peek       | ID to seek prev-to                                 | type public id                                                                |
| page       | The page number                                    | type integer                                                                  |

Usage is simple as append the parameters for the listing URL query string.

```txt
/?offset=4&sort=id_desc&seek=ifNk"
```

Remarks:

- `seek` and `peek` can't be used at the same time.
- `page` just holds a numeric reference, listings paginate based on seek/peek + offset.

## Examples

### Listing example

In this example, we will create an image listing for images of type JPG and at least 1080 width.

Case requirements:

- Public route access
- HTML output (just like any built-in listing)

Sample code:

Create `app/routes/overrides/route.jpg1080up.php` with the following contents.

```php
<?php
$route = function ($handler) {
    try {
        // Define `get_pre_doctitle()` and `get_listing()` at theme file
        $handler::setVar('pre_doctitle', 'JPG > 1080px width');
        $handler::setVar(
            'listing',
            ['label' => $handler::getVar('pre_doctitle'), 'icon' => 'icon-images2']
        );
        // Build around the helpers
        $listParams = CHV\Listing::getParams();
        $tabs = CHV\Listing::getTabs($listParams, true);
        $currentKey = $tabs['currentKey'];
        $tabs = $tabs['tabs'];
        $handler::setVar('tabs', $tabs);
        parse_str($tabs[$currentKey]['params'], $tabs_params);
        $listParams['sort'] = explode('_', $tabs_params['sort']);
        // Actually build the list
        $list = new CHV\Listing;
        $list->setType('images');
        $list->setReverse($listParams['reverse']);
        $list->setSeek($listParams['seek']);
        $list->setOffset($listParams['offset']);
        $list->setLimit($listParams['limit']);
        $list->setSortType($listParams['sort'][0]);
        $list->setSortOrder($listParams['sort'][1]);
        // This is where the condition gets applied
        $list->setWhere('image_extension = :extension AND image_width > :width');
        $list->setRequester(CHV\Login::getUser());
        $list->setParamsHidden($listParams['params_hidden']);
        // This is how you bind placeholders to the actual value to use
        $list->bind(':extension', 'jpg');
        $list->bind(':width', '1080');
        $list->exec();
        // Define `get_list()` at theme file
        $handler::setVar('list', $list);
    } catch (Exception $e) {
        G\exception_to_error($e);
    }
};
```

This will also need a view at `app/themes/Peafowl/views/jpg1080up.php`

```php
<?php if (!defined('access') or !access) {
    die('This file cannot be directly accessed.');
} ?>
<?php G\Render\include_theme_header(); ?>

<?php CHV\Render\show_banner('explore_after_top', get_list()->sfw); ?>

<div class="content-width">

	<div class="header header-tabs margin-bottom-10 follow-scroll">
    	<h1><strong><?php echo('<span class="margin-right-5 icon ' . get_listing()['icon'] . '"></span>' . get_listing()['label']); ?></strong></h1>
        <?php G\Render\include_theme_file("snippets/tabs"); ?>
		<?php
            if (is_content_manager()) {
                G\Render\include_theme_file("snippets/user_items_editor"); ?>
        <div class="header-content-right phone-float-none">
			<?php G\Render\include_theme_file("snippets/listing_tools_editor"); ?>
        </div>
		<?php
            }
        ?>
    </div>
    <div id="content-listing-tabs" class="tabbed-listing">
        <div id="tabbed-content-group">
            <?php
                G\Render\include_theme_file("snippets/listing");
            ?>
        </div>
    </div>
</div>

<?php G\Render\include_theme_footer(); ?>
```

Accessing `HTTP GET /jpg1080up` will show the applicable listing as any other buil-in Chevereto listing.

### List all example

In this example, a list will be created with the purpose of getting a all the image URLs of a given user. No pagination nor HTML will be required in this example.

Case requirements:

- Admin only route access
- Plain output (one url per line)

Sample code:

Create `app/routes/overrides/route.get-user-images.php` with the following contents.

```php
<?php
$route = function ($handler) {
    try {
        // Check access policy
        if (!CHV\Login::isAdmin()) {
            return $handler->issue404();
        }
        $logged_user = CHV\Login::getUser();
        // Get the username, 0 is the first component index in route
        $username = $handler->request[0];
        // Get the target user from its username
        $user = CHV\User::getSingle($username, 'username');
        // Check that the target user exists
        if (!$user) {
            return $handler->issue404();
        }
        // Actually build the list
        $list = new CHV\Listing;
        $list->setType('images');
        $list->setLimit(0);
        $list->setSortType('date');
        $list->setSortOrder('desc');
        $list->setWhere('image_user_id = :user_id');
        $list->bind(':user_id', $user['id']);
        $list->exec();
        // Uncomment these if you need to debug
        G\debug(
            [
                // 'query' => $list->debugQuery(),
                // 'output' => $list->output,
                // 'output_assoc' => $list->output_assoc,
            ]
        );
        // Force output header, print the data
        header('Content-Type:text/plain');
        foreach ($list->output_assoc as $pos => $item) {
            echo $item['url_viewer'] . "\n";
        };
        // Stop execution once done
        die();
    } catch (Exception $e) {
        G\exception_to_error($e);
    }
};
```

Accessing `HTTP GET /get-user-images/username` will return all the `username` URLs in `plain-text` format.

> 🧐 You can uncomment the debug lines to debug the output alternatives.