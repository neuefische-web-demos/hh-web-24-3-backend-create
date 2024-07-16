import useSWR from 'swr';

export default function JokeForm() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const jokedata = Object.fromEntries(formData);

    console.log('The New Joke', jokedata);

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
