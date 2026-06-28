export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <h1 className="text-2xl font-bold">Recipes Website</h1>
      <p>
        Welcome to the Recipes Website where you will find the best recipes.
      </p>

      <section className="mt-10 underline">
        <a href="/recipes">Click here to go to all recipes.</a>
      </section>
    </div>
  );
}
