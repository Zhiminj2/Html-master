// function callAPI(){
//     var inputField = document.getElementById("query");
//     let searchQuery = inputField.value;
//     console.log(searchQuery + " llll");
//     fetch('https://zillow56.p.rapidapi.com/search?location=11209', + searchQuery, {
        
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "zillow56.p.rapidapi.com",
//             "x-rapidapi-key": "5369683703msh0d8168b0fd53192p121c77jsn2464802197da"
//         }
//     })
//     .then(response => response.json())
//     .then(response => {
//         console.log(response);
        
//         // for(let i = 0; i < response.results.length; i++){
//             document.getElementById('bathrooms').innerHTML = response.results[2].bathrooms;
//             document.getElementById('streetAddress').innerHTML = response.results[2].streetAddress;
//             document.getElementById("lotAreaUnit").innerHTML = response.results[2].lotAreaUnit;
//             document.getElementById("imgSrc").innerHTML = response.results[2].imgSrc;
//             document.getElementById("bedrooms").innerHTML = response.results[2].bedrooms;
//             document.getElementById("lotAreValue").innerHTML = response.results[2].lotAreaValue;
//             document.getElementById("price").innerHTML = response.results[2].price;
//             document.getElementById("rentZestimate").innerHTML = response.results[2].rentZestimate;
//         // }
//     })
//     .catch(err => {
//         console.log(err);
//     });

// }



// function callAPI() {
//     var inputField = document.getElementById("query");
//     let searchQuery = inputField.value;
//     console.log(searchQuery + " llll");
//     fetch('https://zillow56.p.rapidapi.com/search?location=' + searchQuery, {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "zillow56.p.rapidapi.com",
//             "x-rapidapi-key": "5369683703msh0d8168b0fd53192p121c77jsn2464802197da"
//         }
//     })
//     .then(response => response.json())
//     .then(response => {
//         console.log(response, "LL");
        
//         // Select the parent element where the cards will be appended
//         const outputContainer = document.querySelector(".output-shower");

//         // Create 10 identical cards
//         for (let i = 0; i < 10; i++) {
//         // Create the card element
//         const card = document.createElement("div");
//         card.className = "card";
        
//         // Create the image element
//         const image = document.createElement("img");
//         image.src = ""; // Add the image source here
//         image.alt = "House Image";
//         card.appendChild(image);
        
//         // Create the info container
//         const infoContainer = document.createElement("div");
//         infoContainer.className = "info-container";
        
//         // Create the unordered list element
//         const ul = document.createElement("ul");
        
//         // Create and append list items for each property
//         const properties = ["City", "Address", "Bedrooms", "Bathrooms", "Price"];
//         for (let j = 0; j < properties.length; j++) {
//             const property = properties[j];
            
//             // Create the list item element
//             const li = document.createElement("li");
            
//             // Create the span element for the property name
//             const spanProperty = document.createElement("span");
//             spanProperty.style.fontSize = "22px";
//             spanProperty.style.color = "royalblue";
//             spanProperty.textContent = property;
            
//             // Append the property name span to the list item
//             li.appendChild(spanProperty);
            
//             // Append the list item to the unordered list
//             ul.appendChild(li);
//         }
        
//         // Append the unordered list to the info container
//         infoContainer.appendChild(ul);
        
//         // Append the info container to the card
//         card.appendChild(infoContainer);
        
//         // Append the card to the output container
//         outputContainer.appendChild(card);
//         }


//         // const bathrooms = response.results[2].streetAddress;
//         // console.log(bathrooms, " bro?");
//         // document.getElementById('bathrooms').innerHTML = response.results[2].bathrooms;
//         // document.getElementById('streetAddress').innerHTML = response.results[2].streetAddress;
//         // document.getElementById("lotAreaUnit").innerHTML = response.results[2].lotAreaUnit;
//         // document.getElementById("imgSrc").innerHTML = response.results[2].imgSrc;
//         // document.getElementById("bedrooms").innerHTML = response.results[2].bedrooms;
//         // document.getElementById("lotAreValue").innerHTML = response.results[2].lotAreaValue;
//         // document.getElementById("price").innerHTML = response.results[2].price;
//         // document.getElementById("rentZestimate").innerHTML = response.results[2].rentZestimate;
//     })
//     .catch(err => {
//         console.log(err, "Lhuman");
//     });
// }




function callAPI() {
    var inputField = document.getElementById("query");
    let searchQuery = inputField.value;
    console.log(searchQuery + " llll");
    const outputContainer = document.querySelector(".output-shower");
    outputContainer.innerHTML = '';
    fetch('https://zillow56.p.rapidapi.com/search?location=' + searchQuery, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "zillow56.p.rapidapi.com",
            "x-rapidapi-key": "5369683703msh0d8168b0fd53192p121c77jsn2464802197da"
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log(response, "LL");

        const outputContainer = document.querySelector(".output-shower");

        console.log(response.results.length);
        for (let i = 0; i < response.results.length; i++) {
            const house = response.results[i];
            console.log("l");
            const card = document.createElement("div");
            card.className = "card";

            const image = document.createElement("img");
            image.src = house.imgSrc; 
            image.alt = "House Image";
            card.appendChild(image);

            const infoContainer = document.createElement("div");
            infoContainer.className = "info-container";

            const ul = document.createElement("ul");

            const properties = ["City", "Address", "Bedrooms", "Bathrooms", "Price"];
            for (let j = 0; j < properties.length; j++) {
                const property = properties[j];

                const li = document.createElement("li");

                const spanProperty = document.createElement("span");
                spanProperty.style.fontSize = "55px !important";
                spanProperty.style.color = "royalblue !important";

                spanProperty.textContent = property;

                li.appendChild(spanProperty);
                
                if (j==0){
                    li.textContent += " "+house.city;
                }

                else if (j==1){
                    li.textContent += " "+house.streetAddress;
                }

                else if (j==2){
                    li.textContent += " "+house.bedrooms;
                }

                else if (j==3){
                    li.textContent += " "+house.bathrooms;
                }

                else {
                    li.textContent += " $"+house.price;
                }
                

                ul.appendChild(li);
            }

            infoContainer.appendChild(ul);

            card.appendChild(infoContainer);

            outputContainer.appendChild(card);
        }
    })
    .catch(err => {
        console.log(err, "Lhuman");
    });
}


