let article = document.querySelector("article");

fetch("https://api.github.com/users")
.then(res => {
    res.json()
    .then(data => {data.map(value => {
        let {avatar_url, login, html_url} = value;
        article.innerHTML +=
        `<div class= "card">
            <img src = ${avatar_url} alt="image is not loaded">
            <h2>${login}</h2>
            <a href=${html_url} target = "_blank">Goto Profile</a>
        </div>`
    })
})
    .catch(err => {
        console.log(err);
    })
})
.catch(err => {
    console.log(err);
})
.finally(()=> {
    console.log("server responded....");
})