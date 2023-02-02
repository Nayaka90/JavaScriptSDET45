var str='testyantra'
var vowels="AEIOUaeiou"
var conso=0
var vowel=0
    
    for (let j =0; j < str.length; j++) {
        if(vowels.indexOf(str[j])==-1)
          conso++   
        else
        vowel++
    }
        console.log(" number of consonant "+conso)
        console.log(" number of vowels "+vowel)    
         

