class MobileShop{
    constructor(){
        this.mobiles = [];
    }

    addMobiles(mobile){
        this.mobiles.push(...mobile)
    }

    listAllMobiles(){
        this.mobiles.forEach((mb , index)=>{
            console.log(`${index+1}) ${mb.brand} - ${mb.model}- ${mb.color} IMEMI${mb.imemi}`);
        })
    }
}

class Mobile{
    constructor(brand, model, price,color){
        this.brand = brand;
        this.imemi = Math.floor(Math.random()*100000);
        this.model = model;
        this.price = price;
        this.color = color;
    }

    getMobileInfo(){
        console.log(`${this.brand} -  ${this.model} = ${this.price}-${this.color} IMEMI${this.imemi}`);
    }
}


let myMobileShop= new MobileShop();

let samsung= new Mobile('Samsung','S25 ULTRA',120000,'gold')
let apple= new Mobile('Apple','16Pro',120000,'black')
let oneplus= new Mobile('OnePlus','13R',40000,'White')

myMobileShop.addMobiles([samsung,apple,oneplus])

  