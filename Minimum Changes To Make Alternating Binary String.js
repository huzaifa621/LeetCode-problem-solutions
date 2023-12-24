/**
 * @param {string} s
 * @return {number}
 */

const findMinChanges = (s, N, lastChar) => {
    let count = 0;
    for(let i=1; i<N; i++) {
        let currChar = s[i];
        if(lastChar === currChar) {
            if(currChar === '0') {
                count++;
                lastChar = '1';
            } else {
                count++;
                lastChar = '0';
            }
        } else {
            lastChar = currChar;
        }
    }
    return count;
}

var minOperations = function(s) {
    let minChanges = findMinChanges(s, s.length, s[0]);
    let count = 1;
    if(s[0] === '0') {
        count += findMinChanges(s, s.length, '1');
    } else {
        count += findMinChanges(s, s.length, '0');
    }

    return Math.min(minChanges, count);
};