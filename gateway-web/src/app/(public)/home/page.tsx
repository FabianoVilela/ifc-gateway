

export default function Home() {
  return (
    <div className='grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20'>
      <main className='row-start-2 flex flex-col items-center gap-[32px] sm:items-start'>
        <h1 className='text-center font-bold text-4xl sm:text-left'>
          Welcome to the Invoice App
        </h1>
        <p className='text-center text-lg sm:text-left'>
          This is a simple invoice management application built with Next.js.
        </p>

      </main>

    </div>
  );
}
