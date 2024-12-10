// Load all users
const btn = document.getElementById("btn");
btn.addEventListener("click", getUsers);

// Create function getUsers
function getUsers(e){
    e.preventDefault();
// instantiates the new request object
    const http = new XMLHttpRequest();
// the true refers to weather its async or not 
// action, file location, async?
    http.open("GET", "users.json", true);

    http.onload = function() {
        // 200 is the code that is return when it's successful 
        // similar how 404 is the "site not found" code
        if (this.status === 200) { 
            const users = JSON.parse(this.responseText);
            let output = "";
            users.forEach(function(user) {
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
        }
    }

    http.send();
} 