class UI{
    constructor() {
        this.profile = document.getElementById("profile");
    }

    showprofile(user) {
        this.profile.innerHTML =`
        <div class="card-body">
                <div class="row">
                    <div class="primary-column">
                        <img class="profile-picture" src="${user.avtar_url}"></img>
                        <a href="${user.html_url}" target="">View Profile</a>
                    </div>
                    <div class="wrapper-column">
                        <div class="secondary-column">
                            <span class="badge-primary">Public Repos: ${user.public_repos}</span>
                            <span class="badge-secondary">Public Gists: ${user.public_gists}</span>
                            <span class="badge-success">Followers: ${user.followers}</span>
                            <span class="badge-info">Following: ${user.following}</span>
                        </div>
                        <ul>
                            <li class="list-group-item company"><span class="thick">Company:</span>${user.company}</li>
                            <li class="list-group-item blog"><span class="thick">Website/blog:</span><a href="${user.blog}" target="_blank">$</a></li>
                            <li class="list-group-item location"><span class="thick">Location:</span>${user.location}</li>
                            <li class="list-group-item member"><span class="thick">Member Since:</span>${convertTime(user.created_at)}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading">Latest Repos</h3>
            <div id="repos">

                </div>`;
                
        
    }
    showrepos() {
        
    }
}