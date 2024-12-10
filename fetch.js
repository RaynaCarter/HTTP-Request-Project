const btn = document.getElementById("btn");
btn.addEventListener("click", getUsers);

function getUsers(e){
    e.preventDefault();
    //fetching from user.json file
    // using fetch API
    // fetch is an async func that makes a 'Promise"
    // The Promise resolves to the response object
    // response handling: the then() method is called on the "Promise" 
    // returned by fetch. The method takes a function as an argumet, which 
    // recieves the response object
    fetch("users.json").then(function(response){
        return response.json();
    })
    // now we want to be able to access the data
    // chains another then method
    // this function which is passes a parameter returns parsed data.json
    .then(function(data){
        let output = "";
            data.forEach(function(user) {
                output += `
                    <hr>
                    <ul>
                        <li>ID: ${user.id}</li>
                        <li>Name: ${user.name}</li>
                        <li>Age: ${user.age}</li>
                        <li>Email: ${user.email}</li>
                    </ul>
                `; 
        })
        document.getElementById("users").innerHTML = output;
    } )  
}