import useSWR from 'swr';

export default function JokeForm() {
  const { mutate } = useSWR('/api/jokes');
  //
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const jokedata = Object.fromEntries(formData);

    console.log('The New Joke', jokedata);

    // POST request an /api/jokes (Server)

    const response = await fetch('/api/jokes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jokedata),
    });

    if (response.ok) {
      // dann möchten wir den neuen Joke aber auch sehen -- alle Jokes noch einmal fetchen
      mutate();
    }

    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="joke-input">Enter a new joke</label>
      <input type="text" id="joke-input" name="joke" />
      <button type="submit">Submit</button>
    </form>
  );
}
