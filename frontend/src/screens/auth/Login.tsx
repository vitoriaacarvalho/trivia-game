import { Input } from "@trivia/components/Input";
import { Header } from "@trivia/components/layout/Header";
import { Button } from "@trivia/components/Button";

export function Login() {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex items-center justify-center p-4 mt-8">
          <div className="rounded-lg p-8 max-w-sm w-full backdrop-blur-sm">
            <h1 className="text-2xl mb-4 text-center">Sign in</h1>
            <Input type="email" placeholder="email" />
            <Input type="password" placeholder="password" />
            <Button fullWidth className="mt-4">
              Login
            </Button>
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