export function Header() {
  return (
    <header className="w-full mb-8 mt-10">
      <div className="container mx-auto px-4 py-4 flex justify-center">
        <div className="text-center mb-8">
          <h1
            className="text-5xl font-extrabold uppercase tracking-wide whitespace-nowrap"
            style={{
              fontFamily: "Pixelify Sans, monospace",
              background: "linear-gradient(90deg, #FF79C6, #8BE9FD, #BD93F9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow:
                "0 0 10px rgba(255,121,198,0.7), 0 0 20px rgba(139,233,253,0.5), 0 0 30px rgba(189,147,249,0.5)",
            }}
          >
            Dev <span className="text-dracula-pink">Trivia</span>
          </h1>
        </div>
      </div>
    </header>
  );
};
