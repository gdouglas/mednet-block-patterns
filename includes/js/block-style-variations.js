wp.domReady(() => {
	wp.blocks.unregisterBlockStyle('core/button', ['outline', 'fill']);
	wp.blocks.unregisterBlockStyle( 'core/quote', 'plain' );
	
	wp.blocks.registerBlockStyle('core/group', [{
		name: 'default-group',
		label: 'Default',
		isDefault: true
	},{
		name: 'grey-fill-group',
		label: 'Light Grey Fill',
	},{
		name: 'reverse-group',
		label: 'Reverse',
	}]);
	
	wp.blocks.registerBlockStyle('core/read-more', {
		name: 'hide-read-more',
		label: 'Hide Readmore',
	});

	wp.blocks.registerBlockStyle('core/quote', {
		name: 'blue-quote',
		label: 'MedNet Quote',
		isDefault: true,
	});
	
	wp.blocks.registerBlockStyle('core/paragraph', {
		name: 'introduction-paragraph',
		label: 'Introduction text',
		icon: 'help'
	});

	wp.blocks.registerBlockStyle('core/button', [
		{
			name: 'blue-btn',
			label: 'Default',
			isDefault: true,
		},
		{
			name: 'dark-blue',
			label: 'Dark Blue',
		},
	]);
});
