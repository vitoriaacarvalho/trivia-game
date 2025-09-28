import { Header } from "@trivia/components/layout/Header";

export function Login() {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex items-center justify-center p-4 mt-8">
          <div className="bg-card rounded-lg p-8 max-w-sm w-full backdrop-blur-sm shadow-card">
            <h1 className="text-2xl mb-4 text-center">Sign in</h1>
            <input 
              type="email" 
              placeholder="email" 
              className="w-full px-4 py-3 my-3 rounded-lg bg-input-bg text-text border border-transparent transition-all duration-200 placeholder:text-placeholder focus:border-primary focus:shadow-[0_0_0_2px_theme(colors.accent)] focus:outline-none" 
            />
            <input 
              type="password" 
              placeholder="password" 
              className="w-full px-4 py-3 my-3 rounded-lg bg-input-bg text-text border border-transparent transition-all duration-200 placeholder:text-placeholder focus:border-primary focus:shadow-[0_0_0_2px_theme(colors.accent)] focus:outline-none" 
            />
            <button className="w-full py-3 rounded-lg font-semibold text-text bg-gradient-primary shadow-card transition-all duration-200 hover:bg-gradient-primary-hover hover:shadow-card-hover mt-4">
              Login
            </button>
            <div className="text-center mt-4">
              <a href="/register" className="text-sm text-primary transition-colors duration-200 hover:text-accent">
                create account
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}