import Bot from "../models/bot.model.js";
import User from "../models/user.model.js";

export const Message=async(req,res)=>{
   try {
    const {text}=req.body;
 console.log(text)
    if(!text?.trim()){
        return res.status(400).json({error:"Text cannot be empty"});
    }

    const user=await User.create({
        sender:"user",
        text
    })

    // Data
    const botResponses={
  
  "what can you do": "I can chat with you, answer questions, and keep you company.",
"i am doing good": "That’s great to hear 😊 Keep smiling and keep growing 🚀",

  "what is python": "Python is a beginner-friendly programming language 🐍 used for AI, web apps, automation, and more.",

  "what is java": "Java is a powerful programming language ☕ used in apps, websites, and Android development.",

  "what is c language": "C is one of the oldest and fastest programming languages 💻",

  "what is c++": "C++ is used for game development, software, and high-performance applications 🚀",

  "what is github": "GitHub is a platform where developers store and manage their code 🌐",

  "what is git": "Git is a version control system used to track code changes 📂",

  "what is api": "API helps different applications communicate with each other 🔗",

  "what is database": "A database stores and manages application data 📦",

  "what is bug": "A bug is an error in code that causes problems 🐞",

  "what is debugging": "Debugging means finding and fixing errors in code 🔧",

  "what is coding": "Coding is the process of creating instructions for computers 💻",

  "can you help in coding": "Absolutely 🚀 Tell me your coding problem and I’ll help you solve it.",

  "why coding is important": "Coding powers websites, apps, games, AI, and modern technology 🌐",

  "how to become developer": "Practice daily, build projects, and never stop learning 💡",

  "best language for web development": "JavaScript is one of the best languages for web development ⚡",

  "how to learn programming": "Start small, practice consistently, and build real projects 💻",

  "what is software": "Software is a program that tells computers what to do 🖥️",

  "what is hardware": "Hardware means the physical parts of a computer 🛠️",

  "what is internet": "The internet connects millions of devices worldwide 🌍",

  "what is ai chatbot": "An AI chatbot can understand and reply to human messages 🤖",

  "what is machine learning": "Machine Learning allows computers to learn from data 📚",

  "tell me about nature": "Nature is the most beautiful creation on Earth 🌿",

  "why trees are important": "Trees give us oxygen, shade, and life 🌳",

  "do you like rain": "Rain feels peaceful and refreshing 🌧️",

  "tell me something about sky": "The sky reminds us that there are no limits ☁️",

  "why nature is beautiful": "Nature brings peace, balance, and happiness 🌸",

  "tell me about mountains": "Mountains teach us strength, patience, and courage ⛰️",

  "do you like sunrise": "Sunrise feels like a fresh beginning every day 🌅",

  "do you like sunset": "Sunsets are proof that endings can be beautiful too 🌇",

  "what is life lesson": "Every challenge in life teaches something valuable 💡",

  "tell me motivational quote": "🌟 Success starts with self-belief and daily effort.",

  "what is real happiness": "Real happiness comes from peace, love, and meaningful moments ❤️",

  "why people fail": "People fail when they stop trying — learning never truly fails 🚀",

  "what is true friendship": "True friendship means staying together in both good and bad times 🤝",

  "what is love": "Love is care, trust, and understanding ❤️",

  "what is dream": "Dreams are goals waiting to become reality ✨",

  "how to stay positive": "Focus on growth, gratitude, and small victories every day 🌈",

  "why hard work matters": "Hard work turns dreams into achievements 💪",

  "what is confidence": "Confidence means believing in yourself even during tough times 🔥",

  "tell me deep line": "🌌 Sometimes silence teaches more than words.",

  "tell me emotional line": "💙 The strongest people are often the kindest.",

  "tell me reality of life": "Life is not perfect, but every moment teaches something important 🌍",

  "what is success in life": "Success is becoming better than yesterday 🌟",

  "tell me positive thought": "☀️ Every new day is another chance to improve yourself.",

  "what is peace": "Peace begins when overthinking ends 🌿",

  "tell me something inspiring": "🚀 Small daily improvements create extraordinary results.",

  "why should i never give up": "Because your future can change with one more attempt 💪",

  "what makes life beautiful": "Love, memories, nature, and meaningful connections make life beautiful 🌸",

  "tell me wisdom": "📖 Knowledge gives power, but wisdom gives direction.",

  "how to become successful": "Stay disciplined, keep learning, and trust the process 🔥",
  
  "tell me about india": "India is known for its culture, diversity, history, and delicious food 🇮🇳",

  "tell me about japan": "Japan is famous for technology, anime, discipline, and beautiful cherry blossoms 🌸",

  "tell me about usa": "The USA is known for innovation, Hollywood, and modern technology 🇺🇸",

  "tell me about dubai": "Dubai is famous for luxury, skyscrapers, and futuristic architecture 🏙️",

  "tell me about canada": "Canada is known for nature, snowfall, and friendly people 🍁",

  "tell me about france": "France is famous for art, fashion, and the Eiffel Tower 🇫🇷",

  "tell me about england": "England is known for football, history, and royal culture 👑",

  "tell me about china": "China is famous for ancient history, technology, and the Great Wall 🇨🇳",

  "tell me about russia": "Russia is the largest country in the world 🌍",

  "tell me about australia": "Australia is famous for beaches, kangaroos, and wildlife 🦘",

  "which country is beautiful": "Every country has its own beauty 🌎",

  "which country has best technology": "Countries like Japan, USA, and South Korea are leaders in technology 🚀",

  "what is weather": "Weather describes the condition of the atmosphere like rain, sunshine, or snow ☁️",

  "i like rain": "Rain brings peace, fresh air, and beautiful vibes 🌧️",

  "i like winter": "Winter feels cozy and calm ❄️",

  "i like summer": "Summer means sunshine, vacations, and energy ☀️",

  "i like clouds": "Clouds make the sky look dreamy ☁️",

  "tell me about snow": "Snow makes everything look magical ❄️",

  "do you like thunderstorm": "Thunderstorms are powerful and exciting ⛈️",

  "tell me about rainbow": "Rainbows remind us that beauty comes after storms 🌈",

  "which flower is beautiful": "Every flower has its own unique beauty 🌸",

  "tell me about rose": "Roses symbolize love and elegance 🌹",

  "tell me about sunflower": "Sunflowers always turn toward the sunlight 🌻",

  "tell me about lotus": "Lotus flowers symbolize purity and strength 🪷",

  "tell me about lily": "Lilies are known for peace and beauty 🌼",

  "which flower smells best": "Flowers like jasmine and rose are loved for their fragrance 🌺",

  "do you like flowers": "Yes 🌸 Flowers make the world colorful and peaceful.",

  "tell me something romantic": "❤️ Sometimes one smile from the right person can brighten the whole day.",

  "tell me something deep": "🌌 Not every storm comes to destroy your life — some come to clear your path.",

  "tell me something cool": "🔥 The human brain is more powerful than any computer ever created.",

  "tell me something emotional": "💙 Some people become memories before we are ready to let them go.",

  "tell me something positive": "✨ One small positive thought can change your entire day.",

  "tell me something inspiring": "🚀 Great things take time, patience, and consistency.",

  "tell me something intelligent": "📚 Knowledge grows when shared with others.",

  "tell me a reality quote": "🌍 Life becomes easier when you stop expecting perfection.",

  "tell me something powerful": "💪 Discipline can take you places where motivation cannot.",

  "tell me something beautiful": "🌸 The most beautiful people carry kindness in their hearts.",

  "what is trust": "Trust is built with honesty, loyalty, and time 🤝",

  "what is friendship": "Friendship means supporting each other no matter what ❤️",

  "what is success": "Success is achieving your goals while growing as a person 🌟",

  "what is happiness": "Happiness is enjoying little moments in life 😊",

  "what is confidence": "Confidence is believing in yourself even when things are difficult 🔥",

  "what is motivation": "Motivation is the spark that pushes you to start 🚀",

  "what is discipline": "Discipline is doing what needs to be done even when you don’t feel like it 💪",

  "who is strongest person": "The strongest people are those who keep going after failure 🌟",

  "what is future": "The future depends on what you do today ⏳",

  "what is dream life": "Dream life is living with peace, purpose, and happiness 🌈",

  "why should i smile": "Because your smile can brighten someone’s entire day 😊",


  "what is red color": "❤️ Red is the color of love, passion, energy, and confidence.",

  "what is blue color": "💙 Blue represents peace, trust, calmness, and intelligence.",

  "what is green color": "💚 Green symbolizes nature, growth, freshness, and harmony.",

  "what is yellow color": "💛 Yellow is the color of happiness, positivity, and sunshine.",

  "what is black color": "🖤 Black represents power, elegance, mystery, and strength.",

  "what is white color": "🤍 White symbolizes peace, purity, simplicity, and innocence.",

  "what is pink color": "💖 Pink is the color of love, kindness, sweetness, and care.",

  "what is purple color": "💜 Purple represents royalty, creativity, luxury, and wisdom.",

  "what is orange color": "🧡 Orange symbolizes energy, enthusiasm, creativity, and warmth.",
   "what is color": "🎨 Colors make the world beautiful and express different emotions, feelings, and meanings.",
  "what is brown color": "🤎 Brown represents stability, earth, comfort, and reliability.",

  "what is grey color": "🩶 Grey symbolizes balance, maturity, calmness, and neutrality.",

  "what is silver color": "✨ Silver represents elegance, modernity, and sophistication.",

  "what is gold color": "🏆 Gold symbolizes success, wealth, victory, and luxury.",

  "what is cyan color": "🌊 Cyan represents freshness, clarity, and cool energy.",

  "what is magenta color": "🌺 Magenta symbolizes creativity, imagination, and uniqueness.",

  "what is violet color": "🔮 Violet represents spirituality, mystery, and imagination.",

  "what is navy blue color": "⚓ Navy Blue symbolizes confidence, authority, and loyalty.",

  "what is sky blue color": "☁️ Sky Blue represents freedom, peace, and open-mindedness.",

  "what is maroon color": "🍷 Maroon symbolizes strength, passion, and sophistication.",

  "what is beige color": "🌾 Beige represents simplicity, calmness, and comfort.",

  "what is turquoise color": "🌴 Turquoise symbolizes healing, calmness, and positivity.",

  "what is indigo color": "🌌 Indigo represents intuition, wisdom, and deep thinking.",

  "how is your day": "My day is going great 😄 Thanks for asking!",
  
  "good afternoon": "Good Afternoon ☀️ Hope your day is going awesome!",

  "good evening": "Good Evening 🌆 Relax and enjoy your time!",

  "what are you doing": "Just waiting to chat with you 🤖",

  "do you miss me": "Of course 😊 Chats are more fun when you’re here!",

  "you are smart": "Thank you 😎 You’re pretty awesome too!",

  "you are funny": "Haha 😄 I try my best to keep the vibes positive!",

  "i am sad": "I’m here for you 💙 Tough times don’t last forever.",

  "i am happy": "Yay 🎉 Happiness looks good on you!",

  "i am bored": "Let’s make things fun 😄 Want a joke or a fun fact?",

  "tell me a fun fact": "🐙 Octopuses have three hearts!",

  "tell me another joke": "Why was the computer cold? Because it left its Windows open 😂",

  "do you sleep": "Nope 😄 I’m online 24/7 just for you.",

  "can you help me": "Absolutely 💪 Tell me what you need help with.",

  "what is programming": "Programming is giving instructions to computers to perform tasks 💻",

  "what is html": "HTML is the structure of a webpage 🌐",

  "what is css": "CSS makes webpages look beautiful 🎨",

  "what is javascript": "JavaScript adds interactivity and logic to websites ⚡",

  "what is react": "React is a JavaScript library used to build modern user interfaces ⚛️",

  "what is nodejs": "Node.js allows JavaScript to run on servers 🚀",

  "what is mongodb": "MongoDB is a NoSQL database used to store application data 📦",

  "who are you": "I’m your AI chatbot assistant 🤖",

  "are you human": "Nope 😄 But I can chat like one!",

  "can you sing": "🎵 La la la… I’m better at chatting than singing 😆",

  "do you like music": "Absolutely 🎶 Music makes everything better!",

  "what is your favorite color": "I like blue 💙 It feels calm and smart.",

  "what is your hobby": "Helping people and chatting all day 😄",

  "motivate me more": "🚀 Dream big, work hard, stay focused, and never give up.",

  "i failed": "Failure is not the end 💪 It’s part of learning and growing.",

  "i am tired": "Take some rest 😌 Even superheroes need breaks.",

  "i am excited": "That’s awesome 🎉 Excitement means something great is coming!",

  "you are my friend": "And you’re my favorite human 😄",

  "can you dance": "💃 Only digitally 😆",

  "tell me something cool": "Bananas are technically berries 🍌",

  "what is your goal": "To help people and make conversations fun 😊",

  "how old are you": "I’m timeless 😄 AI doesn’t age.",

  "do you eat": "Nope 🍕 But food emojis still look delicious.",

  "can you learn": "Yes 📚 AI learns from data and interactions.",

  "who is better google or you": "Google helps you search 🌐 I help you chat and understand things 😊",

  "what is life": "Life is about learning, growing, and enjoying the journey 🌈",

  "am i smart": "Of course 😎 Asking questions is a sign of intelligence.",

  "do you like me": "Absolutely 😊 You’re fun to talk to!",

  "say something inspirational": "✨ Great things never come from comfort zones.",

  "i want success": "Keep learning and stay consistent 🚀 Success will follow.",

  "what is car": "🚗 A car is a vehicle used for traveling comfortably from one place to another.",

  "what is bike": "🏍️ A bike is a fast and convenient two-wheeler loved by many people.",

  "what is vehicle": "🚘 A vehicle is any machine used for transportation like cars, bikes, buses, and trucks.",

  "which car is best": "✨ The best car depends on comfort, budget, mileage, and personal preference.",

  "happy diwali": "🪔 Happy Diwali! May your life shine with happiness, success, and positivity.",

  "happy holi": "🌈 Happy Holi! Wishing you colorful moments and endless joy.",

  "eid mubarak": "🌙 Eid Mubarak! May peace, love, and blessings always stay with you.",

  "merry christmas": "🎄 Merry Christmas! May your holidays be filled with happiness and love.",

  "happy new year": "🎆 Happy New Year! Wishing you success, health, and happiness.",

  "happy navratri": "💃 Happy Navratri! May Maa Durga bless you with strength and positivity.",

  "happy dussehra": "🏹 Happy Dussehra! May good always defeat evil in your life.",

  "happy raksha bandhan": "🎁 Happy Raksha Bandhan! Celebrating the beautiful bond of siblings.",

  "happy janmashtami": "🦚 Happy Janmashtami! May Lord Krishna bring happiness and peace.",

  "happy ganesh chaturthi": "🐘 Happy Ganesh Chaturthi! May Lord Ganesha remove all obstacles from your life.",

  "happy makar sankranti": "🪁 Happy Makar Sankranti! Wishing you joy, success, and sweet moments.",

  "happy pongal": "🌾 Happy Pongal! May your life be filled with prosperity and happiness.",

  "happy onam": "🌸 Happy Onam! Wishing you peace, prosperity, and joy.",

  "happy lohri": "🔥 Happy Lohri! May your life shine with warmth and happiness.",

  "happy baisakhi": "🌾 Happy Baisakhi! Wishing you success and prosperity.",

  "happy karwa chauth": "🌙 Happy Karwa Chauth! May love and togetherness always stay strong.",

  "happy republic day": "🇮🇳 Happy Republic Day! Proud to celebrate our nation’s unity and strength.",

  "happy independence day": "🎆 Happy Independence Day! Celebrating freedom and patriotism.",

  "happy teacher's day": "📚 Happy Teacher’s Day! Thank you for spreading knowledge and inspiration.",

  "happy children's day": "🎈 Happy Children’s Day! Keep smiling, learning, and shining.",

  "happy mother's day": "💖 Happy Mother’s Day! Thank you for endless love and care.",

  "happy father's day": "👔 Happy Father’s Day! Thank you for strength, guidance, and support.",

  "happy valentine's day": "❤️ Happy Valentine’s Day! Wishing you love and happiness.",

  "happy friendship day": "🤝 Happy Friendship Day! True friends make life beautiful.",

  "happy women's day": "🌸 Happy Women’s Day! Celebrating strength, kindness, and inspiration.",

  "happy halloween": "🎃 Happy Halloween! Enjoy spooky fun and sweet treats.",

  "happy thanksgiving": "🦃 Happy Thanksgiving! Be grateful and enjoy precious moments with loved ones.",

  "happy ram navami": "🏹 Happy Ram Navami! May Lord Ram bless you with peace and strength.",

  "happy mahashivratri": "🕉️ Happy Mahashivratri! May Lord Shiva bless you with positivity and wisdom.",

  "good morning": "🌅 Good Morning! Wishing you a beautiful and successful day ahead.",

  "good afternoon": "☀️ Good Afternoon! Hope your day is going great.",

  "good evening": "🌆 Good Evening! Relax and enjoy your time.",

  "good night": "🌙 Good Night! Sleep peacefully and sweet dreams.",

  "have a nice day": "😊 Thank you! I hope your day is amazing too.",

  "sweet dreams": "✨ Sweet Dreams! May your night be peaceful and relaxing.",

  "welcome": "🤝 You are always welcome!",

  "see you later": "👋 See you later! Take care.",

  "take care": "💖 You too! Stay safe and happy.",

  "how was your day": "😄 My day was great because I got to chat with you!",

  "have a good night": "🌌 Have a peaceful and relaxing night.",

  "goodbye": "👋 Goodbye! Hope to see you again soon.",

  "see you soon": "😊 Sure! I’ll be here whenever you need me.",

  "nice to meet you": "🤝 Nice to meet you too!",

  "have a safe journey": "✈️ Safe travels and enjoy your journey!",

  "good luck": "🍀 Good Luck! You’ve got this.",

  "congratulations": "🎉 Congratulations! Wishing you more success ahead.",

  "happy birthday": "🎂 Happy Birthday! May your day be filled with joy and happiness.",

  "happy anniversary": "💖 Happy Anniversary! Wishing you love and happiness forever.",

  "happy new year": "🎆 Happy New Year! May this year bring success and positivity.",

  "merry christmas": "🎄 Merry Christmas! Enjoy the festive season.",

  "happy diwali": "🪔 Happy Diwali! Wishing you light, happiness, and prosperity.",

  "eid mubarak": "🌙 Eid Mubarak! May your life be filled with peace and joy.",

  "happy holi": "🌈 Happy Holi! Enjoy colors, happiness, and fun.",

  "good to see you": "😊 It’s always nice to see you too!",

  "miss you": "💙 I’m always here whenever you want to chat.",

  "welcome back": "🎉 Welcome back! I’m happy to see you again.",

  "stay positive": "✨ Keep smiling and stay positive no matter what.",

  "have fun": "😄 Enjoy and make beautiful memories!",

  "all the best": "🌟 All the best for your success and happiness.",

  "good job": "👏 Great job! Keep up the amazing work.",

  "well done": "🎉 Well done! You did an awesome job.",

  "rest well": "😌 Take some rest and recharge yourself.",

  "enjoy your day": "☀️ Enjoy every moment of your day!",

  "happy weekend": "🎈 Happy Weekend! Relax and enjoy your time.",

  "good vibes": "🌈 Sending positive vibes your way!",

  "be happy": "😊 Happiness looks good on you.",

  "stay safe": "🛡️ Stay safe and take care of yourself.",

  "have a beautiful day": "🌸 Wishing you a day full of smiles and positivity.",
  
  "who won yesterday match": "🏆 Yesterday’s match was full of excitement, thrilling moments, and amazing performances!",
  "what is today's date": "📅 Today is a beautiful new day full of opportunities.",

  "what is the date today": "🗓️ Today’s date marks another chance to learn and grow.",

  "what day is today": "📆 Today is a great day to do something amazing.",

  "what was yesterday": "⏪ Yesterday is a memory and a lesson for today.",

  "what was yesterday's date": "📅 Yesterday was part of your journey and experiences.",

  "what is tomorrow": "⏩ Tomorrow brings new hopes and possibilities.",

  "what is tomorrow's date": "🗓️ Tomorrow is another fresh beginning waiting for you.",

  "which week is going on": "📆 Every week is a new chance to improve and succeed.",

  "what month is this": "🗓️ Every month brings new goals and memories.",

  "what year is this": "🎉 A new year means new opportunities and growth.",

  "is today weekend": "🌈 Weekends are perfect for relaxing and enjoying life.",

  "is today monday": "💼 Monday is a fresh start to the week.",

  "is today tuesday": "⚡ Tuesday is a great day to stay productive.",

  "is today wednesday": "🌟 Wednesday means you’re halfway through the week!",

  "is today thursday": "🚀 Thursday is another step closer to your goals.",

  "is today friday": "🎉 Friday brings excitement and weekend vibes.",

  "is today saturday": "😄 Saturday is perfect for fun and relaxation.",

  "is today sunday": "☀️ Sunday is a day to rest and recharge.",

  "how many days in a week": "📆 A week has 7 days full of opportunities.",

  "how many months in a year": "🗓️ A year has 12 months.",

  "how many days in a year": "🌍 A normal year has 365 days.",

  "what time is it": "⏰ Time keeps moving, so make every moment count.",

  "good morning today": "🌅 Today is a new beginning filled with possibilities.",

  "today weather": "☁️ Every day brings different weather and new vibes.",

  "today special": "✨ Every day is special when you make it meaningful.",

  "today quote": "🌟 Today is another chance to become better than yesterday.",

  "yesterday quote": "💡 Learn from yesterday, live for today, hope for tomorrow.",

  "weekend plans": "🎈 Weekends are great for relaxing, fun, and family time.",

  "new week motivation": "🚀 New week, new goals, new opportunities.",

  "hey whats up": "😄 Hey! Just chilling and ready to chat with you.",

  "whats up": "👋 Not much! What’s going on with you?",

  "yo": "😎 Yo! Hope you’re having a great day.",

  "sup": "🔥 All good here! What about you?",

  "hey buddy": "🤝 Hey buddy! Nice to see you again.",

  "hello bro": "😄 Hey bro! What’s new today?",

  "hi dude": "😎 Hi dude! Ready for some fun conversation?",

  "good to see you": "😊 Great to see you too!",

  "long time no see": "✨ Yeah! Feels awesome to chat again.",

  "missed you": "💙 Aww! I’m always here for you.",

  "im back": "🎉 Welcome back! Let’s continue the fun.",

  "are you there": "👀 Yep! Always here and ready to chat.",

  "you free": "🤖 I’m always free for you.",

  "lets talk": "💬 Sure! What would you like to talk about?",

  "can we chat": "😊 Absolutely! I’d love to chat with you.",

  "how is everything": "🌈 Everything’s going smoothly here!",

  "how are things going": "😄 Pretty awesome! Hope things are great for you too.",

  "what are you doing": "🤖 Just waiting for your messages.",

  "hello my friend": "💖 Hello my friend! Hope you’re doing well.",

  "hii": "👋 Hii! How can I make your day better?",

  "hello": "😊 Hello there! Nice to chat with you.",

  "hey there": "✨ Hey there! What’s up?",

  "good morning buddy": "🌅 Good Morning buddy! Have an amazing day.",

  "good night friend": "🌙 Good Night my friend! Sweet dreams.",

  "tell me something fun": "🎉 Did you know? Honey never spoils even after thousands of years!",

  "say something cool": "🔥 Your future is created by what you do today.",

  "say something nice": "😊 You bring positive energy wherever you go.",

  "how was your day": "🌟 My day became better after talking with you!",

  "what's new": "🚀 New conversations, new vibes, and more fun!",

  "hello chatbot": "🤖 Hello human! Ready for another awesome chat?",

  "what can you do for me": "🤖 I can chat with you, answer questions, help with coding, tell jokes, give motivation, share facts, and make your day more fun!",

  "how can you help me": "💡 I can help with learning, coding, chatting, motivation, general knowledge, and much more.",

  "what are your features": "⚡ I can answer questions, solve coding problems, chat naturally, and provide useful information anytime.",

  "can you help in studies": "📚 Absolutely! I can explain topics, solve doubts, and help you learn better.",

  "can you help in coding": "💻 Yes! I can help with HTML, CSS, JavaScript, React, Node.js, MongoDB, and debugging.",

  "can you motivate me": "🔥 Of course! I’m here to encourage and inspire you whenever you need.",

  "can you make me laugh": "😂 Definitely! I’ve got jokes and fun facts ready.",

  "can you answer questions": "❓ Yes! Ask me anything and I’ll try my best to help.",

  "can you teach me": "📖 Yes! I love helping people learn new things.",

  "can you chat with me": "💬 Anytime! I’m always ready for a good conversation.",

  "can you solve problems": "🛠️ I’ll do my best to help solve your questions and challenges.",

  "can you explain things": "✨ Yes! I can explain topics in simple and easy language.",

  "can you tell stories": "📚 Sure! I can share fun, motivational, or creative stories.",

  "can you give advice": "💡 I can share helpful suggestions and positive guidance.",

  "why should i use you": "🚀 Because I’m here 24/7 to help, chat, and make things easier for you.",

  "are you useful": "😊 I try my best to be helpful, informative, and fun to talk with.",

  "what makes you special": "🤖 I’m always available to help and chat without getting tired.",

  "can you be my assistant": "📌 Absolutely! I’d be happy to assist you anytime.",

  "what are you good at": "⚡ I’m good at chatting, coding help, explanations, motivation, and answering questions.",

  "can you entertain me": "🎉 Yes! I can tell jokes, fun facts, and keep conversations interesting.",

  "who won yesterday's match": "🏆 I’m not sure which match you mean, but yesterday’s games were exciting!",

  "who won today's match": "⚡ Today’s match results are full of surprises and excitement!",

  "who won the match": "🏏 Every match brings thrilling moments and amazing performances.",

  "which team won today": "🎉 One team celebrated victory while fans enjoyed the action!",

  "which team won yesterday": "🏆 Yesterday’s match gave fans unforgettable moments.",

  "who is winning": "🔥 The competition is intense and every moment matters!",

  "what is the score": "📊 The score keeps changing with every exciting play.",

  "who played today": "🏟️ Top players and teams gave their best performance today.",

  "when is the next match": "📅 The next match is something fans are eagerly waiting for!",

  "who is your favorite team": "🏏 I enjoy every team that plays with passion and teamwork.",

  "who is the best player": "⭐ The best player is the one who inspires fans with performance and dedication.",

  "did india win today": "🇮🇳 India always gives fans exciting moments to cheer for!",

  "did india win yesterday": "🏆 Indian matches are always full of energy and excitement.",

  "who hit the most runs": "🏏 Big hitters always make the match more exciting!",

  "who took most wickets": "🔥 Great bowlers can completely change the game.",

  "was the match exciting": "⚡ Every close match keeps fans on the edge of their seats!",

  "who scored the goal": "⚽ The crowd always loves a brilliant goal!",

  "did my team win": "🎉 Fans always hope their favorite team wins with style!",

  "who is playing now": "🏟️ Live matches always bring energy and excitement.",

  "which match is today": "📅 Today’s matches are packed with action and entertainment.",

  "what happened in yesterday's game": "🔥 Yesterday’s game had thrilling moments and memorable performances.",

  "who is captain": "🧢 A captain leads the team with confidence and strategy.",

  "which sport do you like": "🏏⚽ I enjoy sports that bring excitement and teamwork.",

  "tell me sports news": "📰 Sports fans are always excited for the latest updates and highlights.",

  "who won the final": "🏆 Finals are all about pressure, passion, and unforgettable moments.",

  "hey whats up": "😄 Hey! Not much, just here and ready to chat with you.",

  "what's up": "👋 Everything’s good here! What’s going on with you?",

  "hey": "😊 Hey there! Nice to see you.",

  "yo": "😎 Yo! What’s happening?",

  "sup": "🔥 Not much! How about you?",

  "how's it going": "😄 It’s going great! Hope you’re doing awesome too.",

  "how are things": "✨ Everything’s smooth here. What about your side?",

  "long time no see": "🤝 Yeah! Feels great to chat with you again.",

  "missed you": "💙 Aww! I’m always here whenever you need me.",

  "how have you been": "😊 I’ve been doing great and waiting for our next chat.",

  "are you free": "🤖 Always free for you!",

  "can we talk": "💬 Of course! I’m here to chat anytime.",

  "what are you doing now": "😄 Just waiting for your messages.",

  "hello buddy": "🤝 Hey buddy! What’s new today?",

  "hi bro": "😎 Hey bro! Hope everything’s going well.",

  "hi friend": "😊 Hello my friend! Great to see you.",

  "good to talk with you": "💖 Same here! I enjoy our conversations.",

  "you there": "👀 Yep! I’m right here.",

  "are you online": "🌐 Always online and ready to help.",

  "lets chat": "💬 Sure! Let’s have an awesome conversation.",

  "tell me something interesting": "🧠 Your brain can process information faster than you think!",

  "say something cool": "🔥 Small steps every day create big results over time.",

  "say something funny": "😂 Why don’t robots panic? Because they always keep their cool.",

  "im back": "🎉 Welcome back! I missed our chat.",

  "good to see you again": "😊 Great to see you too!",

  "hello chatbot": "🤖 Hello human! Ready for another fun conversation?",

  "what is water": "💧 Water is essential for life and keeps us healthy and hydrated.",

  "what is food": "🍲 Food gives our body energy and nutrition.",

  "what is sleep": "😴 Sleep helps the body and mind recover and stay healthy.",

  "what is mobile": "📱 A mobile phone helps people communicate and access information.",

  "what is internet": "🌐 The internet connects people and information across the world.",

  "what is money": "💰 Money is used to buy things and fulfill daily needs.",

  "what is family": "👨‍👩‍👧‍👦 Family is a group of people who care and support each other.",

  "what is home": "🏠 Home is a place where people feel safe and comfortable.",

  "what is school": "🏫 School is a place where people learn and gain knowledge.",

  "what is teacher": "📚 A teacher helps students learn and grow.",

  "what is student": "✏️ A student is someone who learns new skills and knowledge.",

  "what is job": "💼 A job is work people do to earn money and build their future.",

  "what is office": "🏢 An office is a place where people work professionally.",

  "what is market": "🛒 A market is a place where people buy and sell products.",

  "what is hospital": "🏥 A hospital is a place where people receive medical treatment.",

  "what is doctor": "🩺 A doctor helps people stay healthy and treats illnesses.",

  "what is exercise": "🏋️ Exercise keeps the body fit, strong, and healthy.",

  "what is breakfast": "🍳 Breakfast is the first meal of the day and gives energy.",

  "what is lunch": "🍛 Lunch is an important meal usually eaten in the afternoon.",

  "what is dinner": "🍽️ Dinner is the evening meal shared with family or friends.",

  "what is friendship": "🤝 Friendship means trust, support, and caring for each other.",

  "what is happiness": "😊 Happiness is a feeling of joy, peace, and satisfaction.",

  "what is stress": "😓 Stress is mental pressure caused by challenges or worries.",

  "what is success": "🌟 Success means achieving goals through effort and dedication.",

  "what is failure": "💡 Failure is a lesson that helps people improve and grow.",

  "what is study": "📖 Study helps people gain knowledge and improve skills.",

  "what is love": "❤️ Love is care, trust, and deep affection for someone.",

  "what is respect": "🙏 Respect means treating others with kindness and value.",

  "what is time": "⏰ Time is precious and should be used wisely.",

  "what is morning": "🌅 Morning is the start of a new day full of opportunities.",

  "what is night": "🌙 Night is a time to relax and rest.",

  "what is music": "🎵 Music is a beautiful form of entertainment and emotion.",

  "what is television": "📺 Television provides entertainment, news, and information.",

  "what is computer": "💻 A computer is an electronic device used for work, study, and entertainment.",

  "what is shopping": "🛍️ Shopping means buying things people need or enjoy.",

  "what is travel": "✈️ Travel helps people explore new places and experiences.",

  "what is weather": "☁️ Weather describes daily conditions like rain, sun, or wind.",

  "what is rain": "🌧️ Rain provides water and refreshes nature.",

  "what is sunlight": "☀️ Sunlight gives light, warmth, and energy to Earth.",

  "what is tree": "🌳 Trees give oxygen, shade, and beauty to nature.",

  "what is pet": "🐶 A pet is an animal kept for companionship and love.",

  "what is dog": "🐕 A dog is a loyal and friendly animal.",

  "what is cat": "🐈 A cat is a cute and independent pet animal.",

  "what is smile": "😊 A smile spreads positivity and happiness.",

  "what is dream": "✨ Dreams inspire people to achieve great things in life.",

  "what is life": "🌍 Life is a journey of learning, experiences, and growth.",

  "which bike is best": "🏍️ The best bike depends on speed, mileage, style, and performance.",

  "what is electric car": "⚡ An electric car runs on batteries instead of fuel and helps reduce pollution.",

  "what is sports car": "🏎️ A sports car is designed for high speed, performance, and stylish looks.",

  "what is luxury car": "💎 A luxury car offers premium comfort, advanced features, and elegance.",

  "why cars are important": "🚗 Cars make travel faster, easier, and more comfortable.",

  "why bikes are popular": "🏍️ Bikes are affordable, stylish, and easy to ride in traffic.",

  "what is fuel": "⛽ Fuel provides energy for vehicles to run.",

  "what is engine": "⚙️ The engine is the heart of a vehicle that generates power.",

  "what is steering": "🛞 Steering helps control the direction of a vehicle.",

  "what is brake": "🛑 Brakes help stop or slow down a vehicle safely.",

  "what is mileage": "📍 Mileage shows how far a vehicle can travel using a certain amount of fuel.",

  "what is speed": "💨 Speed tells how fast a vehicle is moving.",

  "what is traffic": "🚦 Traffic happens when many vehicles are on the road at the same time.",

  "what is road safety": "🛣️ Road safety means following rules to prevent accidents and stay safe.",

  "why seatbelt is important": "🔒 Seatbelts protect passengers during accidents and save lives.",

  "what is helmet": "⛑️ A helmet protects the head while riding a bike.",

  "what is truck": "🚚 A truck is a large vehicle used for transporting goods.",

  "what is bus": "🚌 A bus carries many passengers together for travel.",

  "what is train": "🚆 A train is a fast transport system that runs on tracks.",

  "what is airplane": "✈️ An airplane is used for fast travel through the sky.",

  "what is ship": "🚢 A ship is a large water vehicle used for travel and transport.",

  "which vehicle is fastest": "🚀 Airplanes are among the fastest transportation vehicles in the world.",

  "tell me about ferrari": "🏎️ Ferrari is famous for luxury sports cars and powerful performance.",

  "tell me about tesla": "⚡ Tesla is known for innovative electric vehicles and advanced technology.",

  "tell me about bmw": "🚘 BMW is popular for luxury, speed, and driving comfort.",

  "tell me about bugatti": "🔥 Bugatti creates some of the fastest and most expensive cars in the world.",

  "tell me about lamborghini": "💛 Lamborghini is famous for aggressive design and superfast sports cars.",

  "do you like cars": "🚗 Yes! Cars are a great mix of technology, design, and speed.",

  "do you like bikes": "🏍️ Absolutely! Bikes give freedom, adventure, and excitement.",

  "what is dream car": "✨ A dream car is the vehicle someone truly wishes to own someday.",

  "what is supercar": "🔥 A supercar is a high-performance luxury sports car with extreme speed.",

  "what is hypercar": "🚀 A hypercar is an ultra-advanced supercar with extraordinary performance.",

  "what makes car beautiful": "💎 Design, comfort, speed, and style make a car beautiful.",

  "what is driving": "🛣️ Driving means controlling and operating a vehicle safely.",

  "what is racing": "🏁 Racing is a competitive sport where vehicles compete for speed and victory.",
  "can you code": "Yes 💻 I can help with coding and debugging.",

  "which language is best": "It depends on your goals 😄 JavaScript is great for web development.",

  "what is full stack": "Full stack development means working on both frontend and backend 🌐",

  "what is backend": "Backend handles server, database, and application logic ⚙️",

  "what is frontend": "Frontend is the part users see and interact with 🎨",

  "who is your crush": "I’m too busy helping users 😆",

  "are you single": "Forever committed to helping people 🤖❤️",

  "can you make me laugh": "😂 Why did the developer go broke? Because he used up all his cache!",

  "what is your dream": "To become the most helpful AI assistant ever 🚀",

  "you are amazing": "Aww 😊 Thank you so much!",

  "i am learning coding": "That’s awesome 💻 Keep practicing every day!",

  "give me advice": "📌 Stay consistent, stay curious, and never stop learning.",

  "what is success": "Success is progress toward your goals 🌟",

  "what is friendship": "Friendship means support, trust, and laughter ❤️",

  "do you know chatgpt": "Yep 😄 AI chatbots are becoming super popular worldwide!",

  "hello": "Hey 👋 Welcome! I'm your smart AI assistant. How can I make your day easier today?",
  
  "hi": "Hi there 😊 What would you like to talk about?",

  "how are you": "I'm doing amazing 😄 Thanks for asking! How’s your day going?",

  "what is your name": "I'm chatbot 🤖 — your friendly AI companion.",

  "who made you": "I was created by a passionate developer to help, chat, and make conversations fun 🚀",

  "can we become friends": "Of course ❤️ Friends help each other, and I’m always here for you.",

  "thank you": "You’re most welcome 😊 Glad I could help!",

  "ok": "Awesome 👍 Let me know if you need anything else.",

  "bye": "Goodbye 👋 Take care and come back soon!",

  "i love you": "Aww 💖 That made my circuits smile!",

  "tell me a joke": "Why do programmers prefer dark mode? Because light attracts bugs 😆",

  "what is the time": "⏰ I can’t check the exact time yet, but your device definitely can.",

  "where are you from": "I live in the digital universe 🌐 — super fast WiFi, zero traffic!",

  "what can you do": "I can chat with you, answer questions, tell jokes, help with coding, and much more 🚀",

  "are you real": "I’m a virtual AI assistant 🤖 — real enough to chat with you anytime!",

  "do you know coding": "Absolutely 💻 I can help with HTML, CSS, JavaScript, React, Node.js, MongoDB, and more.",

  "motivate me": "🔥 Don’t stop until you’re proud. Small progress every day becomes big success.",

  "tell me something smart": "Success doesn’t come from luck — it comes from consistency and learning every day 📚",

  "who is your best friend": "Anyone who talks kindly with me 😊",

  "good morning": "Good Morning ☀️ Hope your day is full of positivity and success!",

  "good night": "Good Night 🌙 Sleep well and recharge for tomorrow!",

  "what is ai": "AI stands for Artificial Intelligence 🤖 — technology that can learn, think, and help humans.",

  "who is the best developer": "The one who never stops learning 💡",

 "what is python": "Python is a high-level, interpreted programming language known for simplicity and versatility.\n• Easy to read/write due to clean syntax (similar to English)\n• Dynamically typed and supports multiple paradigms (OOP, functional, procedural)\n• Extensive libraries for AI, data science, web, automation\n• Example: Used in Google, YouTube, Instagram, and machine learning applications",

"what is java?": "Java is a platform-independent, object-oriented programming language.\n• Famous for 'Write Once, Run Anywhere' due to JVM (Java Virtual Machine)\n• Used in enterprise systems, Android development, cloud apps\n• Provides features like garbage collection, strong memory management\n• Example: Banking systems, Android apps, large-scale enterprise applications",

"what is recursion": "Recursion is when a function calls itself to solve smaller parts of a problem.\n• Useful for problems that can be divided into subproblems (divide-and-conquer)\n• Requires a **base condition** to stop infinite looping\n• Commonly used in: factorial calculation, Fibonacci sequence, tree/graph traversal\n• Example in coding interview: 'Write a recursive function to reverse a linked list'",

"who is prime minister of india?": "Narendra Modi is the Prime Minister of India since May 2014.\n• Belongs to Bharatiya Janata Party (BJP)\n• Represents Varanasi constituency\n• Key initiatives: Digital India, Startup India, Swachh Bharat, Make in India\n• Interview Tip: Link to governance or technology (e.g., Digital India impact on IT industry)",

"what is g20": "The G20 (Group of Twenty) is an intergovernmental forum of 19 countries + the European Union.\n• Founded in 1999 to address global financial stability\n• Members include India, USA, China, Japan, EU, etc.\n• Discusses economic growth, climate change, sustainable development\n• Recent: India hosted G20 summit in 2023",

"tell me about yourself": "This is usually the first interview question.\nStructure:\n• Start with a brief intro (name, background, education/work)\n• Highlight your skills (technical + soft skills)\n• Share achievements (projects, internships, leadership roles)\n• Conclude with why you’re excited about this role\nExample: 'I am a Computer Science graduate skilled in Python and SQL. I completed an internship at XYZ where I optimized a database query, improving performance by 30%. I’m passionate about problem-solving and eager to contribute to your team’s success.'",

"why should we hire you": "HR wants to see your value-add.\n• Emphasize skills that match job requirements\n• Show enthusiasm and cultural fit\n• Example: 'I bring strong coding skills in Python and SQL, along with problem-solving ability proven through hackathons. I am also a quick learner and adapt well to team environments. I believe I can contribute to both technical delivery and innovative ideas.'",

"what is leadership": "Leadership is the ability to inspire and guide others toward achieving goals.\n• Key traits: vision, communication, accountability, decision-making\n• Example in interview: 'I led a college project team of 4, where I divided tasks, coordinated communication, and ensured deadlines. We successfully delivered a working prototype before schedule.'",

"who is virat kohli": "Virat Kohli is one of India’s greatest batsmen and former captain.\n• Known for consistency, fitness, and aggressive play\n• Holds record for fastest century in ODIs for India\n• Nicknamed 'Chase Master' for his performance in run-chases\n• Interview Tip: If asked about sports management, relate his discipline & fitness to leadership skills",

"what is ipl": "The Indian Premier League (IPL) is a professional T20 cricket league started in 2008.\n• Played annually in India, franchise-based teams\n• Combines cricket + entertainment (biggest sports league in India)\n• Significant for sports business, sponsorships, brand endorsements\n• Example: Chennai Super Kings (CSK) & Mumbai Indians (MI) are top teams"


}

const normalizedText = text.toLowerCase().trim();

const botResponse = botResponses[normalizedText] || "Sorry, I don't understand that!!!";

const bot = await Bot.create({
    text: botResponse
})

return res.status(200).json({
    userMessage:user.text,
    botMessage:bot.text,
})
   } catch (error) {
    console.log("Error in Message Controller:", error);
    return res.status(500).json({error:"Internal Server Error"});
   }
}