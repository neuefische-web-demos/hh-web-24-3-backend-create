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
}
