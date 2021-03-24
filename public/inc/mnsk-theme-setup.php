<?php

if (!function_exists('skolka_setup')) :
/**
* Sets up theme defaults and registers support for various WordPress features.
*
* Note that this function is hooked into the after_setup_theme hook, which
* runs before the init hook. The init hook is too late for some features, such
* as indicating support for post thumbnails.
*/
    function skolka_setup()
    {
        /*
        * Make theme available for translation.
        * Translations can be filed in the /languages/ directory.
        */
        load_theme_textdomain('skolka', get_template_directory() . '/languages');

        /*
        * Let WordPress manage the document title.
        * By adding theme support, we declare that this theme does not use a
        * hard-coded <title> tag in the document head, and expect WordPress to
            * provide it for us.
            */
            add_theme_support('title-tag');

            /*
            * Enable support for Post Thumbnails on posts and pages.
            *
            * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
            */
            add_theme_support('post-thumbnails');

            // This theme uses wp_nav_menu() in two locations.
            register_nav_menus(
            array(
                'top-menu' => __('Primary', 'skolka'),
            )
            );

            /*
            * Switch default core markup for search form, comment form, and comments
            * to output valid HTML5.
            */
            add_theme_support('html5', array(
                'search-form',
                'comment-form',
                'comment-list',
                'gallery',
                'caption',
                )
            );

            // Add support for responsive embedded content.
            add_theme_support('responsive-embeds');

            // Register a new image sizes
            add_image_size('skolka_menu_img_size', 1000 , 800, true);
            add_image_size('skolka_rectangle_portrait_size', 600 , 840, true);
            add_image_size('skolka_intro_size', 1800 , 410, true);
    }
endif;


add_action('after_setup_theme', 'skolka_setup');
