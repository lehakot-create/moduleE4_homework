// Задание 5.
class Device {
    constructor(name, power) {
        this.name = name
        this.status = false
        this.power = power //per second
        this.start = 0
        this.stop = 0
    }
    changeStatus() {
        if (this.status) {
            this.status = false
            this.stop = Date.now()
            console.log(`Electricity used: ${(this.stop - this.start) * this.power}`)
            this.start = 0
            this.stop = 0
        } else {
            this.status = true
            this.start = Date.now()
        }
    }
}

class Iron extends Device {
    constructor(name, power) {
        super(name, power);
        this.waterLevel = 0
    }
    addWater (water){
        this.waterLevel += water
    }
}

class Grill extends Device {
    constructor(name, power) {
        super(name, power)
        this.recipe = {'meat': 10000, 'fish': 5000}
    }
    letsCook(food) {
        if (food in this.recipe) {
            super.changeStatus()
            console.log(this)
            console.log(`Start cooking ${food}`)
            setTimeout(() => {
                console.log(`${food} is ready`)
                super.changeStatus()
            }, this.recipe[food])
            console.log(this)
        }
    }
}

const grill = new Grill('Grill', 100)
console.log(grill)
grill.letsCook('meat')


const iron = new Iron('IronMan', 10)
console.log(iron)
iron.addWater(5)
iron.changeStatus()
console.log(iron)
setTimeout(() =>{
    iron.changeStatus()
    console.log(iron)
}, 3000)