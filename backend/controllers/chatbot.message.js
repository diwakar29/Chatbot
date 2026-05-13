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