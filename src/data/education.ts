export type EducationLesson = {
  title: string;
  description: string;
};

export type EducationTopic = {
  title: string;
  description: string;
  lessons: EducationLesson[];
};

export const educationTopics: EducationTopic[] = [
  {
    title: "Forex Trading",
    description:
      "Build a practical understanding of currency markets, currency pairs, sessions and trading fundamentals.",
    lessons: [
      {
        title: "Understanding Currency Pairs",
        description:
          "Learn how base and quote currencies work and how currency prices are represented.",
      },
      {
        title: "Major, Minor and Exotic Pairs",
        description:
          "Understand the different categories of forex pairs and their typical market characteristics.",
      },
      {
        title: "Forex Market Sessions",
        description:
          "Explore London, New York, Tokyo and Sydney sessions and why liquidity changes throughout the day.",
      },
      {
        title: "Pips, Lots and Position Size",
        description:
          "Understand common forex terminology used when planning and evaluating trades.",
      },
    ],
  },

  {
    title: "Technical Analysis",
    description:
      "Learn how traders interpret price charts, market structure, trends, momentum and technical signals.",
    lessons: [
      {
        title: "Reading Price Charts",
        description:
          "Understand candlesticks, price movement and the information contained in different chart types.",
      },
      {
        title: "Support and Resistance",
        description:
          "Learn how important price areas can help structure market analysis.",
      },
      {
        title: "Trends and Market Structure",
        description:
          "Explore higher highs, higher lows, lower highs and lower lows.",
      },
      {
        title: "Momentum and Indicators",
        description:
          "Understand how technical indicators can complement price-based analysis.",
      },
    ],
  },

  {
    title: "Risk Management",
    description:
      "Develop a structured approach to position sizing, downside control and responsible trading decisions.",
    lessons: [
      {
        title: "Risk Per Trade",
        description:
          "Understand why predefined risk limits are an important part of a trading plan.",
      },
      {
        title: "Position Sizing",
        description:
          "Learn how position size can be adjusted according to account size and risk tolerance.",
      },
      {
        title: "Stop-Loss Planning",
        description:
          "Understand the purpose of predefined exit levels and invalidation points.",
      },
      {
        title: "Trading Psychology",
        description:
          "Explore discipline, consistency and the emotional challenges associated with market decisions.",
      },
    ],
  },
];

export const forexEducation = educationTopics[0];
export const technicalAnalysisEducation = educationTopics[1];
export const riskManagementEducation = educationTopics[2];