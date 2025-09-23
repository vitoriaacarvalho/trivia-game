import { Header } from "../layout/Header";

export function Login() {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex items-center justify-center p-4 mt-8">
          <div className="auth-card">
            <h1 className="text-2xl mb-4 text-center">Sign in</h1>
            <input type="email" placeholder="email" className="auth-input" />
            <input type="password" placeholder="password" className="auth-input" />
            <button className="auth-button mt-4">Login</button>
            <div className="text-center mt-4">
              <a href="/register" className="auth-link">create account</a>
            </div>
          </div>
        </div>
      </div>
    );
}