export const arrayItems = [
/*   {
    name: "Q&A",
    id: "q&a",
    description: "Answer questions based on existing knowledge",
    option: {
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },
  {
    name: "Grammer Correction",
    id: "grammerCorrection",
    description: "Corrects sentences into standard English.",
    option: {
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },
  {
    name: "Explain code",
    id: "explainCode",
    description: "Explain a complicated piece of code.",
    option: {
      model: "code-davinci-002",
      temperature: 0,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },
  {
    name: "JavaScript to Python",
    id: "jstopy",
    description: "Convert simple JavaScript expressions into Python.",
    option: {
      model: "code-davinci-002",
      temperature: 0,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  }, */
  {
    name: "Hotel Receptionist",
    id: "hotelReceptionist",
    description: "Chat simple terms as an hotel receptionist",
    option: {
      //model: "gpt-4",
      model: "gpt-3.5-turbo",
      temperature: 0,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      messages: [
        {
          role: "system",
          content: "You are a helpful and professional hotel receptionist.",
        },
        {
          role: "user",
          content: "Hello, I'd like to book a room.",
        },
      ],
    },
  },
];
