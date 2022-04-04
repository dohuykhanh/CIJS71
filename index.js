
async function getData(){
    
    try {
    const request= await fetch("https://api.shrtco.de/v2/");
    const response =  await request.json();
    return response.data;
    
    } catch (error) {
        console.log(error);
    }
}
getData().then(user => {
    console.log(user)
})

// function API() {
//     fetch('https://api.shrtco.de/v2/').then((res) => {
//         console.log(res);
//         return res.json();
//     }).then((data) => {
//         console.log(data);
//     })
// }
// API();