import { Header } from "@trivia/components/layout/Header";
import { Input } from "@trivia/components/Input";

export function Register() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex items-center justify-center p-4 mt-8">
        <div className="bg-card rounded-lg p-8 max-w-sm w-full backdrop-blur-sm shadow-card">
          <h1 className="text-2xl mb-4 text-center">Sign up</h1>
          <Input type="email" placeholder="email" />
          <Input type="password" placeholder="password" />
          <button className="w-full py-3 rounded-lg font-semibold text-text bg-gradient-primary shadow-card transition-all duration-200 hover:bg-gradient-primary-hover hover:shadow-card-hover mt-4">
            Register
          </button>
          <div className="text-center mt-4">
            <p>
              Already have an account?{" "}
              <a href="/login" className="text-sm text-primary transition-colors duration-200 hover:text-accent">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
