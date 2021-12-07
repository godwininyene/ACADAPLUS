
$(document).ready(function(){

	//	DOM Elements
	var popUp = $('#pop-up');
	var loginFormContainer = $('#login-form-container');

	/* Rotate home text */
	$('.rotate').textrotator({
		animation: "dissolve",
		speed: 4000
	});


	/* Open pop up */
	$('.js-login-btn').click(function(){
		if(popUp.hasClass('hidden') && loginFormContainer.hasClass('hidden')){
			popUp.removeClass('hidden');
			loginFormContainer.removeClass('hidden');
		}
	});

	/* Close Pop Up */
	$('#close-pop-up').click(function(){
		popUp.addClass('hidden');
		loginFormContainer.addClass('hidden');
	});

	/* For the Sticky Navigation */
	$('#section-about').waypoint(function(direction){
		if(direction == 'down'){
			$('#header').addClass('sticky-header');
		}else{
			$('#header').removeClass('sticky-header');
		}
	}, {
		offset: '60px;'
	});


	
	/* Scroll To demo section*/
	$('.js-scroll-2-demo-btn').click(function(){
		$('html, body').animate({scrollTop: $('#section-sch-demo').offset().top}, 3000);
	});


	/* Scroll To various sections within the document*/
	$('li a').click(function(event){
		//Get target
		var target = this.hash;
		// Prevent default anchor links behaviour
		event.preventDefault();
		//is there a target
		if(target){
			// Scroll to target
			$('html, body').animate({scrollTop: $(target).offset().top}, 3000);
		}
	});


	/* Toggle Navigation Bar */
	$('#navigation-btn').click(function(){
		// Get Navigation bar
		var navBar = $('#main-nav');
		// Get Navigation icon
		var icon = $('.js-navicon');
		// Toggle Navigation bar
		navBar.slideToggle(500);
		// Toggle navigation icon
		if(icon.hasClass('fa-navicon')){
			icon.removeClass('fa-navicon');
			icon.addClass('fa-close');
		}else{
			icon.addClass('fa-navicon');
			icon.removeClass('fa-close');	
		}
	});

	/* Animation on Scroll */

	$('.js-wp-1').waypoint(function(direction){
		$('.js-wp-1').addClass('animate__animated animate__fadeInUp');
	}, {
		offset: '50%'
	});

	$('.js-wp-2').waypoint(function(direction){
		$('.js-wp-2').addClass('animate__animated  animate__bounceIn');
	}, {
		offset: '60%'
	});


	/* Show Next News Slide */
	$('.news-ctrl-btn-next').click(function(){
		$('.news-container').find('div.active-news-slide').next().removeClass('hidden-news-slide');
		$('.news-container').find('div.active-news-slide').next().addClass('active-news-slide');
		$('.news-container').find('div.active-news-slide').prev().addClass('hidden-news-slide');
		$('.news-container').find('div.active-news-slide').prev().removeClass('active-news-slide');
	});

	/* Show Previous News Slide */
	$('.news-ctrl-btn-prev').click(function(){
		 $('.news-container').find('div.active-news-slide').prev().addClass('active-news-slide');
		 $('.news-container').find('div.active-news-slide').removeClass('hidden-news-slide');
		 $('.news-container').find('div.active-news-slide').next().removeClass('active-news-slide');
		 $('.news-container').find('div.active-news-slide').next().addClass('hidden-news-slide');
	});
});