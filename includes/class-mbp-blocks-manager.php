<?php
/**
 * Block Manager
 *
 * @package     MBP
 * @copyright   Copyright (c) 2022, Graham Douglas
 * @since       1.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * MBP_Blocks_Manager Class
 *
 * Handle block manipulation.
 *
 * @since 1.0.0
 */
class MBP_Blocks_Manager {
	/**
	 * Constructor
	 */
	public function __construct() {

		add_action( 'init', array( $this, 'mbp_register_block_styles' ) );
	}

	/**
	 * Register block styles
	 *
	 * @return void
	 */
	public static function mbp_register_block_styles() {

		if ( ! function_exists( 'register_block_style' ) ) {
			return;
		}
		wp_register_style(
			'mbp-editor-styles',
			plugins_url( '/build/editor.css', __DIR__ ),
			array( 'wp-editor' ),
			filemtime( plugin_dir_path( __DIR__ ) . 'build/editor.css' )
		);

	}

}

new MBP_Blocks_Manager();
