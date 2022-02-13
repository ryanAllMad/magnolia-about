<?php
/**
 * Plugin Name:       Magnolia About
 * Description:       This plugin has one Block type, the about block for the Widget and Post areas.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Ryan Duer
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       magnolia-about
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_magnolia_about_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_magnolia_about_block_init' );
