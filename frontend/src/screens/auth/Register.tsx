import { Header } from "@trivia/components/layout/Header";
import { Input } from "@trivia/components/Input";
import { Button } from "@trivia/components/Button";

export function Register() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex items-center justify-center p-4 mt-8">
      <div className="rounded-lg p-8 max-w-sm w-full backdrop-blur-sm ">
          <h1 className="text-2xl mb-4 text-center">Sign up</h1>
          <Input type="email" placeholder="email" />
          <Input type="password" placeholder="password" />
          <Button fullWidth variant="secondary" className="mt-4">
            Register
          </Button>
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
