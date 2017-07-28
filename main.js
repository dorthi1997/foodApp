<!--------var declare kia------------------------>
var foodieApp = angular.module('foodieApp',['ngRoute']);
<!-----------------routes bnae so dat pta chl ske konsapage kase chale-------------------------->
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
    .when('/restaurant/:id', {
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
})
<!-----------main page k liye controller bnaya-------------------->

foodieApp.controller('mainController',function($scope) {
    <!-----------array of object bnaye restaurant k liye--------------------------->
	$scope.restaurants = [{
	name: 'BigWhich',
	address: 'SCO 14, Backside, Madhya Marg, Sector 26, Chandigarh',
	location: 'sec 26,Chandigarh',
	category: 'CASUAL DINING, BAR',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '1200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://cdn2.tmbi.com/TOH/Images/Photos/37/300x300/EXPS_FRBZ16_198384_C05_10_4b.jpg',
        id:1,
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
	image: 'http://images.all-free-download.com/images/graphiclarge/food_picture_03_hd_pictures_167556.jpg',
                              id:2,
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
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuRQx3h39_co7L3NT_z5TbrdQqfMaZsSx5RLfq6jF4TZ9cXrC1',
                                  id:3,
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
	image: 'http://wallpapersdsc.net/wp-content/uploads/2016/09/Food-Images.jpg',
                                id:4,
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
	image: 'https://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/13658408_490009667863501_565993311_n.jpg?ig_cache_key=MTI5ODMzMTYyMjY4ODQ2MTUzMg%3D%3D.2',
                                id:5,
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
	image: 'https://b.zmtcdn.com/data/reviews_photos/984/668f504ddabaada1dd9809090720d984_1492132770.jpg',
                                id:6,
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
	image: 'https://23209-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2016/12/Cheesy-Pizza-BreadIMG_3743.jpg',
                                id:7,
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
	image: 'http://drop.ndtv.com/albums/COOKS/pasta-vegetarian/pastaveg_640x480.jpg',
             id:8,
},   {
	name: 'Food@u',
	address: 'Sector 21, Chandigarh',
	location: 'Sec 21,Chandigarh',
	category: 'Continental,North Indian',
	vote: '4.1',
	cuisines: 'Pizza, Fast Food',
	cost: '700',
	hours: ' 11 AM to 10:30 PM (Mon-Sun)',
	image: 'https://s-media-cache-ak0.pinimg.com/736x/ec/60/5a/ec605a2c4d9a830650f8c4fbf1c36935--bengali-food-roll-recipe.jpg',
    id:9,
},   {
	name: 'Dibbavala',
	address: 'Phase 5,Mohali',
	location: 'Phase 5,Mohali',
	category: 'Indian, Fast Food',
	vote: '4.2',
	cuisines: 'Pizza, Fast Food',
	cost: '900',
	hours: ' 11 AM to 10:30 PM (Mon-Sun)',
	image: 'http://i.ndtvimg.com/i/2016-05/aloo_625x350_51464600645.jpg',
    id:10,
},   {
	name: 'Mrs. WonGs',
	address: 'SCO 11, Madhya Marg, Sector 26, Chandigarh',
	location: 'Sec 26,Chandigarh',
	category: 'Asian,Street Food',
	vote: '3.7',
	cuisines: 'Asian,Street Food',
	cost: '500',
	hours: ' 11 AM to 10:30 PM (Mon-Sun)',
	image: 'http://i.ndtvimg.com/i/2016-06/chinese-625_625x350_81466064119.jpg',
    id:11,
},   {
	name: '3  Gems',
	address: 'SCO 11, Madhya Marg, Sector 26, Chandigarh',
	location: 'Sec 28,Chandigarh',
	category: 'Shakes, Fast Food',
	vote: '4.2',
	cuisines: 'Indian, Fast Food',
	cost: '500',
	hours: ' 11 AM to 12:30 PM (Mon-Sun)',
	image: 'https://i.ytimg.com/vi/XGFzne__Fw8/maxresdefault.jpg',
    id:12,
},   {
	name: 'Super Cafe',
	address: 'SCO 18, Madhya Marg, Sector 8, Chandigarh',
	location: 'Sec 8,Chandigarh',
	category: 'Pasta, Fast Food',
	vote: '4.0',
	cuisines: 'Pasta, Fast Food',
	cost: '600',
	hours: ' 11 AM to 10:30 PM (Mon-Sun)',
	image: 'https://i.ytimg.com/vi/ZCK6RZH2fgI/maxresdefault.jpg',
    id:13,
},   {
	name: 'Mingo Time',
	address: 'Bay Shop 132 phase 3B2,Mohai',
	location: 'Sec 28,Chandigarh',
	category: 'Cafe, Fast Food',
	vote: '4.3',
	cuisines: 'Cafe, Fast Food',
	cost: '1100',
	hours: ' 11 AM to 11:00 PM (Mon-Sun)',
	image: 'https://i.ytimg.com/vi/TjiRghFtQko/maxresdefault.jpg',
    id:14,
},   {
	name: 'Classic 44',
	address: 'SCO 415, Sector 44, Chandigarh',
	location: 'Sec 44, Chandigarh',
	category: 'Bakery, Fast Food',
    id:15,
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
    id:16,
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
    id:17,
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
    id:18,
	image: 'https://media-cdn.tripadvisor.com/media/photo-s/03/d3/9d/09/wtf-what-tasty-food.jpg'
},   {
	name: 'Fry High',
	address: 'Sector 18, Chandigarh',
	location: 'Sec 18,Chandigarh',
	category: 'QuickBites-Fast Food',
	vote: '3.5',
	cuisines: 'QuickBites-Fast Food',
	cost: '1500',
    id:19,
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
    id:20,
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
    id:21,
	hours: ' 11 AM to 10:30 PM (Mon-Sun)',
	image: 'http://photo.elsoar.com/wp-content/images/Tasty-Fast-Food.-Reviews-11.jpg'
},

]
})
<!--------------------home page k liye controller bnaya------------------------------>
foodieApp.controller('homeController',function($scope) {
})
<!--------------------front page k liye controller bnaya------------------------------>
foodieApp.controller('frontController',function($scope,$location) {
    $scope.goToSignin = function() {
		<!---------signin k liye function  and uska location set ki sign in prr jane k liye---------------------->
		$location.url('signin')

	}
})
<!--------------------signin page k liye controller bnaya------------------------------>
foodieApp.controller('signinController',function($scope,$location) {
	$scope.goToHome = function() {
			<!---------home k liye function  and uska location set ki home page prr jane k liye---------------------->
		$location.url('home')
	}
})
<!--------------------restaurant page k liye controller bnaya------------------------------>

foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
<!--------------array of objects bnaye restaurant k------------------------>
	$scope.restaurantId = $routeParams.id;
	var restaurants = [{
	name: 'BigWhich',
	address: 'SCO 14, Backside, Madhya Marg, Sector 26, Chandigarh',
	location: 'sec 26,Chandigarh',
	category: 'CASUAL DINING, BAR',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '1200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'http://i.ndtvimg.com/i/2015-01/murgh-makhni_625x350_61421325380.jpg',
        id:1,
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
	image: 'https://static.independent.co.uk/s3fs-public/styles/article_small/public/thumbnails/image/2017/02/07/15/chinese.jpg',
                              id:2,
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
	image: 'http://www.ringof5.com/userdata/fun_rings/138_1360954898_1647163177.jpg',
                                  id:3,
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
	image: 'http://cf.yellowblissroad.com/wp-content/uploads/2015/07/Yummy-Pizza-Pinwheels.jpg',
                                id:4,
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
	image: 'http://assets.bonappetit.com/photos/57b26988319a58275764d88e/16:9/w_1200,c_limit/five-spice-apple-pie.jpg?mbid=social_retweet',
                                id:5,
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
	image: 'https://images-gmi-pmc.edge-generalmills.com/4f041061-88a3-4886-98ae-e65da19e79bd.jpg',
                                id:6,
},
                            {
	name: 'Sam Pizza',
	address: 'SCO 11, Madhya Marg, Sector 26, Chandigarh',
	location: 'Sec 28,Chandigarh',
	category: 'Pizza, Fast Food',
	vote: '4.2',
	cuisines: 'Pizza, Fast Food',
	cost: '900',
                                    bestDish: {
	name: 'FarmHouse Pizza',
	image: 'https://www.elementstark.com/woocommerce-extension-demos/wp-content/uploads/sites/2/2016/12/pizza.jpg'
    },
	hours: ' 11 AM to 10:30 PM (Mon-Sun)',
	image: 'http://www.ringof5.com/userdata/fun_rings/138_1360954898_1647163177.jpg',
                                id:7,
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
	image: 'http://i2.cdn.turner.com/money/dam/assets/141224105650-chinese-food-xmas-1024x576.jpg',
             id:8,
},   {
	name: 'Food@u',
	address: 'Sector 21, Chandigarh',
	location: 'Sec 21,Chandigarh',
	category: 'Continental,North Indian',
	vote: '4.1',
	cuisines: 'Pizza, Fast Food',
	cost: '700',
	hours: ' 11 AM to 10:30 PM (Mon-Sun)',
	image: 'http://i.ndtvimg.com/i/2015-09/spring-rolls-625_625x350_71441392136.jpg',
    id:9,
},   {
	name: 'Dibbavala',
	address: 'Phase 5,Mohali',
	location: 'Phase 5,Mohali',
	category: 'Indian, Fast Food',
	vote: '4.2',
	cuisines: 'Pizza, Fast Food',
	cost: '900',
	hours: ' 11 AM to 10:30 PM (Mon-Sun)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9l1P6rSHuO7zPibvfoPL5RKntXzbdoGpm_DSNm9-5IqXJmMpO',
    id:10,
},   {
	name: 'Mrs. WonGs',
	address: 'SCO 11, Madhya Marg, Sector 26, Chandigarh',
	location: 'Sec 26,Chandigarh',
	category: 'Asian,Street Food',
	vote: '3.7',
	cuisines: 'Asian,Street Food',
	cost: '500',
	hours: ' 11 AM to 10:30 PM (Mon-Sun)',
	image: 'http://i.ndtvimg.com/i/2015-09/chilli-chicken-625_625x350_41441399214.jpg',
    id:11,
},   {
	name: '3  Gems',
	address: 'SCO 11, Madhya Marg, Sector 26, Chandigarh',
	location: 'Sec 28,Chandigarh',
	category: 'Shakes, Fast Food',
	vote: '4.2',
	cuisines: 'Indian, Fast Food',
	cost: '500',
	hours: ' 11 AM to 12:30 PM (Mon-Sun)',
	image: 'http://www2.pictures.zimbio.com/mp/A2QXA_4PTKMx.jpg',
    id:12,
},   {
	name: 'Super Cafe',
	address: 'SCO 18, Madhya Marg, Sector 8, Chandigarh',
	location: 'Sec 8,Chandigarh',
	category: 'Pasta, Fast Food',
	vote: '4.0',
	cuisines: 'Pasta, Fast Food',
	cost: '600',
	hours: ' 11 AM to 10:30 PM (Mon-Sun)',
	image: 'https://i.ytimg.com/vi/4q8GwxethQ0/maxresdefault.jpg',
    id:13,
},   {
	name: 'Mingo Time',
	address: 'Bay Shop 132 phase 3B2,Mohai',
	location: 'Sec 28,Chandigarh',
	category: 'Cafe, Fast Food',
	vote: '4.3',
	cuisines: 'Cafe, Fast Food',
	cost: '1100',
	hours: ' 11 AM to 11:00 PM (Mon-Sun)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyyBXwG_WjGFGaY5buiaCLbayuzcwGfZFRNRxPvDtUl0XNcQN5',
    id:14,
},   {
	name: 'Classic 44',
	address: 'SCO 415, Sector 44, Chandigarh',
	location: 'Sec 44, Chandigarh',
	category: 'Bakery, Fast Food',
    id:15,
	vote: '4.2',
	cuisines: 'Pizza, Fast Food',
	cost: '200',
	hours: ' 9.30 AM to 9:30 PM (Mon-Sun)',
	image: 'http://img.taste.com.au/vs8Qf1bJ/taste/2016/11/chocolate-lava-cakes-79308-1.jpeg'
},   {
	name: 'Miso Hung',
	address: 'Sector 34, Chandigarh',
	location: 'Sec 34,Chandigarh',
	category: 'Rolls, Fast Food',
	vote: '4.1',
	cuisines: 'Pizza, Fast Food',
	cost: '300',
    id:16,
	hours: ' 1 PM to 10:30 PM (Mon-Sun)',
	image: 'http://i2.cdn.cnn.com/cnnnext/dam/assets/150203151301-chinese-food-lanzhou-hand-pulled-noodles-exlarge-169.jpg'
},   {
	name: 'KhokhAs',
	address: 'SCO 11, Madhya Marg, Sector 26, Chandigarh',
	location: 'Sec 28,Chandigarh',
	category: 'Kiosk-Fast Food,Tea',
	vote: '4.2',
	cuisines: 'Pizza, Fast Food',
	cost: '900',
    id:17,
	hours: ' 11 AM to 10:30 PM (Mon-Sun)',
	image: 'http://www.gfcookingclub.com/wp-content/uploads/2013/10/1-f2966272.jpg'
},   {
	name: 'Rustic Door',
	address: 'SCO 10,Sector 10, Chandigarh',
	location: 'Sec 10,Chandigarh',
	category: 'Italian, North Indian',
	vote: '3.9',
	cuisines: 'Italian, North Indian',
	cost: '1500',
	hours: ' 11:30 AM to 10:30 PM (Mon-Sun)',
    id:18,
	image: 'http://creamcentre.com/files/9713/6057/0350/paneer_ka_baap_cc.jpg'
},   {
	name: 'Fry High',
	address: 'Sector 18, Chandigarh',
	location: 'Sec 18,Chandigarh',
	category: 'QuickBites-Fast Food',
	vote: '3.5',
	cuisines: 'QuickBites-Fast Food',
	cost: '1500',
    id:19,
	hours: ' 11 AM to 11:30 PM (Mon-Sun)',
	image: 'http://www.vegrecipesofindia.com/wp-content/uploads/2015/02/veg-manchurian-dry-recipe-4.jpg'
},   {
	name: 'Castle Grill',
	address: 'Sector 37, Chandigarh',
	location: 'Sec 37,Chandigarh',
	category: 'Burger, Fast Food',
	vote: '4.0',
	cuisines: 'Burger, Fast Food',
	cost: '900',
    id:20,
	hours: ' 11 AM to 10:30 PM (Mon-Sun)',
	image: 'http://www.yummytummyaarthi.com/wp-content/uploads/2014/08/1-86.jpg'
},   {
	name: 'Dumpl Hood',
	address: 'Sector 42, Chandigarh',
	location: 'Sec 42,Chandigarh',
	category: 'Chinese, Fast Food',
	vote: '4.1',
	cuisines: 'Pizza, Fast Food',
	cost: '400',
    id:21,
	hours: 'http://www.aajkikhabar.com/en/wp-content/uploads/2017/05/Noodles2.jpg'
},
  ]

	$scope.restaurant = restaurants[$routeParams.id - 1];
	$scope.getIngredients = function(url) {
// Do something
	//console.log("dcgjsgdyucg");
	var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
					$http({
						'method': 'POST',
						'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
						'headers': {
                         'Authorization': 'Key bfea716b00854fec9e458e24e373e892',
							'Content-Type': 'application/json'
						},
						'data': data,

					}).then(function (response) {
								var ingredients = response.data.outputs[0].data.concepts;
                        $scope.ingredients = [];
					  			console.log(response);
                        var list = '';
                        var protien = ["eggs", "almonds", "oats", "cheese", "yogurt", "milk", "brocolli", "tuna", " quinoa", "Lean Beef",];
                        var fat = ["Avocados", "Avocados", "Dark Chocolate", "Dark Chocolate", "Dark Chocolate", "Nuts", "Chia Seeds",];
                        var carb = ["Oatmeal", "Yams", "Brown rice", "Brown rice", "Quinoa", "Quinoa", "Pumpkin", "Pumpkin"];
						for (var i =0;i < ingredients.length;i++) {
           $scope.ingredients.push(ingredients[i].name);

										}

										for(var i=0;i< protien.length;i++){
											// CHECK FOR THE PROTEIN ROR CARB OR FAT RICH FOOD
											//console.log($scope.protein);
     if ($scope.ingredients.indexOf(protien[i]) > -1) {
												var info = "<p>Protien Rich</p>";
												console.log("run");
													$(".value2 .bestDish").append(info);
													$(".highlight-info").css("background-color" ,"green");
													break;
												 }

            else if($scope.ingredients.indexOf(fat[i]) > -1){
										 	var info2 = "<p class='highlight-info'>Fat Rich</p>";
												console.log('fat rich');
												$(".value2 .bestDish").append(info2);
												$(".highlight-info").css("background-color" ,"yellow");
												break;
											}

				else if($scope.ingredients.indexOf(carb[i]) > -1){
	 										 	var info3 = "<p class='highlight-info'>Carbohydrate Rich</p>";
	 												console.log('carb rich');
	 												$(".value2 .bestDish").append(info3);
	 												$(".highlight-info").css("background-color" ,"blue");
	 												break;
	 											}

												else {
													 	var info4 = "<h1 class='highlight-info'>Not a nutrient rich food</h1>";
														$(".value2 .bestDish").append(info3);
														$(".highlight-info").css("background-color" ,"blue");
												}



										}





										//console.log(ingredients.length);
						//console.log(list);
					}, function (xhr) {
												   console.log(xhr);
												  });


}


})