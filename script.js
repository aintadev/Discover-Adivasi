const fakeRecords = [
    {
        name: "Rajiv 'MemeLord' Sharma",
        description: "A legendary figure in the Mumbai meme underworld, Rajiv Sharma was known for his unparalleled ability to create viral content that would break the internet for days. He started his career as a chaiwala but quickly realized his true calling was memes. His most famous creation, 'Babu Bhaiya's Thug Life', spawned an entire generation of internet thugs. He was last seen negotiating a sponsorship deal with a pan masala company. His memes were so powerful that they once caused a nationwide shortage of garlic chutney when he posted about it.",
        source: "Source: Mumbai Meme Archives, Vol. 3, Page 42",
        age: "28",
        occupation: "Professional Meme Creator",
        notable_achievements: ["Created 10,000+ memes", "Invented the 'Thug Life' glasses trend", "Had his memes featured on TV news 15 times", "Caused a 3-day internet outage in 2019", "Memes viewed over 5 billion times"]
    },
    {
        name: "Priya 'FilterCoffee' Iyer",
        description: "Priya Iyer was not just a coffee connoisseur but a cultural icon who could identify the origin of coffee beans just by smelling them from a mile away. She revolutionized South Indian filter coffee by adding a secret ingredient that she took to her grave. Rumors suggest it was a pinch of cricket passion and a dash of Kollywood drama. She once defeated a barista from Italy in a coffee-making competition using only a traditional brass filter. Her coffee was so strong it could wake up a person in a coma, according to unverified medical reports.",
        source: "Source: Chennai Coffee Chronicles, Edition 7",
        age: "35",
        occupation: "Coffee Alchemist & YouTube Influencer",
        notable_achievements: ["Drank 50 cups of coffee in one day without sleep", "Had her own filter coffee brand 'Kaapi King'", "Appeared on MasterChef India as a coffee judge", "Set world record for fastest coffee brewing", "Her YouTube channel has 5 million subscribers"]
    },
    {
        name: "Vikram 'VadaPav' Patil",
        description: "The undisputed king of Mumbai street food, Vikram Patil could make vada pavs so delicious that people would forget their train schedules. He claimed his secret recipe was passed down from his grandmother who allegedly learned it from a mystical sadhu in the Himalayas. His vada pav stall became so popular that it once caused a traffic jam that lasted 6 hours. Food critics from around the world made pilgrimages to taste his legendary creation. It's said that his vada pav could solve complex mathematical equations if you stared at it long enough.",
        source: "Source: Street Food Legends of India, Chapter 5",
        age: "42",
        occupation: "Vada Pav Visionary",
        notable_achievements: ["Served 1 million+ vada pavs", "Had his stall featured in a Bollywood movie", "Invented the 'Cheese Vada Pav' fusion", "His recipe is guarded by 7 trained peacocks", "Once catered for the Indian cricket team"]
    },
    {
        name: "Anjali 'Rosogolla' Das",
        description: "Anjali Das was a culinary artist whose rosogollas were so soft and spongy that they allegedly floated in mid-air. She won the Great Indian Sweet Championship 7 years in a row before retiring undefeated. Her techniques were so secret that she would prepare the syrup under a cloak of darkness. Rumor has it that her rosogollas once resolved a family dispute that had lasted for three generations. Scientists studied her rosogollas but could never explain why they defied gravity every full moon.",
        source: "Source: Sweet Science Monthly, Issue 12",
        age: "57",
        occupation: "Sweet Scientist & Conflict Resolver",
        notable_achievements: ["Created a 10kg rosogolla for a wedding", "Had her sweets served at the Rashtrapati Bhavan", "Published the controversial book 'Syrup Secrets'", "Her rosogolla recipe is valued at ₹5 crore", "Trained 1000 sweet makers across India"]
    },
    {
        name: "Arjun 'DosaMaster' Reddy",
        description: "Arjun Reddy could flip a dosa with such precision that it would land perfectly on the plate from 10 feet away. He developed 101 varieties of dosa, including the infamous 'Pizza Dosa' that sparked nationwide debate. His restaurant in Bangalore became a tech hub where startup founders would pitch ideas over masala dosas. He once catered a Silicon Valley conference where attendees claimed his dosas contained 'debugging code'. His dosa batter was rumored to have magical properties that could fix buggy software.",
        source: "Source: Silicon Dosa: Tech and Tradition, 2022",
        age: "39",
        occupation: "Dosa Innovator & Startup Guru",
        notable_achievements: ["Set a world record for longest dosa (15 feet)", "Invented the 'Blockchain Dosa' with NFT toppings", "His dosa batter recipe is valued at $1 million", "Featured in Forbes 30 Under 30", "His restaurant has a 6-month waiting list"]
    },
    {
        name: "Deepak 'ChaiWala' Kumar",
        description: "Deepak Kumar didn't just serve tea; he served liquid motivation. His tiny stall in Delhi became the unofficial office for politicians, journalists, and aspiring influencers. He had an uncanny ability to remember every customer's preferred sugar level and life problems. His 'Special Masala Chai' was rumored to have helped students pass exams, couples reconcile, and politicians win elections. He once declined an offer to open a franchise, stating 'Chai is emotion, not business'. His chai was so potent that NASA once considered using it as rocket fuel.",
        source: "Source: Chai Chronicles: Stirring Stories, 2021",
        age: "45",
        occupation: "Philosopher & Tea Maestro",
        notable_achievements: ["Served chai to a Nobel Prize winner", "His chai recipe was sought by 5-star hotels", "Featured in a documentary 'The Cup of Life'", "His stall survived 3 different government regimes", "Could make 100 cups of chai in 10 minutes"]
    },
    {
        name: "Rohit 'Bhelpuri' Gupta",
        description: "Rohit Gupta was a street food visionary who transformed simple bhelpuri into an art form. His secret tamarind chutney was said to have mystical properties that could cure heartbreak. He operated from Juhu Beach for 30 years, serving Bollywood stars and commoners alike. His bhelpuri was so legendary that it inspired a hit song in a 1990s romantic comedy. Rumor has it that his bhelpuri could make you see the future if eaten during a solar eclipse.",
        source: "Source: Bollywood Bites: A Culinary History, 2019",
        age: "52",
        occupation: "Bhelpuri Artist & Life Coach",
        notable_achievements: ["Served bhelpuri to three Prime Ministers", "Invented the 'Diet Bhelpuri' for health-conscious celebrities", "His recipe was featured in an international cooking show", "His stall appeared in 5 Bollywood movies", "Could prepare bhelpuri blindfolded"]
    },
    {
        name: "Sanjay 'Samosa' Singh",
        description: "Sanjay Singh could craft samosas with such perfect triangular symmetry that mathematicians studied them. His samosas were known for their crispiness that could be heard from 100 meters away. He claimed his ancestors learned the art from a Mughal emperor's personal chef. Food historians believe his samosa recipe dates back to the 16th century. His samosas were so perfectly shaped that they were once used as teaching aids in geometry classes.",
        source: "Source: The Great Indian Snack Revolution, 2020",
        age: "48",
        occupation: "Samosa Sculptor & Historian",
        notable_achievements: ["Created a 5kg samosa for a world record", "His samosas were served at an international peace summit", "Developed 25 different samosa fillings", "His samosa folding technique is patented", "Featured on the cover of 'Snack Monthly' magazine"]
    },
    {
        name: "Meera 'Papad' Joshi",
        description: "Meera Joshi was a papad artist who could roll papads so thin you could read newspaper through them. Her papads were known to crackle with such intensity that they could be used as musical instruments. She developed papads in 50 different flavors, including the controversial 'chocolate papad' that divided food critics. Her papad-making sessions were so mesmerizing that people would travel from distant villages just to watch her work.",
        source: "Source: The Papad Papers: A Culinary Journey, 2018",
        age: "61",
        occupation: "Papad Artisan & Flavor Innovator",
        notable_achievements: ["Rolled a papad that was 3 meters in diameter", "Her papads were exported to 15 countries", "Invented the 'glow-in-the-dark papad' for parties", "Had her papad recipe stored in a Swiss bank vault", "Could roll 100 papads in under 30 minutes"]
    },
    {
        name: "Karan 'Biryani' Khan",
        description: "Karan Khan was a biryani maestro whose recipes were said to have been passed down through 7 generations of royal chefs. His biryani was so aromatic that it could be smelled from three villages away. He once cooked a biryani for 5000 people using a single giant handi that required a crane to lift. Food historians believe his biryani contained 101 secret spices, the exact combination of which remains a mystery to this day.",
        source: "Source: Royal Kitchens of India, Volume 2",
        age: "44",
        occupation: "Biryani Specialist & Spice Alchemist",
        notable_achievements: ["Cooked the world's largest biryani", "His biryani recipe is a state secret", "Trained under a 90-year-old master chef", "His biryani cured a king's melancholy", "Developed a zero-calorie biryani for fitness enthusiasts"]
    },
    {
        name: "Neha 'Jalebi' Verma",
        description: "Neha Verma could create jalebis so perfectly coiled that they were used as models for DNA helix structures in biology textbooks. Her jalebis were known for their signature orange hue that glowed in the dark. She developed a jalebi-making robot that could produce 1000 jalebis per hour, but she preferred the traditional method, claiming machines lacked 'soul'. Her jalebis were so famous that they were once served at an international space conference.",
        source: "Source: Sweet Revolution: The Jalebi Chronicles",
        age: "36",
        occupation: "Jalebi Artist & Food Technologist",
        notable_achievements: ["Created a jalebi that stretched for 50 meters", "Her jalebi recipe is studied in culinary schools", "Invented the 'sugar-free jalebi' for diabetics", "Her jalebis were featured in a international food exhibition", "Could make jalebis in the shape of famous monuments"]
    },
    {
        name: "Rahul 'PaniPuri' Desai",
        description: "Rahul Desai was a panipuri wizard who could assemble the perfect puri in under 3 seconds. His tamarind water was so legendary that people claimed it could grant wishes if consumed at midnight during a full moon. He operated a mobile panipuri cart that traveled across the country, with fans tracking its location through a dedicated app. His panipuri was so popular that it once caused a traffic jam that lasted 8 hours in Kolkata.",
        source: "Source: Street Food Diaries: The Pani Puri Phenomenon",
        age: "29",
        occupation: "Pani Puri Specialist & Mobile Food Entrepreneur",
        notable_achievements: ["Served 10,000 panipuris in a single day", "His cart traveled to 20 different states", "Invented the 'cheese burst panipuri' fusion", "His panipuri was served at a royal wedding", "Could make panipuri with his eyes closed"]
    },
    {
        name: "Priyanka 'Lassi' Choudhary",
        description: "Priyanka Choudhary was a lassi virtuoso whose creamy concoctions were said to have medicinal properties. Her special 'kesar lassi' could apparently improve memory and was popular among students during exam season. She developed 30 different lassi flavors, including the controversial 'pizza lassi' that food critics either loved or hated. Her lassi was so thick that spoons would stand upright in it, a quality that became her trademark.",
        source: "Source: The Lassi Legacy: A Dairy Dynasty",
        age: "33",
        occupation: "Lassi Specialist & Dairy Innovator",
        notable_achievements: ["Created the world's largest lassi glass", "Her lassi recipe was featured in an international food magazine", "Invented the 'protein lassi' for gym enthusiasts", "Her lassi stall had a 5-star hygiene rating for 10 years", "Could identify milk quality just by smelling it"]
    },
    {
        name: "Vishal 'CholeBhature' Malhotra",
        description: "Vishal Malhotra was a chole bhature expert whose fluffy bhaturas could apparently float if thrown with enough force. His chole recipe contained 27 different spices that he would grind himself every morning at 4 AM. His restaurant in Delhi became so popular that people would queue from 6 AM, with waiting times often exceeding 3 hours. Food scientists studied his bhatura dough but could never replicate its unique airiness.",
        source: "Source: North Indian Delicacies: The Chole Bhature Story",
        age: "47",
        occupation: "Chole Bhature Master & Restaurant Owner",
        notable_achievements: ["Made the world's largest bhatura", "His restaurant had a Michelin star for 5 years", "Invented the 'mini bhature' for health-conscious customers", "His chole recipe is a family secret guarded by dogs", "Featured on multiple food reality shows"]
    },
    {
        name: "Anita 'PavBhaji' Kulkarni",
        description: "Anita Kulkarni was a pav bhaji artist who could create bhaji so flavorful that it allegedly changed people's personalities for the better. Her special 'butter pav bhaji' contained exactly 100 grams of butter per plate, a measurement she could eyeball with perfect accuracy. She developed a bhaji masala that became so popular that other street vendors would try to steal it regularly. Her pav bhaji was so famous that it was once served on a flight to a group of food critics.",
        source: "Source: Mumbai Street Food: The Pav Bhaji Revolution",
        age: "41",
        occupation: "Pav Bhaji Specialist & Masala Developer",
        notable_achievements: ["Created a pav bhaji that served 1000 people", "Her masala is sold in 15 countries", "Invented the 'chocolate pav bhaji' for adventurous eaters", "Her stall appeared in a Hollywood documentary", "Could make pav bhaji while blindfolded"]
    },
    {
        name: "Raj 'Kulfi' Kapoor",
        description: "Raj Kapoor was a kulfi craftsman whose frozen desserts were known for their creamy texture that never developed ice crystals. His special 'pista kulfi' contained exactly 100 pistachios per serving, each hand-counted by his team of 10 assistants. He developed a kulfi that wouldn't melt for 6 hours, a scientific marvel that baffled food technologists. His kulfi was so popular that it was once served at an international climate conference to demonstrate its unique properties.",
        source: "Source: Frozen Delights: The Kulfi Chronicles",
        age: "55",
        occupation: "Kulfi Artisan & Temperature Scientist",
        notable_achievements: ["Created a kulfi that weighed 50 kg", "His kulfi recipe is studied in food science courses", "Invented the 'spicy kulfi' that became a cult favorite", "His kulfi was served at a royal banquet", "Could identify milk fat content just by tasting it"]
    },
    {
        name: "Sunita 'Dhokla' Patel",
        description: "Sunita Patel was a dhokla expert whose steamed cakes were so light and fluffy that they allegedly defied gravity if not eaten quickly. Her secret fermentation technique produced dhoklas with exactly 1000 air pockets per square inch, a consistency that food scientists could not replicate. She developed 15 different types of dhokla, including the innovative 'chocolate dhokla' that divided food critics. Her dhokla was so famous that it was once served at the United Nations food festival.",
        source: "Source: Gujarati Gastronomy: The Dhokla Diaries",
        age: "50",
        occupation: "Dhokla Specialist & Fermentation Expert",
        notable_achievements: ["Created the world's largest dhokla", "Her dhokla recipe is a state treasure", "Invented the 'instant dhokla' for busy households", "Her dhokla was featured in an international food exhibition", "Could ferment batter perfectly just by listening to it"]
    },
    {
        name: "Amit 'Rasgulla' Das",
        description: "Amit Das was a rasgulla artist whose spongy sweets were so perfectly round that they were used as models for perfect spheres in geometry classes. His rasgullas would melt in the mouth with a single gentle press, a quality that became his signature. He developed a rasgulla that contained a liquid center, a technique that other sweet makers tried to copy without success. His rasgullas were so famous that they were once served at a Nobel Prize ceremony dinner.",
        source: "Source: The Sweet Science: Rasgulla Revelations",
        age: "46",
        occupation: "Rasgulla Specialist & Sweet Scientist",
        notable_achievements: ["Created a rasgulla that weighed 2 kg", "His rasgulla recipe is protected by patent", "Invented the 'color-changing rasgulla' for parties", "His sweets were exported to 20 countries", "Could identify sugar syrup concentration just by smelling it"]
    },
    {
        name: "Pooja 'MasalaDosa' Reddy",
        description: "Pooja Reddy was a masala dosa innovator who could spread batter so thin that you could see through it like glass. Her potato masala filling contained exactly 13 spices that she would grind fresh every morning. She developed a dosa that could be folded into origami shapes, a skill that made her famous on social media. Her dosa was so crispy that it could be heard from the next street, a quality that regular customers would wait for.",
        source: "Source: South Indian Sensations: The Dosa Dynasty",
        age: "32",
        occupation: "Dosa Artist & Social Media Influencer",
        notable_achievements: ["Created a dosa that was 10 feet long", "Her dosa folding technique went viral", "Invented the 'rainbow dosa' with natural colors", "Her dosa restaurant had a 4-month waiting list", "Could spread dosa batter with both hands simultaneously"]
    },
    {
        name: "Ravi 'Chaat' Bansal",
        description: "Ravi Bansal was a chaat king whose street food creations were so complex that they allegedly contained all six tastes recognized by Ayurveda. His special 'papdi chaat' contained 20 different ingredients that he would assemble in under 30 seconds. He developed a chaat that changed flavor as you ate it, starting sweet and ending spicy. His chaat was so popular that food critics would visit his stall incognito to avoid causing a stampede.",
        source: "Source: Street Food Supreme: The Chaat Chronicles",
        age: "38",
        occupation: "Chaat Specialist & Flavor Architect",
        notable_achievements: ["Created a chaat that served 500 people", "His chaat recipe is studied in culinary schools", "Invented the 'molecular chaat' using modern techniques", "His stall appeared in an international food documentary", "Could assemble chaat while reciting poetry backwards"]
    }
];

let familyTree = JSON.parse(localStorage.getItem('discoverAdivasiFamilyTree')) || [];

const familyForm = document.getElementById('family-form');
const familyTreeContainer = document.getElementById('family-tree');
const saveBtn = document.getElementById('save-btn');
const resetBtn = document.getElementById('reset-btn');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const resultContainer = document.getElementById('result-container');
const resultTitle = document.getElementById('result-title');
const resultDetails = document.getElementById('result-details');
const resu