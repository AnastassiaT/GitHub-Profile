const gitHub = new Github;
const ui = new UI;

gitHub.getUserData()
.then(data => {
    console.log(data.profile);
    console.log(data.repo);

    ui.showProfile(data.profile);
});