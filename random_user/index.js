const api_url = 'https://randomuser.me/api';
async function getUser() {
    const response = await fetch(api_url, {
        method:"GET",
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        }
    });
    const data = await response.json();
    console.log(data.results);

    let user = data.results[0];
    let {title, first, last} = user.name;
     let fullname = title+" "+first+" "+last
    console.log(fullname);
}

getUser();