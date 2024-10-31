
export default function Home() {
  return (
    <main
      className="background bg-cover bg-no-repeat h-screen bg-center text-black"
      >
    
      <div className="flex items-center justify-center h-full bg-green-500-300 bg-opacity-60 p-4 md:p-8">
        <div className="max-w-3xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to My Website,Shaista's Portfolio</h1>
          <p className="text-lg md:text-xl mb-6 font-serif">Hello, I'm Shaista </p>
          <p className="text-xl">HR Executive & Budding Frontend Developer</p>

          <p className="text-lg md:text-xl mb-6">This is my assignment; you can check the details on my pages.</p>
          <button className="neon-button bg-neonGreen text-white font-bold py-2 px-4 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neonGreen focus:outline-none">
  Click Me
</button>

        </div>
      </div>
    </main>
  );
}