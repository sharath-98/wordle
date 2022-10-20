import wordBank from './wordle-dict.txt'
export const boardDefault = [["","","","",""],
                            ["","","","",""],
                            ["","","","",""],
                            ["","","","",""],
                            ["","","","",""],
                            ["","","","",""]];

export const generateWord = async () =>{
    let wordSet;
    await fetch(wordBank).then((response) => response.text()
    .then((result) => {
        const wordArr = result.split("\n")
        wordSet = new Set(wordArr);
    }))
    return {wordSet};
}