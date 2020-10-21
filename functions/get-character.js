const fetch = require('node-fetch');

exports.handler = async () => {
  let characters = await getCharacters();

  let randomCharacter =
    characters[Math.round(Math.random() * (characters.length - 1))];

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
    },
    body: JSON.stringify(randomCharacter),
  };
};

const getCharacters = async () => {
  const response = await fetch(process.env.HASURA_URL, {
    method: 'POST',
    headers: {
      'X-Hasura-Admin-Secret': process.env.HASURA_ADMIN,
    },
    body: JSON.stringify({
      query: `
        query QueryCharacters {
            characters {
              name
              pronouns
              smell
            }
          }
      `,
      variables: {},
    }),
  }).then((res) => res.json());

  return response.data.characters;
};
