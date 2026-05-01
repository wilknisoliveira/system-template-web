import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./Login.scss";

export default function Login() {
  return (
    <>
      <section>
        <div className="main-container">
          <div className="auth-section login-section">
            <div className="login-section-content">
              <h1>Sign in</h1>
              <Form className="d-grid gap-2">
                <Form.Group className="mb-3" controlId="login.email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="user@email.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="login.password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Your security password"
                  />
                </Form.Group>
                <Button type="submit" variant="primary">
                  Sign in
                </Button>
              </Form>
            </div>
          </div>
          <nav className="auth-section side-section">
            <h2>Welcome back!</h2>
          </nav>
        </div>
      </section>
    </>
  );
}
