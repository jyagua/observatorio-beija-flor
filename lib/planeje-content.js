// Horários demonstrativos: os horários reais ainda serão definidos pelo observatório.
export const demoSlots = ["09:00", "10:30", "14:00", "15:30"];
export const maxVisitors = 10;

export const planejeContent = {
  pt: {
    locale: "pt-BR",
    hero: {
      eyebrow: "Visite o Observatório",
      title: ["Planeje sua", "experiência."],
      text: "Escolha uma data demonstrativa e envie uma solicitação. Nenhum horário representa disponibilidade real.",
    },
    aside: {
      eyebrow: "Antes de vir",
      title: "Informações úteis",
      location: { title: "Localização", value: "Aratuba, Ceará, Brasil", note: "Endereço exato fornecido após confirmação." },
      tips: {
        title: "Recomendações",
        text: "Use roupas confortáveis e prepare-se para uma experiência ao ar livre. Orientações oficiais serão fornecidas pelo responsável.",
      },
      note: "Horários, duração, valores e regras ainda serão definidos pelo observatório.",
    },
    steps: {
      date: { title: "Escolha uma data", text: "Calendário demonstrativo — não representa disponibilidade real." },
      time: { title: "Escolha um horário", text: "Primeiro, selecione uma data.", ready: "Horários demonstrativos." },
      details: { title: "Seus dados", text: "Preencha para enviar a solicitação." },
    },
    calendar: {
      prev: "Mês anterior",
      next: "Próximo mês",
      available: "Disponível",
      unavailable: "Indisponível",
      selected: "Selecionada",
    },
    form: {
      name: "Nome completo",
      email: "E-mail de contato",
      visitors: "Quantidade de visitantes",
      submit: "Solicitar reserva",
      note: "Esta solicitação não confirma a reserva automaticamente.",
      sent: "Solicitação registrada (demonstração). Nenhum dado foi enviado.",
    },
  },

  en: {
    locale: "en-US",
    hero: {
      eyebrow: "Visit the Observatory",
      title: ["Plan your", "experience."],
      text: "Choose a demo date and send a request. No time slot represents real availability.",
    },
    aside: {
      eyebrow: "Before you come",
      title: "Useful information",
      location: { title: "Location", value: "Aratuba, Ceará, Brazil", note: "Exact address provided after confirmation." },
      tips: {
        title: "Recommendations",
        text: "Wear comfortable clothes and be ready for an outdoor experience. Official guidance will be provided by the host.",
      },
      note: "Hours, duration, prices and rules are still to be defined by the observatory.",
    },
    steps: {
      date: { title: "Choose a date", text: "Demo calendar — does not represent real availability." },
      time: { title: "Choose a time", text: "First, select a date.", ready: "Demo time slots." },
      details: { title: "Your details", text: "Fill in to send the request." },
    },
    calendar: {
      prev: "Previous month",
      next: "Next month",
      available: "Available",
      unavailable: "Unavailable",
      selected: "Selected",
    },
    form: {
      name: "Full name",
      email: "Contact email",
      visitors: "Number of visitors",
      submit: "Request booking",
      note: "This request does not confirm the booking automatically.",
      sent: "Request recorded (demo). No data was sent.",
    },
  },
};
