export {}
class Ticket{
    constructor(public price:number){
    }
}

class Event {
    private tickets: Ticket[]
    constructor(...ticket: Ticket[]){
        this.tickets = ticket

    }
    addTicket(...ticket: Ticket[]){
        ticket.forEach(ticket => this.tickets.push(ticket))
    }
    get price(){
        let valor = 0
        for (const tickets of this.tickets){
            valor += tickets.price
        }
        return  valor
    }
}

class shoppingCart{
    private event: Event
    constructor(event: Event){
        this.event = event
    }
    
    addTicket(ticket:Ticket){
        this.event.addTicket(ticket)
    }
    get TotalPrice(): number{
        return this.event.price
    }
}


const tickets_rock = new Ticket(10.30)
const showderock = new Event(tickets_rock)
const cart = new shoppingCart(showderock)

console.log(showderock,tickets_rock,cart)
console.log(cart.TotalPrice);
