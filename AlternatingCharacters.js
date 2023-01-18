function alternatingCharacters(s) {
   const match = s.match(/A(?=A)|B(?=B)/g);
   return match ? match.length : 0;
}
