const config = {
  profile: {
    ownerName: "Endy",
    ownerNumb: "212656245701",
    botName: "Zeyno Bot",
  },

  // Lista staff del bot
  staff: [
    "85253382438",
    "212775270361",
    "5511967898841",
    "212693877842",
    "393926427789"
  ],

  reply: {
    notFound: "Comando non trovato.",
    success: "Fatto ✓",
    admin: "Questo comando è solo per admin!",
    botAdmin: "Il bot deve essere admin prima!",
    owner: "Questo comando è solo per l'owner!",
    staff: "Questo comando è solo per lo staff!",
    group: "Questo comando funziona solo nei gruppi!",
    private: "Questo comando funziona solo in chat privata!",
    bot: "Questo comando è solo per il bot!",
    wait: "Attendi...",
    linkm: "Dov'è il link?",
    error: "Errore!",
    endLimit: "Hai finito il limite giornaliero, si resetta ogni 12 ore.",
    ban: "Sei stato bannato dal bot, contatta l'owner.",
    nsfw: "La funzione NSFW non è attiva.",
    banChat: "Il bot è bannato in questo gruppo, contatta l'owner.",
  },

  setting: {
    blockchat: [],
  },

  auto: {
    chat: {
      group: true,
      inbox: true,
    },
    reply: {
      sticker: false,
      audio: false,
    },
    presence: {
      is: true,
      value: "typing",
    },
    read: false,
  },

  // Funzioni per controllo permessi
  check: {
    isOwner: function(sender) {
      return sender === config.profile.ownerNumb;
    },
    isStaff: function(sender) {
      return config.staff.includes(sender) || sender === config.profile.ownerNumb;
    }
  }
};

module.exports = config; 