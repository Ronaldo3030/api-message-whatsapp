const { Client } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const client = new Client();

const createWhatsappClient = () => {
  client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
  });

  client.on("ready", () => {
    console.log(`[CLIENT]`.blue, "Client is ready!");
  });

  client.on("message", (message) => {
    if (message.body === "!ping") {
      client.sendMessage(message.from, "pong");
    }
  });

  client.initialize();

  const sendWhatsappMessage = (number, message) => {
    client.sendMessage(number, message).then(() => {
      console.log(`[SUCCESS]`.green, "Message sent successfully!");
    }).catch((err) => {
      console.error(`[ERROR]`.red, `Error sending message: ${err}`);
    });
  };

  return { client, sendWhatsappMessage };
};

module.exports = createWhatsappClient;
