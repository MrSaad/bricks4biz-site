var locations = [
	{
		code: "on",
		city: "Sault Ste. Marie",
		person: "Alanna Kresin",
		email: "-",
		phone: "705-779-2351"
	},
	{
		code: "wa",
		city: "Tacoma",
		person: "Tim & Kristi Walker",
		email: "twalker@bricks4biz.com",
		phone: "253-777-3481"
	},
	{
		code: "wa",
		city: "Seattle",
		person: "Melanie Corey-Ferrini",
		email: "mferrini@bricks4biz.com",
		phone: "206-328-5303"
	},
	{
		code: "wa",
		city: "Edmonds – Mukilteo – Everett",
		person: "Lisa Barton",
		email: "lbarton@bricks4biz.com",
		phone: "425-275-6828"
	},
	{
		code: "bc",
		city: "Surrey",
		person: "Harman Sidhu",
		email: "hsidhu@bricks4biz.com",
		phone: "778-822-5665"
	},
	{
		code: "bc",
		city: "Vancouver - Richmond",
		person: "Rachel Tan",
		email: "-",
		phone: "604-250-6665"
	},
	{
		code: "ab",
		city: "Fort Mcmurray",
		person: "David Seggie",
		email: "fortmac@bricks4biz.com",
		phone: "780-881-8074"
	},
	{
		code: "qc",
		city: "Montréal",
		person: "Andrea Arthurs & Audrey Arthurs",
		email: "aarthurs@bricks4biz.com",
		phone: "514-775-5439"
	},
	{
		code: "nl",
		city: "St. John’s",
		person: "Kelly Noseworthy",
		email: "knoseworthy@bricks4biz.com",
		phone: "709-728-4489"
	},
	{
		code: "mn",
		city: "Minnesota",
		person: "Kathy Lahr",
		email: "klahr@bricks4biz.com",
		phone: "320-805-0035"
	},
	{
		code: "mi",
		city: "Ann Arbor – Ypsilanti",
		person: "Eugene Blair",
		email: "eblair@bricks4biz.com",
		phone: "734-748-6039"
	},
	{
		code: "mi",
		city: "Metro Detroit – Huntington Woods – Southfield",
		person: "Tomi Ingram & Pamela Mack",
		email: "wow@bricks4biz.com",
		phone: "248-742-5439"
	},
	{
		code: "il",
		city: "Naperville – Wheaton – Lisle – Plainfield – Aurora",
		person: "Saritha Arellano",
		email: "sarellano@bricks4biz.com",
		phone: "630-364-3950"
	},
	{
		code: "il",
		city: "Elgin",
		person: "Natasha Palmer",
		email: "elgininfo@bricks4biz.com",
		phone: "844-424-5439"
	},
	{
		code: "il",
		city: "Schaumburg, Barrington, Hoffman Estates",
		person: "Myra Onesimus",
		email: "monesimus@bricks4biz.com",
		phone: "847-245-2190"
	},
	{
		code: "oh",
		city: "Cleveland West – Avon – Lakewood",
		person: "Janice Buildt",
		email: "jbuildt@bricks4biz.com",
		phone: "440-892-0900"
	},
	{
		code: "pa",
		city: "West Chester/Downingtown/Exton/Greater Philly",
		person: "Madhu Gurthy",
		email: "mgurthy@bricks4biz.com",
		phone: "484-341-0004"
	},
	{
		code: "pa",
		city: "Southern New Jersey – Greater Philadelphia",
		person: "Karl Goldstein",
		email: "Kgoldstein@bricks4biz.com",
		phone: "856-335-5346"
	},
	{
		code: "pa",
		city: "Erie",
		person: "Kerri Fabin",
		email: "kfabin@bricks4biz.com",
		phone: "814-397-8529"
	},
	{
		code: "ny",
		city: "Baldwinsville – Fayetteville – Manlius",
		person: "Maria and Spencer Moore",
		email: "mmoore@bricks4biz.com",
		phone: "315-632-8592"
	},
	{
		code: "ny",
		city: "Jamaica",
		person: "La’Shon Winstead",
		email: "lwinstead@bricks4biz.com",
		phone: "647-529-7280"
	},
	{
		code: "ny",
		city: "New York – New York",
		person: "Lamacca Holmes",
		email: "lholmes@bricks4biz.com",
		phone: "347-699-3095"
	},
	{
		code: "nj",
		city: "Hudson & Bergen Counties, New York City",
		person: "Della Markferding",
		email: "dmarkferding@bricks4biz.com",
		phone: "201-747-7070"
	},
	{
		code: "nj",
		city: "Southern New Jersey – Greater Philadelphia",
		person: "Karl Goldstein",
		email: "Kgoldstein@bricks4biz.com",
		phone: "856-335-5346"
	},
	{
		code: "ca",
		city: "Sanramon-Livermore",
		person: "Scott Studebaker & Sally Studebaker",
		email: "sstudebaker@bricks4kidz.com",
		phone: "925-766-2448"
	},
	{
		code: "ca",
		city: "San Jose – Campbell",
		person: "Minh Tran",
		email: "mtran@bricks4biz.com",
		phone: "408-750-4697"
	},
	{
		code: "ca",
		city: "Alameda – Bay Farm Island",
		person: "Mitchell Zaninelli and Oona Gilles-Weil",
		email: "mzanielli@bricks4kidz.com",
		phone: "510-337-0401"
	},
	{
		code: "ut",
		city: "West Jordan",
		person: "Julie Adkison & Carolyn Krambule",
		email: "jadkison@bricks4biz.com",
		phone: "N/A"
	},
	{
		code: "co",
		city: "Colorado Springs",
		person: "Sindhu Bankapur",
		email: "sbankapur@bricks4biz.com",
		phone: "404-863-5208"
	},
	{
		code: "co",
		city: "Westminster",
		person: "Ammon Stotts",
		email: "astotts@bricks4biz.com",
		phone: "720-600-9894"
	},
	{
		code: "ky",
		city: "Louisville",
		person: "Sharon Dodson",
		email: "sdodson@bricks4biz.com",
		phone: "502-724-3163"
	},
	{
		code: "ky",
		city: "Lexington – Georgetown",
		person: "Tracy Morris",
		email: "tmorris@bricks4biz.com",
		phone: "859-433-1515"
	},
	{
		code: "md",
		city: "Ellicott City – Columbia",
		person: "Shannon Crider",
		email: "scrider@bricks4biz.com",
		phone: "410-927-5455"
	},
	{
		code: "va",
		city: "Richmond",
		person: "Robin Kocen and Michelle Maistelman",
		email: "rkocen@bricks4biz.com",
		phone: "804-938-3535"
	},
	{
		code: "va",
		city: "Ashburn – Leesburg",
		person: "Robin R. Burke",
		email: "rburke@bricks4biz.com",
		phone: "571-402-4769"
	},
	{
		code: "va",
		city: "Roanoke",
		person: "Shelly Whitaker",
		email: "swhitaker@bricks4biz.com",
		phone: "540-380-2485"
	},
	{
		code: "nm",
		city: "Albuquerque",
		person: "Pat Masters",
		email: "pmasters@bricks4biz.com",
		phone: "505-433-2330"
	},

	{
		code: "tx",
		city: "Ellis County",
		person: "Irene & Joe Chomicki",
		email: "ichomicki@bricks4biz.com",
		phone: "469-383-2538"
	},
	{
		code: "tx",
		city: "Houston – Clear Lake",
		person: "Jennifer Reichardt",
		email: "jreichardt@bricks4kidz.com",
		phone: "281-317-7235"
	},
	{
		code: "tx",
		city: "Frisco, Prosper, & Plano",
		person: "Londa Grierson",
		email: "lgrierson@bricks4biz.com",
		phone: "214-784-0687"
	},
	{
		code: "tx",
		city: "Kingwood – Atascocita",
		person: "Aaron Adams, Jennifer and Chris Coulter",
		email: "kingwood@bricks4biz.com",
		phone: "281-608-7078"
	},
	{
		code: "tx",
		city: "Pearland",
		person: "Otto Rodriguez and Ana Flores",
		email: "aflores@bricks4biz.com",
		phone: "832-232-8048"
	},
	{
		code: "tx",
		city: "The Colony – Carrollton",
		person: "Jennifer Nelson and Rachel Nelson",
		email: "nelsonj@bricks4biz.com",
		phone: "972-261-9032"
	},
	{
		code: "tx",
		city: "Keller – Southlake",
		person: "Gloria Shew",
		email: "gshew@bricks4biz.com",
		phone: "817-791-7519"
	},
	{
		code: "tx",
		city: "Katy – Sugarland",
		person: "Urooj Kamran",
		email: "ukamran@bricks4biz.com",
		phone: "832-289-3957"
	},
	{
		code: "la",
		city: "Northwest Louisiana",
		person: "Eric McFarland",
		email: "emcfarland@bricks4biz.com",
		phone: "318-734-5346"
	},
	{
		code: "la",
		city: "Houma/Thibodaux",
		person: "Robin Carlos Bergeron",
		email: "rbergeron@bricks4biz.com",
		phone: "985-872-2772"
	},
	{
		code: "la",
		city: "Houma/Thibodaux",
		person: "Leslie Lyons Thibodaux",
		email: "lthibodaux@bricks4biz.com",
		phone: "985-872-2772"
	},
	{
		code: "la",
		city: "Houma/Thibodaux",
		person: "Kathy Williams",
		email: "kwilliams@bricks4biz.com",
		phone: "985-872-2772"
	},
	{
		code: "la",
		city: "Lafayette",
		person: "Norlet & Titus Pierre",
		email: "npierre@bricks4biz.com",
		phone: "337-247-4794"
	},
	{
		code: "al",
		city: "Alabama",
		person: "Tommy and Turena Tante",
		email: "ttante@bricks4biz.com",
		phone: "706-530-1646"
	},
	{
		code: "az",
		city: "Arizona",
		person: "Dawn Craig",
		email: "dcraig@bricks4biz.com",
		phone: "602-723-0476"
	},
	{
		code: "tn",
		city: "Knox County – Knoxville",
		person: "Chris Howard",
		email: "choward@bricks4biz.com",
		phone: "865-250-8560"
	},
	{
		code: "nc",
		city: "Eastern Carolina, Greenville and Winterville",
		person: "Bobbie-Jo Grinder",
		email: "bgrinder@bricks4biz.com",
		phone: "252-320-3973"
	},
	{
		code: "nc",
		city: "Director of Franchise Support",
		person: "Alison Vickers",
		email: "avickers@creativelearningcorp.com",
		phone: "904-824-3133 Ext 1"
	},
	{
		code: "ga",
		city: "Columbus – Fortson",
		person: "Tommy and Turena Tante",
		email: "ttante@bricks4biz.com",
		phone: "706-530-1646"
	},
	{
		code: "fl",
		city: "Tampa Bay",
		person: "John Fontana",
		email: "jfontana@bricks4biz.com",
		phone: "813-304-2738"
	},
	{
		code: "fl",
		city: " Polk County",
		person: "Bobby Farris",
		email: "bfarris@bricks4biz.com",
		phone: "201-421-6465"
	},
	{
		code: "fl",
		city: "Orlando-Lake County",
		person: "Tina Burgess",
		email: "tburgess@bricks4biz.com",
		phone: "407-603-5439"
	},
	{
		code: "fl",
		city: "Seminole County",
		person: "Sam Hanna",
		email: "shanna@brick4biz.com",
		phone: "407-620-5782"
	},
	{
		code: "fl",
		city: "Southwest Florida",
		person: "William Budai",
		email: "rbudai@bricks4kidz.com",
		phone: "941-525-3366"
	},
	{
		code: "fl",
		city: "West Kendall – The Hammocks",
		person: "Lina Correa & Miguel Ladron de Guevara",
		email: "lcorrea@bricks4biz.com",
		phone: "N/A"
	},
	{
		code: "hi",
		city: "Oahu",
		person: "Dawn and David Sur",
		email: "dawn@bricks4biz.com",
		phone: "808-255-5522"
	},
	
]

module.exports = locations;
