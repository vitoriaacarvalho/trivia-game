export function Register() {
    return (
      <>
        <div className="auth-card">
          <h1 className="text-2xl mb-4 text-center">Sign up</h1>
          <input type="email" placeholder="email" className="auth-input" />
          <input type="password" placeholder="password" className="auth-input" />
          <button className="auth-button mt-4">Register</button>
          <div className="text-center mt-4">
            <p>Already have an account? <a href="/login" className="auth-link">Sign in</a></p>
          </div>
        </div>
      </>  
    );
}