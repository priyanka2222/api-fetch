const api_url = "https://jsonplaceholder.typicode.com/posts";

async function createPosts() {
    let data = {
        title: "myPost",
        body: "This is a sample post",
        userId : 1
    }
    fetch(api_url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}
createPosts()