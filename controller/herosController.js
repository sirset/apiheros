import dataHero from "../service/datahero.js";

const datahero = new dataHero();
export default class herosController{
    async getheros(){
        let heros = await datahero.getHeros();
        console.log(heros);
        return heros;
    }
    async gethero(id){
        let hero = await datahero.getHero(id);
        console.log(hero);
        if(hero){
            return hero;
        }else{
            return ;
        }
        
    }
    async postHero(body){
        let hero = await datahero.postHero(body);
        console.log(hero);
        return hero;
    }
    async deletehero(id){
        let hero = await datahero.delHero(id);
        console.log(hero);
        return hero;
    }
}