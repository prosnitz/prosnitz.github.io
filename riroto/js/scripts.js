$(document).ready(function() {

	function actions() {
		$('.content tr td:nth-of-type(n4)').addClass('dollar');

		$('.dollar').each(function(){
			var mult = 1.28;
			var numVal = parseInt($(this).text());
		    var adjVal = Math.ceil(numVal * mult);
		    $(this).text(adjVal);
		});

		$('.content tr:not(.notes)').click(function() {
			if( $('.toggle-picked').hasClass('active') ) {
				alert('SHOW PICKED PLAYERS FIRST!')
			} else {
				$(this).toggleClass('picked');
			}
		});

		$('.content tr td a').on('click', function() {
			$(this).parent('tr').removeClass('picked');
		});

		$('.content tr:not(.notes)').each(function() {
			if($('td:nth-child(2)', this).attr('title')) {
				$('td:nth-child(2)', this).css("font-weight", "bold");
			}
		});

		

		$('.toggle').click(function() {
			$('.keep').toggleClass('hide');
			$(this).toggleClass('active');
		});

		$('.toggle-mine').click(function() {
			$('.mine').toggleClass('hide');
			$(this).toggleClass('active');
		})
		
		$('.toggle-picked').click(function() {
			$('.picked').toggleClass('hide-picked');
			$(this).toggleClass('active');
		});

		// $('.content tr:not(.notes) td').each(function(){
		// 	$(this).tooltip();
		// });

		$('.fuckYou').click(function() {
			$('html').append('<div class="spinner"><img src="images/fu.svg" /> <div class="closeIt"></div></div>');

			$('.spinner .closeIt').click(function() {
				$('.spinner').remove();
			});
		});

		$(".hurt").mouseenter(function () {
			var url = $('a', this).attr('href');

	    $(this).data('timeout', setTimeout(function () {
	        window.open(url)
	    }, 1500));
		}).mouseleave(function () {
	    clearTimeout($(this).data('timeout'));
		});

		$('.save').click(function() {
			var htmlContents = document.documentElement.innerHTML;
			localStorage.setItem('page', JSON.stringify(htmlContents ));
			alert('saved');
		});

		$('.retrieve').click(function() {
			var htmlContents = localStorage.getItem('page')
			var p = (JSON.parse(htmlContents ));
			// p = JSON.parse('page');
			// $('html').html(p);
			document.documentElement.innerHTML = p;

			actions();

		});
	};

	actions();

	
	
});