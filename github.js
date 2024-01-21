class Github {
    constructor() {
        this.client_id = "b70d119fd23c194b1e05";
        this.client_secret = "2c4957dff6ec6c71920ad1f99c532316b1c32cef";
        this.repos_count = 5;
        this.repos_sort = "created: asc";
    }
    
    async getUser(user) {
        try {
            const profileResponse = await fetch(
                `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
            );
    
            const repoResponse = await fetch(
                `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
            );
            if (!profileResponse.ok || !repoResponse.ok) {
                throw new Error('Unable to fetch data from GitHub API');
            }
    
            const profile = await profileResponse.json();
            const repos = await repoResponse.json();
    
            return {
                profile,
                repos,
            };
        }
        catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}