import dbConnect from '../../../db/connect';
import Joke from '../../../db/models/Joke';

export default async function handler(request, response) {
  await dbConnect();

  // handle the GET request - - READ
  if (request.method === 'GET') {
    const jokes = await Joke.find();
    return response.status(200).json(jokes);
  }

  // handle the "POST" request - - CREATE

  if (request.method === 'POST') {
    try {
      const jokedata = request.body;

      // erstelle einen neuen Joke in der Datenbank
      await Joke.create(jokedata);

      console.log('THE BODY', jokedata);

      response.status(201).json({ status: 'Joke created!' });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
}
