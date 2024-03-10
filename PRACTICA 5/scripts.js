class Banco{
    constructor(nombre, cuenta, saldoDisponible){
        this.nombre=nombre
        this.cuenta=cuenta
        this.saldoDisponible=saldoDisponible
    }

    get Nombre(){
        return this.nombre
    }

    set Nombre(nombre){
        return this.nombre=nombre
    }

    get Cuenta(){
        return this.cuenta
    }

    set Cuenta(cuenta){
        return this.cuenta=cuenta
    }

    get SaldoDisponible(){
        return this.saldoDisponible;
    }

    set SaldoDisponible(Saldo){
        return this.saldoDisponible= Saldo
    }

    retiro(cantidad){
        if(cantidad>this.saldoDisponible){
            return "Saldo insuficiente, su saldo es $"+this.saldoDisponible
        }else{
           return "Retiro con éxito, su saldo actual es $"+(this.saldoDisponible=this.saldoDisponible-cantidad)
        }
    }

    abono(cantidad){
        return "Saldo actualizado, su saldo es $"+(this.saldoDisponible=this.SaldoDisponible+cantidad) 
    }
}

const btnRetiro = document.getElementById("btnRetiro")
const cliente =new Banco("Leonardo diCaprio", "00000-2", 0)

const btnAbono=document.getElementById("btnAbono")


btnRetiro.addEventListener("click",()=>{
const cantidad=document.getElementById("cantidad").value

const response=document.getElementById("respuesta")

response.innerText=cliente.retiro(cantidad)

})

btnAbono.addEventListener("click", ()=>{
const cantidad=parseFloat(document.getElementById("cantidad").value) 

const response=document.getElementById("respuesta")

response.innerText=cliente.abono(cantidad)
})