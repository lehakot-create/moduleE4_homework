// Задание 4.
function Device(name,power){
    this.name = name
    this.status = false
    this.power = power //per second
    this.start = 0
    this.stop = 0
    this.changeStatus = function(){
        if(this.status){
            this.status = false
            this.stop = Date.now()
            console.log(`Electricity used: ${(this.stop-this.start) * this.power}`)
            this.start = 0
            this.stop = 0
        } else {
            this.status = true
            this.start = Date.now()
        }
    }
}

const iron = new Device('IronMan', 5)
iron.waterLevel = 0
iron.addWater = function(water){
    this.waterLevel += water
}

const grill = new Device('Grill', 10)
grill.recipe = {'meat': 10000, 'fish': 5000}
grill.letsCook = function(food){
    if(food in this.recipe){
        this.changeStatus()
        console.log(grill)
        console.log(`Start cooking ${food}`)
        setTimeout(()=>{
            console.log(`${food} is ready`)
            this.changeStatus()
        }, this.recipe[food])
        console.log(grill)
    }
}

console.log(grill)
grill.letsCook('meat')

console.log(iron)
iron.addWater(5)
iron.changeStatus()
console.log(iron)
setTimeout(() =>{
    iron.changeStatus()
    console.log(iron)
}, 3000)