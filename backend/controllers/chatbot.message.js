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