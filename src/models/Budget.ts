export class Budget {

    id: number
    customerId : number
    amount : number
    projectName: string

    constructor(id: number, customerId: number, amount: number, projectName: string){
        this.id = id
        this.customerId = customerId
        this.amount = amount
        this.projectName = projectName
    }
}