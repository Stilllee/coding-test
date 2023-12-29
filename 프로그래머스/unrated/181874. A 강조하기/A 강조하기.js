const solution = (str) => str.replace(/[A-Za-z]/g, c => 
    c === 'a' ? 'A': 
    c === 'A' ? 'A' : c.toLowerCase());