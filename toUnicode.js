//function isBlankString(s){return /\s/.test(s)};

function pad(s,z){var f=String,r=f(s).trim(),l='length',n=z[l];if(n>0){z=f(z);l=Math.max(n-r[l],0);if(l>0){r=z.substr(0,l)+s}};return r};
function padHex(s){return pad(s,'0000')};//while(s.length<4){s+='0'};

function toUnicode(t){var r='';if(t!==r){var m=[];for(var s,p='push',q='toString',i=0,l=t.length;i<l;i++){s=t.charAt(i);if(s!==r){m[p](padHex(Number(s.charCodeAt()[q](10).replace(/\D/g,r))[q](16)).toUpperCase())}};m.unshift(r);r=m.join('\\u')};return r};

console.log(toUnicode(""));
console.log(toUnicode(" "));
console.log(toUnicode(" \t"));
console.log(toUnicode("\t"));
console.log(toUnicode("\n"));
console.log(toUnicode("a"));
console.log(toUnicode("abc"));





