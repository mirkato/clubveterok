// Test script for event registration Telegram integration
import { sendEventRegistrationToTelegram } from './src/services/telegram-service.js';

// Test data
const testData = {
  parentName: "Иван Петров",
  phone: "+7 (999) 123-45-67",
  email: "ivan@example.com",
  childName: "Мария",
  childAge: "7-8",
  selectedWorkshops: ["wool-12", "paint-12", "karate-13"],
  comments: "Аллергия на цитрусовые",
  eventTitle: "День рождения «Ветерка» и День открытых дверей!",
  workshopDetails: [
    { id: 'wool-12', time: '12:00 - 13:00', title: 'Мастер-класс «Магия шерсти»', emoji: '🧶' },
    { id: 'speech-12', time: '12:00 - 13:00', title: 'Консультация логопеда', emoji: '🗣' },
    { id: 'paint-12', time: '12:00 - 13:00', title: 'Акварель «Живые краски»', emoji: '🎨' },
    { id: 'learning-13', time: '13:00 - 14:00', title: 'Формула успешного обучения', emoji: '🧠' },
    { id: 'english-13', time: '13:00 - 14:00', title: 'Английский: ликвидация сложностей', emoji: '🇬🇧' },
    { id: 'karate-13', time: '13:00 - 14:00', title: 'Каратэ для малышей', emoji: '🥋' }
  ]
};

// Send test data
async function testEventRegistration() {
  console.log('Sending test event registration data to Telegram...');
  
  try {
    const result = await sendEventRegistrationToTelegram(testData);
    
    if (result) {
      console.log('✅ Test event registration sent successfully!');
    } else {
      console.log('❌ Failed to send test event registration');
    }
  } catch (error) {
    console.error('❌ Error sending test event registration:', error);
  }
}

// Run the test
testEventRegistration();