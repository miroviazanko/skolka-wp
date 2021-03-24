<?php
if (function_exists('acf_add_options_page'))
{
    acf_add_options_page(array(
        'page_title' => __('Škôlka Nastavenia web stránky', 'skolka'),
        'menu_title' => __('Škôlka Nastavenia', 'skolka'),
        'menu_slug' => 'theme-general-settings',
        'capability' => 'edit_posts',
        'redirect' => false
    ));

    /*acf_add_options_sub_page(array(
        'page_title' => __('Pätička', 'skolka'),
        'menu_title' => __('Pätička', 'skolka'),
        'parent_slug' => 'theme-general-settings',
    ));*/
}
