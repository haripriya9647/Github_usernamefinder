const github = new Github();

const ui = new UI();
const searchUser = document.getElementById("search-user");

searchUser.addEventListener("keyup", (e) => {
    const userText = e.target.value;

    if (userText !== "") {
        github.getUser(userText).then((data) => {
            if (data.profile.message === "Not Found") {
                
            } else {
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        });
    } else {
        ui.clearProfile();
    }
});

const convertTime = (time) => {
    return new Date(time).toLocaleDateString("en-us", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };