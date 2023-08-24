function cb(){
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value
    let bmi =(weight /(height *  height)) *( 703)
    console.log(bmi)
    
    document.getElementById('abd').innerHTML ="<b>Your BMI is -</b>" + bmi
}