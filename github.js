class Github {
  constructor() {
    this.client_id = "440e1c61264892613154";
    this.client_secret = "eb2f23f4d1c76078a9f0de3150d5675ff4825dc0";
    (this.repos_count = 5), (this.repos_sort = "created: asc");
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile,
      repos,
    };
  }
}
