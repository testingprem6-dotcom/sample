class LoginPage {
  constructor(page) {
    this.page = page;

    this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#Password');
    this.signInButton = page.getByRole('button', { name: 'Sign in ' });
  }

  async navigate() {
    await this.page.goto('https://dev.apinova.ai/');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }
}

export default LoginPage;
