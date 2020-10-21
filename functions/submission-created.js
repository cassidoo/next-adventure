const fetch = require('node-fetch');

exports.handler = async (event) => {
  let { name, gender, smell } = JSON.parse(event.body).payload.data;

  await addCharacter(name, gender, smell);

  return {
    statusCode: 200,
    body: `Character added: ${name}, ${gender}, ${smell}`,
  };
};

const addCharacter = async (name, pronouns, smell) => {
  const idCreated = await fetch(process.env.HASURA_URL, {
    method: 'POST',
    headers: {
      'X-Hasura-Admin-Secret': process.env.HASURA_ADMIN,
    },
    body: JSON.stringify({
      query: `
      mutation addCharacter($name: String!, $smell: String!, $pronouns: String!) {
        insert_characters_one(object: {name: $name, pronouns: $pronouns, smell: $smell}) {
          id
        }
      }
      `,
      variables: {
        name,
        pronouns,
        smell,
      },
    }),
  }).then((res) => res.json());

  return idCreated;
};
