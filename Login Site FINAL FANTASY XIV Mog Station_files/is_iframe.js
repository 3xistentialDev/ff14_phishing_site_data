jQuery(function () {
	jQuery('<input>').attr({
		type: 'hidden',
		id: 'wfp',
		name: 'wfp',
		value: (window == window.parent) ? '1': '0'
	}).appendTo('form');
});
