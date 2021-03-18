

// Pizza construction

class Pizza{
    type = null
    size = null
    amount = null
    half = null
    sauce = null
    cost = null

    constructor(type, size, amount, half, sauce, cost){
        this.type = type
        this.size = size
        this.amount = amount
        this.half = half
        this.sauce = sauce
        this.cost = cost

        this.serve()
    }

    serve(){
        console.log('type', this.type)
        console.log('size', this.size)
        console.log('amount', this.amount)
        console.log('half', this.half)
        console.log('sauce', this.sauce)
        console.log('cost', this.cost)
    }
}

