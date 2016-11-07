$(function(){
	$('nav').slicknav({
		appendTo: "header"
	});
});




$(document).ready(function() {
	// Make labels act more like Placeholders in form field
  $('.field-wrapper input:not([type="checkbox"])').each(function() {
    if($(this).val().length > 0) {
      $('~ label', this).css('opacity', 0);
    } else {
      // $('~ label', this).css('opacity', '');
    }
  });

  $('.field-wrapper textarea').each(function() {
    if($(this).val().length > 0) {
      $('~ label', this).css('opacity', 0);
    } else {
      // $('~ label', this).css('opacity', '');
    }
  });

  $('.field-wrapper textarea').on('blur', function() {
    if($(this).val().length > 0) {
      $('~ label', this).css('opacity', 0);
    } else {
      $('~ label', this).css('opacity', '');
    }
  });

  function fieldLabel(fieldType) {
    $(fieldType, '.field-wrapper').on('blur', function() {
      if($(this).val().length > 0) {
        $('~ label', this).css('opacity', 0);
      } else {
        $('~ label', this).css('opacity', '');
      }
    });
  }

  $('.home .expand .details').each(function() {
    $(this).addClass('hidden');
  });

  $('.home .common .fa-eye').on('click', function() {
    $(this).parents('tbody').find('.details').slideToggle(100);
  });

  $('.expand button').on('click', function() {
    $(this).parents('.details').slideToggle(100);
  });

  fieldLabel('textarea');
});