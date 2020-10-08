/* Given two strings, return the number of edits needed to convert from one string to another
Possible edits
1) Insert
2) Remove
3) Replace

Examples:
input: str1 = "geek", str2 = "gesek"
output: 1 (insert s)
input: str1 = 'cat', str2 = 'cut'
output: 1 (replace a --> u)
input: str1 = "sunday", str2 = "saturday"
output: 3 (replace n-->r, insert t, insert a)
*/

function editDistance(str1, str2) {
  const base = [],
    firstRow = [];

  for (let k = 0; k <= str1.length; k++) {
    firstRow.push(k);
  }
  base.push(firstRow);

  for (let i = 1; i <= str2.length; i++) {
    const row = [i];
    for (let j = 1; j <= str1.length; j++) {
      let dia = base[i - 1][j - 1];
      let top = base[i - 1][j];
      let left = row[j - 1];

      if (str2[i - 1] === str1[j - 1]) {
        row.push(dia);
      } else {
        row.push(Math.min(dia, top, left) + 1);
      }
    }
    base.push(row);
  }
  return base[str2.length][str1.length];
}
