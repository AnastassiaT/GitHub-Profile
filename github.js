class Github{
    constructor(){
        this.client_id = '1341fcdbbf6663419d61';
        this.client_secret= '0bd70f37eaab536a96d5dc1823a67a7ad7a00252';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
        this.user = 'AnastassiaT';
    }

    //get a user info

    async getUserData(user){
        //`` - backticks
        let url = `https://api.github.com/${this.user}?client_id=${this.client_id}&client_secret=${this.client_secret}`;
        let urlRepos = `https://api.github.com/${this.user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`;
        const profileResponse = await fetch(urlProfile);
        const reposResponse = await fetch(urlRepos);
    }
}