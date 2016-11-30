$(document).ready(function() {

	$('#js-shopping-list-form').on('click', 'button', function(event) {

		event.preventDefault();

		$('.shopping-list').append(
			'<li>' + 
			'<span class="shopping-item">' + $('#shopping-list-entry').val() + '</span>' +
			'<div class="shopping-item-controls">' + 
			'<button class="shopping-item-toggle">' + 
			'<span class="button-label">check</span>' + '</button>' + '<button class="shopping-item-delete">' + 
			'<span class="button-label">delete</span>' + '</button>' + 
			'</li>');

		$(this)[0].reset();

	});

	$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {

		$(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');

	});

	$('.shopping-list').on('click', '.shopping-item-delete', function(event) {

		$(this).closest('li').remove();

	});

});

