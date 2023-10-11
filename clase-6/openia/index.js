const tectalicOpenai = require('@tectalic/openai').default
const openIAClient = tectalicOpenai(process.env.OPENAI_API_KEY)

// openIAClient.chatCompletions.create({
//     model: 'gpt-4',
//     messages: [{ role: 'user', content: '' }]
//   })
//   .then((response) => {
//     console.log(response.data.choices[0].message.content.trim());
//   });

// openIAClient.imagesGenerations.create({
//     prompt: 'A cute baby sea otter wearing a hat',
//     size: '256x256',
//     n: 5
//   })
//   .then((response) => {
//     console.log(response.data.data)
//   });