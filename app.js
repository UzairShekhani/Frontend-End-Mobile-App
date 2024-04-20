let users = [
    {
        profilePic:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXQlNUN8ZW58MHx8MHx8fDA%3D",
        displayPic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXQlNUN8ZW58MHx8MHx8fDA%3D",
        pendingMessages: 4,
        location: "karachi , Pakistan",
        name: "Uzair",
        age: 18,
        interests: [{
            interests: "Painting",
            incon: `<i class="ri-paint-brush-fill"></i>`
        },{
            interests: "Music",
            incon: `<i class="ri-music-fill"></i>`
        }],
        bio: "Hi there! I'm Uzair, a passionate Web Developer   ",
        isFriend: null
    },
    {
        profilePic:"https://images.unsplash.com/photo-1528892952291-009c663ce843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHBvcnRyYWl0fGVufDB8fDB8fHww",
        displayPic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXQlNUN8ZW58MHx8MHx8fDA%3D",
        pendingMessages: 4,
        location: "karachi , Pakistan",
        name: "Adil",
        age: 33,
        interests: [{
            interests: "Painting",
            incon: `<i class="ri-paint-brush-fill"></i>`
        },{
            interests: "Music",
            incon: `<i class="ri-music-fill"></i>`
        }],
        bio: "Hi there! I'm Adil Ahmed, a passionate MERN stack Developer   ",
        isFriend: null
    },
    {
        profilePic:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBvcnRyYWl0fGVufDB8fDB8fHww",
        displayPic: "https://images.unsplash.com/photo-1712847331947-9460dd2f264b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8cG9ydHJhaXQlNUN8ZW58MHx8MHx8fDA%3D",
        pendingMessages: 4,
        location: "karachi , Pakistan",
        name: "Sadia",
        age: 28,
        interests: [{
            interests: "Painting",
            incon: `<i class="ri-paint-brush-fill"></i>`
        },{
            interests: "Music",
            incon: `<i class="ri-music-fill"></i>`
        }],
        bio: "Hi there! I'm Sarah, a passionate Prompt Engineer     ",
        isFriend: null
    },
    {
        profilePic:"https://images.unsplash.com/photo-1519895609939-d2a6491c1196?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHBvcnRyYWl0fGVufDB8fDB8fHww",
         displayPic: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXQlNUN8ZW58MHx8MHx8fDA%3D",
        pendingMessages: 4,
        location: "karachi , Pakistan",
        name: "Rabia",
        age: 5,
        interests: [{
            interests: "Painting",
            incon: `<i class="ri-paint-brush-fill"></i>`
        },{
            interests: "Music",
            incon: `<i class="ri-music-fill"></i>`
        }],
        bio: "Hi there! I'm Sarah, a Student    ",
        isFriend: null
    },
    {
        profilePic:"https://plus.unsplash.com/premium_photo-1683140621573-233422bfc7f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHBvcnRyYWl0fGVufDB8fDB8fHww",
        displayPic: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnRyYWl0JTVDfGVufDB8fDB8fHww",
        pendingMessages: 4,
        location: "karachi , Pakistan",
        name: "Anabia",
        age: 4,
        interests: [{
            interests: "Painting",
            incon: `<i class="ri-paint-brush-fill"></i>`
        },{
            interests: "Music",
            incon: `<i class="ri-music-fill"></i>`
        }],
        bio: "Hi there! I'm Sarah, a Baby   ",
        isFriend: null
    },

]
function select(elem){
    return document.querySelector(elem)
}

let curr = 1;

(function setInitial( ) {
    select(".maincard img").src = users[curr].displayPic;
    select(".incomingcard img").src = users[curr + 1].displayPic;

    select(".prflimg img").src = users[curr].profilePic
    select(".badge h2").textContent = users[curr].pendingMessages
    select(".location h3").textContent = users[curr].location
    select(".name h1:nth-child(1)").textContent = users[curr].name
    select(".name h1:nth-child(2)").textContent = users[curr].age
    
    let clutter = ""
    users[curr].interests.forEach(function(interests){
        clutter += `<div class="tag flex items-center bg-white/30 px-5 py-2 rounded-full gap-3">
            ${interests.incon}
            <h3 class="text-lg tracking-tight capitalize">${interests.interests}</h3>
        </div>`
    })

    select(".tags").innerHTML = clutter ;

    select(".bio").textContent = users[curr].bio

    curr = 2
})();



function imageChange() {
    let tl = gsap.timeline ()

    tl.to(".maincard" , {
        scale: 1.1,
        opacity: 0,
        ease : Circ,
        duration : .9
    })

};

let deny = select(".deny")
let accept = select(".accept")

deny.addEventListener("click",function(){
    imageChange()
})