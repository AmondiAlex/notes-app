console.log("awesome notes");

// add new element
const newParagraph = document.createElement("p");
newParagraph.textContent = "Juliet likes dancing";
document.querySelector("body").appendChild(newParagraph);

const note1 = [
    {
        title: "My next trip",
        body: "awesome spain it is",
    },
    {
        title: "attend book session",
        body: "london arts",

    },
    {
        title: "book iam reading",
        body: "safe harbour",
    },
    {
        title: "javascript conference",
        body: "amsterdam center, netherlands",
    },
    {
        title: "fomula1",
        body: "qatar rally",
    },
];

note1.forEach(function(note){
    const p = document.createElement("p");
    p.textContent = note.title;
    document.querySelector("body").appendChild(p);
});


note1.forEach(function(note){
    const p =document.createElement("p");
    p.textContent = `${note.title}---${note.body}`;
    document.querySelector("body").appendChild(p);
});

//document.querySelector("button").addEventListener("click", function(event){
    //console.log(event);
    //event.target.textContent = "the button was clicked";
//});

document
 .querySelector("#createNote")
 .addEventListener("click",function(event){
    document.querySelectorAll("p").forEach(function
        (item){
            item.create();
        });
 });

 document
 .querySelector("#removeNotes")
 .addEventListener("click",function(event){
    document.querySelectorAll("p").forEach(function
        (item){
            item.remove();
        });
 });



