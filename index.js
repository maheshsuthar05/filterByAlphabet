var arr = ['apple', 'mango', 'banana', 'apricot', 'blueberry', 'coconut', 'dragonfruit', 'grapes', 'jackfruit'];
var sortedArr = arr.sort();
var filter = 'none';

//Displaying all items from the list
displayFilteredData(filter);

//creating alphabet filer buttons
for (i = 'A'.charCodeAt(); i <= 'D'.charCodeAt(); i++) {
    var button = $('<button>').text(String.fromCharCode(i)).addClass('btn')
    $('#btn-group').append(button)
}
var button = $('<button>').text('none').addClass('btn active')
$('#btn-group').append(button)


//checking which one is clicked and giving active class
var buttons = document.getElementsByClassName('btn')
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active");
        }
        this.classList.add("active");
        displayFilteredData(this.innerText)
    }
}

//function to filter based on what user clicked
function displayFilteredData(ch) {
    var contentContainer = document.getElementById('content-container');
    contentContainer.innerHTML = '';

    if(ch === 'none'){
        for (var i = 0; i < sortedArr.length; i++) {
            console.log(sortedArr[i])
            var entry = document.createElement('p');
            entry.className = 'list'
            entry.innerText = sortedArr[i]
            contentContainer.append(entry)
        }
    }

    else{
        console.log(ch)
        var filteredArr = sortedArr.filter(item => item[0].toLowerCase() === ch.toLowerCase())
        for (var i = 0; i < filteredArr.length; i++) {
            var entry = document.createElement('p');
            entry.className = 'list'
            entry.innerText = filteredArr[i]
            contentContainer.append(entry)
        }
    }
}