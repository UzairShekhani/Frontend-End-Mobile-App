var users = [
    {
        profilePic:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXQlNUN8ZW58MHx8MHx8fDA%3D",
        displayPic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXQlNUN8ZW58MHx8MHx8fDA%3D",
        pendingMessages: 4,
        location: "karachi , Pakistan",
        name: "Uzair",
        age: 18,
        interests: ["Music" , "Painting"],
        bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, et aliquid, nam debitis neque quas voluptatibus hic",
        isFriend: null
    },
    {
        profilePic:"https://images.unsplash.com/photo-1528892952291-009c663ce843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHBvcnRyYWl0fGVufDB8fDB8fHww",
        displayPic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXQlNUN8ZW58MHx8MHx8fDA%3D",
        pendingMessages: 4,
        location: "karachi , Pakistan",
        name: "Adil Ahmed",
        age: 33,
        interests: ["Music" , "Painting"],
        bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, et aliquid, nam debitis neque quas voluptatibus hic",
        isFriend: null
    },
    {
        profilePic:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBvcnRyYWl0fGVufDB8fDB8fHww",
        displayPic: "https://images.unsplash.com/photo-1712847331947-9460dd2f264b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8cG9ydHJhaXQlNUN8ZW58MHx8MHx8fDA%3D",
        pendingMessages: 4,
        location: "karachi , Pakistan",
        name: "Sadia",
        age: 28,
        interests: ["Music" , "Painting"],
        bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, et aliquid, nam debitis neque quas voluptatibus hic",
        isFriend: null
    },
    {
        profilePic:"https://images.unsplash.com/photo-1519895609939-d2a6491c1196?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHBvcnRyYWl0fGVufDB8fDB8fHww",
         displayPic: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXQlNUN8ZW58MHx8MHx8fDA%3D",
        pendingMessages: 4,
        location: "karachi , Pakistan",
        name: "Rabia",
        age: 5,
        interests: ["Music" , "Painting"],
        bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, et aliquid, nam debitis neque quas voluptatibus hic",
        isFriend: null
    },
    {
        profilePic:"https://plus.unsplash.com/premium_photo-1683140621573-233422bfc7f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHBvcnRyYWl0fGVufDB8fDB8fHww",
        displayPic: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnRyYWl0JTVDfGVufDB8fDB8fHww",
        pendingMessages: 4,
        location: "karachi , Pakistan",
        name: "Anabia",
        age: 4,
        interests: ["Music" , "Painting"],
        bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, et aliquid, nam debitis neque quas voluptatibus hic",
        isFriend: null
    },

]
function select(elem){
    return document.querySelector(elem)
}

var curr = 0;

(function setInitial() {
    select(".maincard img").src = users[curr].displayPic;
    select(".incomingcard img").src = users[curr + 1].displayPic;

    select(".prflimg img").src = users[curr].profilePic
    select(".badge h2").textContent = users[curr].pendingMessages
    select(".location h3").textContent = users[curr].location
    select(".name h1:nth-child(1)").textContent = users[curr].name
    select(".name h1:nth-child(2)").textContent = users[curr].age


    curr = 2
})();
