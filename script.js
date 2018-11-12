var infoWindow;
// Initialize and add the map
function initMap() {
  // location of initial focus of map (PARIS)
  var focus = {lat: 48.8566, lng: 2.3522};

  //new map object
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 2.8, center: focus});
    
  

// adding markers to various locations
 function addMarker(properties){
	var marker = new google.maps.Marker({
  	position: properties.coordinates, 
  	map: map,
  });
	//check if content is present
	if (properties.words){
		infoWindow = new google.maps.InfoWindow({
  		content: properties.words
  	  }); 

		//listener for the click
	    marker.addListener('click', function(){
           if (infoWindow){
                infoWindow.close()
           }
  	    infoWindow.open(map,marker); 
      }); 
	}
 }

//array of markers 
//MAKE SURE YOU ADD COMMAS
var markers = [
	{	//SF
		coordinates:{lat: 37.7749, lng: -122.4194}, 
 		words: "When the Spanish settled in San Francisco, it was originally named Yerba Buena or 'Good Herb'"
	},
	{	//Paris
		coordinates: {lat: 48.8566, lng: 2.3522},
 		words: "There is only one stop sign in the entire city of Paris"
	},
	{	//Rome
		coordinates: {lat: 41.9028, lng: 12.4964}, 
 		words: "Museo Della Pasta Alimentare is the Museum of Pasta in Rome" 
	},
	{	//Philly
		coordinates: {lat:39.9526 , lng: -75.1652},
		words: "In Philadelphia's Mutter Museum, one can find sections of Einstein's brain"
	},
	{	//Chicago
		coordinates: {lat:41.8781, lng:-87.6298},
		words: "The zipper, Twinkie, spray-paint, vacuum cleaner, and the Ferris wheel were all invented in Chicago"
	},
	{	//Boston
		coordinates: {lat:42.3601 , lng: -71.0589},
		words:"Boston's baseball team (the Red Socks) have a patented color called Fenway Green"
	},
	{	//Longview, Washington
		coordinates: {lat:46.1382, lng:-122.9382},
		words: "In Longview, there is a treetop bridge that helps squirrels cross the street"
	},
	{	//Las Vegas
		coordinates: {lat: 36.1699, lng: -115.1398},
		words: "Las Vegas is the brightest place on Earth when looked at from outer space"
	},
	{	//Washington D.C.
		coordinates: {lat: 38.9072, lng: -77.0369},
		words: "There is a Darth Vader gargoyle on the National Cathedral in Washington D.C."
	},
	{	//Empire State Building in New York City
		coordinates: {lat:40.7484, lng:-73.9857},
		words: "The Empire State Building in New York has its own zip code: 10118"
	},
	{	//Rockport, Massachusetts
		coordinates: {lat: 42.6557, lng:-70.6204},
		words: "There is a house in Rockport that was built in 1922 entirely out of newspapers"
	},
	{	//Great Wall of China
		coordinates: {lat:40.4319, lng:116.5704},
		words: "Sticky rice flour was used to make the binding material for the Great Wall to stick bricks together"
	},
	{	//Tower of Pisa
		coordinates: {lat: 43.7230, lng: 10.3966}, 
		words: "The Tower of Pisa leans because it was built on soft subsoil which could not support its weight"
	},
	{	//Guam
		coordinates: {lat: 13.4443, lng: 144.7937},
		words: "Many roads in Guam are made of coral and oil because they do not have a supply of natural sand"
	},
	{	//Kiribati
		coordinates: {lat: -3.3704, lng: -168.7340},
		words:"Kiribati is the only country to be in all 4 hemispheres"
	},
	{	//North Korea
		coordinates: {lat: 40.3399, lng: 127.5101},
		words: "Red Star OS is the offical and only operating system used in North Korea"
	},
	{	//Niue
		coordinates: {lat: -19.0544, lng: -169.8672},
		words: "Niue is the only 'wifi nation' providing free wifi for all citizens"
	},
	{	//Bhutan
		coordinates: {lat: 27.5142, lng: 90.4336},
		words: "Bhutan is the only country to measure Gross National Happiness instead of GDP"
	},
	{	//Greenland
		coordinates: {lat: 71.7069, lng: -42.6043},
		words: "Weather conditons make it so that there isn't a patch of green grass in Greenland"
	},
	{	//Amsterdam
		coordinates: {lat: 52.3702, lng: 4.8952},
		words: "There are more bikes than people in Amsterdam"
	}, 
	{	//Rodney, Ontario
		coordinates: {lat: 42.5678, lng: -81.6821},
		words: "The world's smallest jail is in Rodney, Ontario"
	},
	{	//Quebec
		coordinates: {lat: 46.8139, lng: -71.2080},
		words: "Quebec manufactures more than 77% of the world's maple syrup"
	},
	{	//Lake Okanagan
		coordinates: {lat: 49.8339, lng:-119.5236},
		words: "A mythical monster named Ogopogo supposedly lives in Lake Okanagan"
	},
	{	//Fairbanks, Alaska
		coordinates: {lat: 64.8378, lng: -147.7164},
		words: "Collisions of electrons release photons that create the beautiful Aurora Borealis in Fairbanks"
	},
	{	//Canada
		coordinates: {lat:56.1304, lng:-106.3468},
		words: "Canadians consume the most mac and cheese in the world"
	},
	{	//Falkland Islands
		coordinates: {lat: -51.7963, lng: -59.5236},
		words: "Falkland Islands have 350 sheep for every person"
	},
	{	//Egypt
		coordinates:{lat: 26.8206, lng:30.8025},
		words: "Egypt was the first sovereign state, with its first dynasty in 3100 BC"
	}, 
	{	//Mongolia
		coordinates: {lat:46.8625, lng:103.8467},
		words: "Mongolia is the least populated country in the world with 4 people per square mile!"
	},
	{	//Libya
		coordinates: {lat: 26.3351, lng: 17.2283},
		words: "99% of Libya is desert land, covered all with sand"
	},
	{	//Algeria
		coordinates: {lat:28.0339, lng:1.6596},
		words: "Couscous is the national dish of Algeria"
	},
	{	//Ethiopia
		coordinates: {lat:9.1450, lng: 40.4897},
		words: "A shepherd discovered coffee in Ethiopia when his goats ate coffee leaves and became restless."
	},
	{	//Senegal
		coordinates: {lat:14.8388, lng:-17.2341},
		words: "The Lac Rose in Senegal is pink because of Dunaliella Salina Bacteria which is attracted to the lake's salt"
	},
	{	//Cape Town
		coordinates: {lat:-33.9249, lng:18.4241},
		words:"The first ever heart transplant was conducted in Cape Town"
	},
	{	//Kalahari Desert
		coordinates: {lat:-25.5920,lng: 21.0937},
		words: "It is said that you can hear your own blood flow in the Kalahari Desert"
	},
	{	//Great Sphinx of Giza
		coordinates: {lat: 29.9753, lng: 31.1376},
		words: "The ancient Egyptians worshiped cats to the higest level which explains the Great Sphinx of Giza"
	},
	{	//Lake Nakuru, Kenya
		coordinates: {lat:-0.3562, lng:36.1002},
		words: "Lake Nakuru in Kenya is home to over 1 million flamingos"
	},
	{	//Lake Malawi
		coordinates: {lat:-14.0647, lng:34.8845},
		words: "With over 1,300 species, Lake Malawi has has more tropical fish than any lake in the world"
	},
	{	//Cote d'Ivoire
		coordinates: {lat:7.5400, lng: -5.5471},
		words: "Cote d'Ivoire is the largest producer of Cocoa in the world"
	},
	{	//Sahara Desert
		coordinates: {lat: 23.4162, lng: 25.6628},
		words: "Although the Sahara Desert is not the dryest place on Earth, it once used to be a lush region"
	},
	{	//Morocco
		coordinates: {lat:31.7917 , lng:-7.0926},
		words: "Moroccan weekends are Thursday and Friday"
	},
	{	//Niger
		coordinates: {lat: 17.6078, lng:8.0817},
		words: "Niger is so hot that is is know as 'Frying Pan of the World'"
	},
	{	//Naples
		coordinates: {lat:40.8518, lng:14.2681},
		words:"Italians do not drink coffee after 11 AM"
	},
	{	//Barcelona
		coordinates: {lat:41.3851, lng: 2.1734},
		words: "The Sagrada Familia church has been under construction longer than the pyramids of Egypt"
	},
	{	//Iceland
		coordinates: {lat:64.9631, lng:-19.0208},
		words: "Iceland has absolutely no mosquitoes"
	},
	{	//Austria
		coordinates: {lat: 47.5162, lng:14.5501},
		words: "Croissants were actually invented in Austria"
	},
	{	//Lanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch
		coordinates: {lat:53.2246, lng:-4.1980},
		words: "This place is called Lanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch"  
	},
	{	//Switzerland
		coordinates: {lat:46.8182, lng: 8.2275},
		words: "In Switzerland it is illegal to flush a toilet after 10pm?"
	},
	{
		coordinates: {lat:45.7640, lng:4.8357},
		words: "In France, it is illegal to call a pig 'Napolean'"
	},
	{	//Finland
		coordinates: {lat:61.9241,lng:25.7482},
		words: "Finland hosts an centuries-old annual wife-carrying contest"
	},
	{	//Belgium
		coordinates: {lat:50.5039,lng:4.4699},
		words: "Belgium went 589 days without a government in 2010-2011 "
	},
	{	//Greece
		coordinates: {lat: 39.0742, lng:21.8243},
		words: "The Greek alphabet was the first to use vowels"
	},
	{	//Poland
		coordinates: {lat:51.9194,lng:19.1451},
		words: "Many Poles enjoy mushroom picking in the summertime"
	},
	{	//Klevan
		coordinates: {lat:50.7445,lng:26.0172},
		words: "The Tunnel of Love in Klevan is a 4km railway surrounded by beautiful green arches"
	},
	{	//Portugal
		coordinates: {lat:39.3999, lng:-8.2245},
		words:"Portugal is the largest cork producer in the world"
	},
	{	//Brazil
		coordinates: {lat:-14.2350, lng:-51.9253},
		words: "The Gold Frog of Brazil is 0.39 inches!"
	},
	{	//Brazil Prison
		coordinates: {lat:-19, lng:-43},
		words: "To reduce thier sentence, prisioners in Risvaldo de Campos Pires can knit for designer Raquel Guimaraes"
	},
	{	//Atacama desert 
		coordinates: {lat:-23.8634, lng:-69.1328},
		words: "The Atacama desert is considered the driest place on Earth"
	},
	{	//Peru
		coordinates: {lat:-9.1900, lng:-75.0152},
		words: "There are over 3,000 different varieties of Potato grown in Peru"
	},
	{	//Rainbow Mountain in Peru
		coordinates: {lat:-13, lng: -71},
		words: "There is a secret 'Rainbow Mountain' with streaks of various beautiful colors"
	},
	{	//Paracas in Peru
		coordinates: {lat:-13.8409,lng:-76.2508},
		words: "You can see penguins on the beach in Paracas"
	},
	{	//Mount Chimborazo
		coordinates: {lat:-1.4693, lng:-78.8169},
		words: "Mount Chimborazo is the closet point to space due to Earth's imperfect spherical shape"
	},
	{	//Colombia
		coordinates: {lat:4.624335, lng:-74.063644},
		words: "Colombians have a special type of cheese they put into hot chocolate"
	},
	{	//Venezuela
		coordinates: {lat:6.4238, lng:-66.5897},
		words: "Its tradition on Christmas to roller skate to church with your family"
	},
	{	//Bolivia
		coordinates: {lat:-16.4897, lng:-68.1193},
		words: "People in zebra costumes help pedestrians cross the street and direct road safety in La Paz"
	},
	{	//Paraguay
		coordinates: {lat:-23.4425, lng:-58.4438},
		words: "There are no doorbells in Paraguay, rather people clap their hands"
	},
	{	//Uraguay
		coordinates: {lat:-32.5228, lng:-55.7658},
		words:"Cows outnumber people in Uruguay by about 4 to 1"
	},
	{	//Buenos Aires, Argentina
		coordinates: {lat:-34.6037, lng:-58.3816},
		words: "The tango orginated in Buenos Aires"
	},
	{	//Neuquen
		coordinates: {lat:-38.9517, lng:-68.0592},
		words: "The earliest plants to grow on land were discovered in Argentina"
	},
	{	//Cameroon
		coordinates: {lat:7.3697, lng:12.3547},
		words: "The world's largest frog--Goliath frog-- can be found in Cameroon"
	},
	{	//Hong Kong
		coordinates: {lat:22.3964, lng:114.1095},
		words: "Hong Kong means 'Fragrant Harbor'"
	},
	{	//South Korea
		coordinates: {lat:35.9078, lng:127.7669},
		words: "South Korea has a seperate Valentine's Day for singles on April 14th"
	},
	{	//Indonesia
		coordinates:{lat:0.7893, lng:113.9213},
		words: "The world's largest flower--The Rafflesia-- can be found on the forest floors of Indonesia"
	},
	{	//China
		coordinates: {lat:35.5431, lng:106.6651},
		words: "One can find vendors selling cans of fresh air in China"
	},
	{	//Vietnam
		coordinates: {lat:14.0583, lng:108.2772},
		words: "Everyone has the same birthday in Vietnam, celebrated on New Years Day"
	},
	{	//India
		coordinates: {lat:21.1458, lng:79.0882},
		words:"India is the world's leading producer of Mangoes"
	},
	{	//Afghanistan
		coordinates: {lat:33.9391, lng:67.7100},
		words:"Afghanistan's national sport is Buzkashi-- where you ride on horeseback getting goats into a goal"
	},
	{	//Bhutan
		coordinates: {lat:28.0636, lng:89.6828},
		words:"Bhutan has banned sale of tobacco"
	},
	{	//Solapur
		coordinates: {lat:17.6599, lng:75.9064},
		words:"Babies are dropped from a 30ft building for good luck in Solapur, India"
	},
	{	//Dead Sea
		coordinates: {lat:31.5590, lng:35.4732},
		words:"The lowest point on Earth is the Dead Sea"
	},
	{	//Monaco
		coordinates: {lat:43.7384, lng:7.4246},
		words: "Monaco has the world's oldest population"
	},
	{	//Kazahstan
		coordinates: {lat:48.0196, lng:66.9237},
		words:"Apples are said to have originated from Kazahstan"
	},
	{	//Iran
		coordinates: {lat:32.4279, lng:53.6880},
		words:"You can find garlic scented shampoo in Iran along with carrot, and olive scents"
	},
	{	//Iraq
		coordinates: {lat:33.2232, lng:43.6793},
		words: "Karate films are banned in Iraq since 1979"
	},
	{	//Saudi Arabia
		coordinates: {lat:23.8859, lng:45.0792},
		words: "About 100 camels are traded everyday in Saudi Arabia"
	},
	{	//Yemen
		coordinates: {lat:15.5527, lng:48.5164},
		words: "An average wedding lasts 21 days in Yemen"
	},
	{	//Patara, Turkey
		coordinates:{lat:36.2754, lng:29.2844},
		words: "Santa Claus was born in Patara, Turkey"
	},
	{	//Turkmenistan
		coordinates: {lat:38.9697, lng:59.5563},
		words: "Gas and electricity are free in Turkmenistan"
	},
	{	//Instanbul
		coordinates: {lat:41.0082, lng:28.9784},
		words: "Instanbul is the only city to straddle two continents"
	},
	{	//Russia
		coordinates: {lat:61.5240, lng:105.3188},
		words:"There was a 'Beard Tax' for anyone with a beard in Russia during the reign of Peter the Great"
	},
	{	//Cuexcomate volcano
		coordinates: {lat:19.0706, lng:-98.2353},
		words:"The world's smallest volcano is Cuexcomate volcano in Mexico"
	},
	{	//Cuba
		coordinates: {lat: 21.5218, lng:-77.7812},
		words:"The only cars that Cuban citizens can own legally are cars created and bought before 1959"
	},
	{	//Australia
		coordinates: {lat:-25.2744, lng:133.7751},
		words: "Wombat poop is shaped like a cube"
	},
	{	//Queensland, Australia
		coordinates: {lat:-20.9176, lng:142.7028},
		words: "Those from Queensland are nicknamed Banana Benders"
	},
	{	//Antarctica 
		coordinates: {lat:-70.8628,lng:100.0000},
		words: "Antarctica is the coldest, windiest, highest and driest continent on Earth"
	},
	{	//Japan
		coordinates: {lat:36.2048, lng:138.2529},
		words: "In Japan you can hire a handsome man to watch sappy movies with you"
	},
	{	//China
		coordinates:{lat:37.5731, lng:89.3796},
		words: "Any TV shows and films featuring time travel are censored in China"
	},
	{	//Niue
		coordinates: {lat:-19.0544, lng:-169.8672},
		words: "Niue's currency features Disney, Star Wars, and Pokemon characters"
	},
	{	//Malaysia
		coordinates: {lat:4.2105, lng:101.9758},
		words: "Authorities prohibited Malaysians from wearing yellow clothing"
	},
	{	//Singapore
		coordinates: {lat:1.3521, lng:103.8198},
		words: "Selling, importing or spitting out chewing gum is illegal in Singapore"
	},
	{	//Nelson’s Blue Lake
		coordinates: {lat:-41.2706, lng:173.2840},
		words: "the clearest lake in the world is Nelson's Blue Lake"
	},
	{	//Denmark
		coordinates: {lat:56.2639, lng:9.5018},
		words: "Denmark has twice the number of bicycles as cars"
	},
	{	//Australia
		coordinates: {lat:-30.7490, lng:121.4660},
		words: "Australia has approximately 23 million people and around 60 million kangaroos"
	},
	{	//Canada
		coordinates: {lat:51.2538, lng:-85.3232},
		words: "Canada has the most lakes of any other country in the world"
	}

]

//looping through the array of markers 
	for (var i=0; i<markers.length; i++){
		//adding markers onto the map
		addMarker(markers[i]); 
	}	
}
