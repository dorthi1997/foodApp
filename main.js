var foodieApp = angular.module('foodieApp',['ngRoute']);
foodieApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'pages/front.html',
		controller: 'frontController'
	})
	.when('/signin',{
		templateUrl: 'pages/signin.html',
		controller: 'signinController'
	})
    	.when('/home',{
		templateUrl: 'pages/home.html',
		controller: 'homeController'
	})
    	.when('/main',{
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
})

foodieApp.controller('mainController',function($scope) {
	$scope.restaurants = [{
	name: 'BigWhich',
	address: 'SCO 14, Backside, Madhya Marg, Sector 26, Chandigarh',
	location: 'sec 26,Chandigarh',
	category: 'CASUAL DINING, BAR',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '1200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://cdn2.tmbi.com/TOH/Images/Photos/37/300x300/EXPS_FRBZ16_198384_C05_10_4b.jpg'
},
       
                          {
	name: 'Taco Bell',
	address: 'sec 35,Chandigarh',
	location: 'sec 35,Chandigarh',
	category: 'Mexican Fast Food',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '600',
	hours: '11 AM to 11 AM (Mon-Sun)',
	image: 'http://images.all-free-download.com/images/graphiclarge/food_picture_03_hd_pictures_167556.jpg'
},
                              {
	name: 'OvenFresh',
	address: 'SCO 437 & 438, Sector 35 C, Sector 35, Chandigarh',
	location: 'Sector 35, Chandigarh',
	category: 'Cafe,Bakeryx',
	vote: '4.1',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuRQx3h39_co7L3NT_z5TbrdQqfMaZsSx5RLfq6jF4TZ9cXrC1'
},
                            {
	name: 'BayLeaf',
	address: 'Hotel President, SCO 22, Madhya Marg, Sector 26, Chandigarh',
	location: 'Sec 26,Chandigarh',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'North Indian, Continental',
	cost: '1600',
	hours: '10 Noon to 1 AM (Mon-Sun)',
	image: 'http://wallpapersdsc.net/wp-content/uploads/2016/09/Food-Images.jpg'
},
                            {
	name: 'Uncle JacKs',
	address: 'Booth 11, Sector 8, Chandigarh',
	location: 'Sec 8,Chandigarh',
	category: 'American, Beverages',
	vote: '4.5',
	cuisines: 'American, Beverages, Desserts',
	cost: '800',
	hours: ' 10 AM to 11 PM (Mon-Sun)',
	image: 'https://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/13658408_490009667863501_565993311_n.jpg?ig_cache_key=MTI5ODMzMTYyMjY4ODQ2MTUzMg%3D%3D.2'
},
                            {
	name: 'Get Dessert',
	address: 'Booth 29 , Inner Market, Sector 8B, Sector 8, Chandigarh',
    location: 'Sec 8B,Chandigarh',
	category: 'Desserts, Ice Cream',
	vote: '4.7',
	cuisines: 'Modern Indian',
	cost: '400',
	hours: '12 Noon to 12 MidNight (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/reviews_photos/984/668f504ddabaada1dd9809090720d984_1492132770.jpg'
},
                            {
	name: 'Sam Pizza',
	address: 'SCO 11, Madhya Marg, Sector 26, Chandigarh',
	location: 'Sec 28,Chandigarh',
	category: 'Pizza, Fast Food',
	vote: '4.2',
	cuisines: 'Pizza, Fast Food',
	cost: '900',
	hours: ' 11 AM to 10:30 PM (Mon-Sun)',
	image: 'https://23209-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2016/12/Cheesy-Pizza-BreadIMG_3743.jpg'
},
         {
	name: 'Urban Cafe',
	address: 'Hyatt Regency,178,Chandigarh Industrial Area',
	location: 'Sec 28,Chandigarh',
	category: 'Fine Dinning',
	vote: '4.5',
	cuisines: 'Chinese, Fast Food, Mexican',
	cost: '900',
	hours: ' 11 AM to 10:30 PM (Mon-Sun)',
	image: 'http://drop.ndtv.com/albums/COOKS/pasta-vegetarian/pastaveg_640x480.jpg'
},   {
	name: 'Food@u',
	address: 'Sector 21, Chandigarh',
	location: 'Sec 21,Chandigarh',
	category: 'Continental,North Indian',
	vote: '4.1',
	cuisines: 'Pizza, Fast Food',
	cost: '700',
	hours: ' 11 AM to 10:30 PM (Mon-Sun)',
	image: 'https://s-media-cache-ak0.pinimg.com/736x/ec/60/5a/ec605a2c4d9a830650f8c4fbf1c36935--bengali-food-roll-recipe.jpg'
},   {
	name: 'Dibbavala',
	address: 'Phase 5,Mohali',
	location: 'Phase 5,Mohali',
	category: 'Indian, Fast Food',
	vote: '4.2',
	cuisines: 'Pizza, Fast Food',
	cost: '900',
	hours: ' 11 AM to 10:30 PM (Mon-Sun)',
	image: 'http://i.ndtvimg.com/i/2016-05/aloo_625x350_51464600645.jpg'
},   {
	name: 'Mrs. WonGs',
	address: 'SCO 11, Madhya Marg, Sector 26, Chandigarh',
	location: 'Sec 26,Chandigarh',
	category: 'Asian,Street Food',
	vote: '3.7',
	cuisines: 'Asian,Street Food',
	cost: '500',
	hours: ' 11 AM to 10:30 PM (Mon-Sun)',
	image: 'http://i.ndtvimg.com/i/2016-06/chinese-625_625x350_81466064119.jpg'
},   {
	name: '3  Gems',
	address: 'SCO 11, Madhya Marg, Sector 26, Chandigarh',
	location: 'Sec 28,Chandigarh',
	category: 'Shakes, Fast Food',
	vote: '4.2',
	cuisines: 'Indian, Fast Food',
	cost: '500',
	hours: ' 11 AM to 12:30 PM (Mon-Sun)',
	image: 'https://i.ytimg.com/vi/XGFzne__Fw8/maxresdefault.jpg'
},   {
	name: 'Super Cafe',
	address: 'SCO 18, Madhya Marg, Sector 8, Chandigarh',
	location: 'Sec 8,Chandigarh',
	category: 'Pasta, Fast Food',
	vote: '4.0',
	cuisines: 'Pasta, Fast Food',
	cost: '600',
	hours: ' 11 AM to 10:30 PM (Mon-Sun)',
	image: 'https://i.ytimg.com/vi/ZCK6RZH2fgI/maxresdefault.jpg'
},   {
	name: 'Mingo Time',
	address: 'Bay Shop 132 phase 3B2,Mohai',
	location: 'Sec 28,Chandigarh',
	category: 'Cafe, Fast Food',
	vote: '4.3',
	cuisines: 'Cafe, Fast Food',
	cost: '1100',
	hours: ' 11 AM to 11:00 PM (Mon-Sun)',
	image: 'https://i.ytimg.com/vi/TjiRghFtQko/maxresdefault.jpg'
},   {
	name: 'Classic 44',
	address: 'SCO 415, Sector 44, Chandigarh',
	location: 'Sec 44, Chandigarh',
	category: 'Bakery, Fast Food',
	vote: '4.2',
	cuisines: 'Pizza, Fast Food',
	cost: '200',
	hours: ' 9.30 AM to 9:30 PM (Mon-Sun)',
	image: 'http://kristinakuzmic.com/wp-content/uploads/2013/06/KK_RecipeImage_MoltenChocCakeopt.jpg'
},   {
	name: 'Miso Hung',
	address: 'Sector 34, Chandigarh',
	location: 'Sec 34,Chandigarh',
	category: 'Rolls, Fast Food',
	vote: '4.1',
	cuisines: 'Pizza, Fast Food',
	cost: '300',
	hours: ' 1 PM to 10:30 PM (Mon-Sun)',
	image: 'http://jibekjolu.us/wp-content/uploads/tasty_food21.jpg'
},   {
	name: 'KhokhAs',
	address: 'SCO 11, Madhya Marg, Sector 26, Chandigarh',
	location: 'Sec 28,Chandigarh',
	category: 'Kiosk-Fast Food,Tea',
	vote: '4.2',
	cuisines: 'Pizza, Fast Food',
	cost: '900',
	hours: ' 11 AM to 10:30 PM (Mon-Sun)',
	image: 'https://i.ytimg.com/vi/O2l6mWqPeKM/maxresdefault.jpg'
},   {
	name: 'Rustic Door',
	address: 'SCO 10,Sector 10, Chandigarh',
	location: 'Sec 10,Chandigarh',
	category: 'Italian, North Indian',
	vote: '3.9',
	cuisines: 'Italian, North Indian',
	cost: '1500',
	hours: ' 11:30 AM to 10:30 PM (Mon-Sun)',
	image: 'https://media-cdn.tripadvisor.com/media/photo-s/03/d3/9d/09/wtf-what-tasty-food.jpg'
},   {
	name: 'Fry High',
	address: 'Sector 18, Chandigarh',
	location: 'Sec 18,Chandigarh',
	category: 'QuickBites-Fast Food',
	vote: '3.5',
	cuisines: 'QuickBites-Fast Food',
	cost: '1500',
	hours: ' 11 AM to 11:30 PM (Mon-Sun)',
	image: 'https://s-media-cache-ak0.pinimg.com/736x/58/55/b6/5855b65229a5dc4c36a2a063350d90f5--honey-food-recipes-food-and-drink-recipes.jpg'
},   {
	name: 'Castle Grill',
	address: 'Sector 37, Chandigarh',
	location: 'Sec 37,Chandigarh',
	category: 'Burger, Fast Food',
	vote: '4.0',
	cuisines: 'Burger, Fast Food',
	cost: '900',
	hours: ' 11 AM to 10:30 PM (Mon-Sun)',
	image: 'https://s-media-cache-ak0.pinimg.com/originals/f9/2d/d3/f92dd3871ab7c1684c5597b35bd13109.jpg'
},   {
	name: 'Dumpl Hood',
	address: 'Sector 42, Chandigarh',
	location: 'Sec 42,Chandigarh',
	category: 'Chinese, Fast Food',
	vote: '4.1',
	cuisines: 'Pizza, Fast Food',
	cost: '400',
	hours: ' 11 AM to 10:30 PM (Mon-Sun)',
	image: 'http://photo.elsoar.com/wp-content/images/Tasty-Fast-Food.-Reviews-11.jpg'
},                   
                         
]
})
foodieApp.controller('homeController',function($scope) {
})

foodieApp.controller('signinController',function($scope,$location) {
	$scope.goToHome = function() {
		//console.log('Do Something')
		$location.url('home')
	}
})
foodieApp.controller('frontController',function($scope) {
})


