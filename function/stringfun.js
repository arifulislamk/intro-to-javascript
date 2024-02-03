function evenSizedString (str){
    const len = str.length ;
    if(len % 2 === 0){
        console.log('even size');
        return true ;
    }
    else {
        console.log('odd size');
        return false;
    }
}
evenSizedString('Dhaka');
evenSizedString('faka')