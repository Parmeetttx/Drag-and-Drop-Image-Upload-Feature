
function dragNdrop(event){
    var filename = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("preview");

    var previewImg = document.createElement("img");
        previewImg.setAttribute("src" , filename);

        preview.appendChild(previewImg);
}

function drag(){
    document.getElementById("uploadFile").parentNode.className = "draging dragBox";
}

function drop(){
    document.getElementById("uploadFile").parentNode.className = "dragBox";
}

// console.log(preview)