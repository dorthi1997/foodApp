 $('.loginbuttonn').on('click', function() {
      $('.welcome_screen').addClass('hidden'); 
     $('.signin').removeClass('hidden');
 });
 $('.front .btn').on('click', function() {
     $('.signin').addClass('hidden');
     $('.main').removeClass('hidden');
 });
$('.shi .order').on('click', function() {
     $('.main').addClass('hidden');
     $('.ord').removeClass('hidden');
 });


var foodieApp = angular.module('foodieApp',[]);
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
	image: 'https://23209-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2016/12/Cheesy-Pizza-BreadIMG_3743.jpg'
},   {
	name: 'Sam Pizza',
	address: 'SCO 11, Madhya Marg, Sector 26, Chandigarh',
	location: 'Sec 28,Chandigarh',
	category: 'Pizza, Fast Food',
	vote: '4.2',
	cuisines: 'Pizza, Fast Food',
	cost: '900',
	hours: ' 11 AM to 10:30 PM (Mon-Sun)',
	image: 'https://23209-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2016/12/Cheesy-Pizza-BreadIMG_3743.jpg'
},   {
	name: 'Sam Pizza',
	address: 'SCO 11, Madhya Marg, Sector 26, Chandigarh',
	location: 'Sec 28,Chandigarh',
	category: 'Pizza, Fast Food',
	vote: '4.2',
	cuisines: 'Pizza, Fast Food',
	cost: '900',
	hours: ' 11 AM to 10:30 PM (Mon-Sun)',
	image: 'https://23209-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2016/12/Cheesy-Pizza-BreadIMG_3743.jpg'
},   {
	name: 'Sam Pizza',
	address: 'SCO 11, Madhya Marg, Sector 26, Chandigarh',
	location: 'Sec 28,Chandigarh',
	category: 'Pizza, Fast Food',
	vote: '4.2',
	cuisines: 'Pizza, Fast Food',
	cost: '900',
	hours: ' 11 AM to 10:30 PM (Mon-Sun)',
	image: 'https://23209-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2016/12/Cheesy-Pizza-BreadIMG_3743.jpg'
},   {
	name: 'Sam Pizza',
	address: 'SCO 11, Madhya Marg, Sector 26, Chandigarh',
	location: 'Sec 28,Chandigarh',
	category: 'Pizza, Fast Food',
	vote: '4.2',
	cuisines: 'Pizza, Fast Food',
	cost: '900',
	hours: ' 11 AM to 10:30 PM (Mon-Sun)',
	image: 'https://23209-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2016/12/Cheesy-Pizza-BreadIMG_3743.jpg'
},   {
	name: 'Sam Pizza',
	address: 'SCO 11, Madhya Marg, Sector 26, Chandigarh',
	location: 'Sec 28,Chandigarh',
	category: 'Pizza, Fast Food',
	vote: '4.2',
	cuisines: 'Pizza, Fast Food',
	cost: '900',
	hours: ' 11 AM to 10:30 PM (Mon-Sun)',
	image: 'https://23209-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2016/12/Cheesy-Pizza-BreadIMG_3743.jpg'
},   {
	name: 'Sam Pizza',
	address: 'SCO 11, Madhya Marg, Sector 26, Chandigarh',
	location: 'Sec 28,Chandigarh',
	category: 'Pizza, Fast Food',
	vote: '4.2',
	cuisines: 'Pizza, Fast Food',
	cost: '900',
	hours: ' 11 AM to 10:30 PM (Mon-Sun)',
	image: 'https://23209-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2016/12/Cheesy-Pizza-BreadIMG_3743.jpg'
},   {
	name: 'Sam Pizza',
	address: 'SCO 11, Madhya Marg, Sector 26, Chandigarh',
	location: 'Sec 28,Chandigarh',
	category: 'Pizza, Fast Food',
	vote: '4.2',
	cuisines: 'Pizza, Fast Food',
	cost: '900',
	hours: ' 11 AM to 10:30 PM (Mon-Sun)',
	image: 'https://23209-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2016/12/Cheesy-Pizza-BreadIMG_3743.jpg'
},   {
	name: 'Sam Pizza',
	address: 'SCO 11, Madhya Marg, Sector 26, Chandigarh',
	location: 'Sec 28,Chandigarh',
	category: 'Pizza, Fast Food',
	vote: '4.2',
	cuisines: 'Pizza, Fast Food',
	cost: '900',
	hours: ' 11 AM to 10:30 PM (Mon-Sun)',
	image: 'https://23209-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2016/12/Cheesy-Pizza-BreadIMG_3743.jpg'
},   {
	name: 'Sam Pizza',
	address: 'SCO 11, Madhya Marg, Sector 26, Chandigarh',
	location: 'Sec 28,Chandigarh',
	category: 'Pizza, Fast Food',
	vote: '4.2',
	cuisines: 'Pizza, Fast Food',
	cost: '900',
	hours: ' 11 AM to 10:30 PM (Mon-Sun)',
	image: 'https://23209-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2016/12/Cheesy-Pizza-BreadIMG_3743.jpg'
},   {
	name: 'Sam Pizza',
	address: 'SCO 11, Madhya Marg, Sector 26, Chandigarh',
	location: 'Sec 28,Chandigarh',
	category: 'Pizza, Fast Food',
	vote: '4.2',
	cuisines: 'Pizza, Fast Food',
	cost: '900',
	hours: ' 11 AM to 10:30 PM (Mon-Sun)',
	image: 'https://23209-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2016/12/Cheesy-Pizza-BreadIMG_3743.jpg'
},   {
	name: 'Sam Pizza',
	address: 'SCO 11, Madhya Marg, Sector 26, Chandigarh',
	location: 'Sec 28,Chandigarh',
	category: 'Pizza, Fast Food',
	vote: '4.2',
	cuisines: 'Pizza, Fast Food',
	cost: '900',
	hours: ' 11 AM to 10:30 PM (Mon-Sun)',
	image: 'https://23209-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2016/12/Cheesy-Pizza-BreadIMG_3743.jpg'
},   {
	name: 'Sam Pizza',
	address: 'SCO 11, Madhya Marg, Sector 26, Chandigarh',
	location: 'Sec 28,Chandigarh',
	category: 'Pizza, Fast Food',
	vote: '4.2',
	cuisines: 'Pizza, Fast Food',
	cost: '900',
	hours: ' 11 AM to 10:30 PM (Mon-Sun)',
	image: 'https://23209-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2016/12/Cheesy-Pizza-BreadIMG_3743.jpg'
},   {
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
                         
]
})