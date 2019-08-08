const reEncode = function(lic, key){
    const intermed = lic.split('-').join('').split('');
    let ctr = 1;

    if(intermed.length <= key){
        return intermed.join('');
    }

    return  intermed.reduceRight((acc, item) => {
        if(ctr % key === 0 && ctr < intermed.length)
            acc = '-' + item + acc;
        else 
            acc = item + acc;

        if(ctr < intermed.length)
            ctr++;

        return acc;
    }, '').toUpperCase();
}

console.log(reEncode('5F3Z-2e-9-w', 2));