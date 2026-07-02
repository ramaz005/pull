/**
 * Pricing plan cards rendered by the Pricing section (PricingCard.jsx).
 * Prices are illustrative placeholders - update to match your actual rate card.
 */
export const pricing = [
  {
    id: "kids",
    planName: "Абонемент «Дети»",
    price: 7990,
    billingPeriod: "месяц",
    description: "Идеально для юных новичков, обретающих уверенность на воде.",
    features: [
      { text: "2 групповых занятия в неделю", included: true },
      { text: "Индивидуальные тренировки", included: false },
      { text: "Доступ в соревновательную группу", included: false },
      { text: "Возможность выполнение разряда", included: true },
    ],
    ctaLabel: "Выбрать план",
    isPopular: false,
  },
  {
    id: "adults",
    planName: "Абонемент «Взрослые»",
    price: 10990,
    billingPeriod: "месяц",
    description: "Гибкое обучение для новичков и любителей плавания.",
    features: [
      { text: "2 групповых занятия в неделю", included: true },
      { text: "Вечерние занятия и выходные", included: true },
      { text: "Индивидуальные тренировки", included: false },
      { text: "Рекомендации по питанию и восстановлению", included: false },
    ],
    ctaLabel: "Выбрать план",
    isPopular: false,
  },
  {
    id: "private",
    planName: "Индивидуальные занятия",
    price: 3490,
    billingPeriod: "занятие",
    description: "Персональные тренировки под ваши цели.",
    features: [
      { text: "Персональный тренер один на один", included: true },
      { text: "Индивидуальный план занятий", included: true },
      { text: "Гибкое расписание", included: true },
      { text: "Разбор прогресса на каждом занятии", included: true },
      { text: "Приоритетная запись", included: true },
    ],
    ctaLabel: "Записаться",
    isPopular: false,
  },
  {
    id: "premium",
    planName: "OФП + Занятие в бассейне ",
    price: 15990,
    billingPeriod: "месяц",
    description: "Наш самый популярный абонемент — групповые тренировки 2 в 1. Упражнения для общего поддержание физической формы, а также тренировка в бассейне. ",
    features: [
      { text: "Групповые и индивидуальные занятия", included: true },   
      { text: "Приоритетное расписание", included: true },
      { text: "Доступ в соревновательную группу", included: true },
      { text: "Бесплатная ежегодная оценка навыков", included: true },
    ],
    ctaLabel: "Оформить Премиум",
    isPopular: true,
  },
];
