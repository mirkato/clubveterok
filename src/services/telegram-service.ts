// src/services/telegram-service.ts
const TELEGRAM_BOT_TOKEN = '8475422452:AAHSwZbAU-E8NREmVFsoIPiLJ9C7f_9-vWU';
const TELEGRAM_CHAT_ID = '-5138101133';

interface FormData {
  parent_name: string;
  parent_phone: string;
  child_name_age: string;
  program: string;
  comment: string;
  page_url: string;
}

export const sendToTelegram = async (formData: FormData): Promise<boolean> => {
  try {
    // Format the message for Telegram
    const message = `
🔔 *Новая заявка на пробное занятие*

👤 *Имя родителя:* ${formData.parent_name}
📞 *Телефон:* ${formData.parent_phone}
👶 *Имя и возраст ребёнка:* ${formData.child_name_age}
🎯 *Выбранное направление:* ${formData.program}
💬 *Комментарий:* ${formData.comment || '—'}
🌐 *Страница:* ${formData.page_url}

📅 *Дата заявки:* ${new Date().toLocaleString('ru-RU')}
    `;

    // Send message to Telegram
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      }
    );

    const result = await response.json();
    
    if (!response.ok || !result.ok) {
      console.error('Failed to send message to Telegram:', result);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    return false;
  }
};