// console.log('loaded')

var nameInList = ['Ann','Esterine','Mercy','Sebo'];
// console.log(nameInList);

let nameTaken = [];

// console.log(nameTaken);

function submit(){
    // console.log(submit)
    var newWay = document.getElementById('cardset').value
    // console.log(newWay);
    var myList = nameInList.includes(newWay)
    // console.log(myList);

    if (myList){
        // console.log('registered')
        $('h4#result').html('You are registered')
        // document.getElementById('cardset').value = newWay
        // console.log(newWay);
    let personEaten = nameTaken.includes(newWay);
        // console.log(personEaten);

        nameTaken.push(newWay)
        console.log(nameTaken);
        // $('p#para').html(nameTaken)

        // console.log(nameInList[newWay])
        if(personEaten){
            alert("you have eaten")
            // nameInList.includes(newWay)
        }else {
            // console.log("You haven't eaten")
            $('h5#ans').html("You haven't eaten")
        }

    }else{
        // console.log('you are not registered')
        $('p#now').html('You are not registered')
    }
};

