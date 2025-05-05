 export{}

interface Character {
    name : string;
    hp: number;
    showHp: () => void;

}

const heal = (character:Character, amount:number ) => {
    character.hp *=amount
}

const strider : Character = {
    name: "Strider",
    hp: 50,
    showHp() {
        console.log('life points',this.hp);
    } 
}

heal(strider,10);
strider.showHp(); 