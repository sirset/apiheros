import Knex from 'knex';

const knex = Knex({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database : 'pruebahero'
    }
});

export default class dataHero{

    async getHeros(){
        let Rowheros = await knex.select("id","nombre","inteligencia","fuerza","velocidad","poder").from("heros");
        return JSON.parse(JSON.stringify(Rowheros));
    }

    async getHero(id){
        let Rowheros = await knex.select("id","nombre","inteligencia","fuerza","velocidad","poder").from("heros").where("id",id).first();
        if(Rowheros){
            return JSON.parse(JSON.stringify(Rowheros));
        }else{
            return null;
        }
    }
    async postHero(body){
        let Rowheros;
        console.log(body);
        if(this.validad(body)){
            Rowheros  = await knex("heros").insert(body);
            return Object.values(JSON.parse(JSON.stringify(Rowheros)));
        }else{
            return Rowheros =false;
        }
        return Object.values(JSON.parse(JSON.stringify(Rowheros)));
    }
    async delHero(id){
        console.log(id);
        let Rowheros = await knex("heros").where("id",id).del();
        return Object.values(JSON.parse(JSON.stringify(Rowheros)));
    }
    validad(body){
        if(!body.nombre || !body.inteligencia || !body.fuerza || !body.velocidad || !body.poder) return false;
        return true
    }
}