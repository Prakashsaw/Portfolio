function StringChallenge(sen) {
    let arr = sen.split(' ');

    let ans = "";
    for (let word in arr) {
        let newWord = "";
        for (let i = 0; i < word.length; i++) {
            if ((i >= 'a' && i <= 'a') || (i >= 'A' && i <= 'Z') || (i >= '0' && i <= '9')) {
                newWord += word[i];
            }
        }

        if (newWord.length > ans.length) {
            ans = newWord;
        }
    }

    return ans;
}

let sentense = "fun&!! time";
let ans = StringChallenge(sentense);
console.log(ans);
console.log(ans);