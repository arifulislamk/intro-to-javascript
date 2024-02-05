function gettotalWoodPrice(tableQuantity, charQuantity, bedQuantity){
    const tabelWood = 3 ;
    const charWood = 2 ;
    const bedWood = 10 ;

    const tabelWoodNeed = tabelWood * tableQuantity ;
    const charWoodNeed = charWood * charQuantity ;
    const bedWoodNeed = bedWood * bedQuantity ;
    
    const totalwoodNeed = tabelWoodNeed + charWoodNeed + bedWoodNeed ;
    return totalwoodNeed ;
}
const wood = gettotalWoodPrice(1,2,1);
console.log(wood)