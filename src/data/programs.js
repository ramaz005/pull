/**
 * Program cards rendered by the Programs section (ProgramCard.jsx).
 * `featured` highlights a single program with an accent border/badge.
 */
export const programs = [
  {
    id: "children",
    icon: "Baby",
    title: "Дети от 5 лет",
    ageGroup: "5–12 лет",
    description:
      "Игровое и структурированное знакомство с водой и основами техники для юных новичков.",
    benefits: ["Уверенность на воде", "Основы техники плавания", "Обучение через игру"],
    ctaLabel: "Подробнее о программе",
    ctaHref: "#contact",
    featured: false,
  },
  {
    id: "teenagers",
    icon: "Users",
    title: "Подростки",
    ageGroup: "13–17 лет",
    description:
      "Занятия с упором на форму: оттачиваем технику, развиваем выносливость и готовим подростков к командному или индивидуальному плаванию.",
    benefits: ["Продвинутая техника", "Выносливость и ОФП", "Занятия в группе сверстников"],
    ctaLabel: "Подробнее о программе",
    ctaHref: "#contact",
    featured: false,
  },
  {
    id: "adults",
    icon: "UserRound",
    title: "Взрослые",
    ageGroup: "Любой возраст",
    description:
      "Учиться никогда не поздно. Занятия без осуждения — от абсолютных новичков до взрослых, оттачивающих технику.",
    benefits: ["Комфортный темп для новичков", "Фитнес и снятие стресса", "Гибкие вечерние занятия"],
    ctaLabel: "Подробнее о программе",
    ctaHref: "#contact",
    featured: true,
  },
  {
    id: "private",
    icon: "UserCheck",
    title: "Индивидуальные занятия",
    ageGroup: "Любой возраст",
    description:
      "Персональные тренировки под ваши цели, страхи или спортивные задачи — в комфортном для вас темпе.",
    benefits: ["Внимание тренера один на один", "Индивидуальные планы занятий", "Самый быстрый прогресс"],
    ctaLabel: "Записаться на занятие",
    ctaHref: "#contact",
    featured: false,
  },
  {
    id: "group",
    icon: "UsersRound",
    title: "Групповые занятия",
    ageGroup: "Любой возраст",
    description:
      "Занятия в группах , сочетающие структурированное обучение и удовольствие учиться вместе со сверстниками.",
    benefits: ["Здоровая конкуренция для детей","Общение и мотивация", "Ниже стоимость занятия"],
    ctaLabel: "Записаться в группу",
    ctaHref: "#contact",
    featured: false,
  },
  {
    id: "competition",
    icon: "Trophy",
    title: "Соревновательная подготовка",
    ageGroup: "От 10 лет",
    description:
      "Структурированные тренировки для пловцов, готовящихся к соревнованиям: разбор техники, старты и повороты, раскладка на дистанции.",
    benefits: ["Работа на соревновательной скорости", "Старты, повороты и финиши", "Подготовка к стартам"],
    ctaLabel: "Вступить в команду",
    ctaHref: "#contact",
    featured: false,
  },
];
