function solution(my_string, overwrite_string, s) {
    const prefix = my_string.slice(0, s);
    const suffix = my_string.slice(s + overwrite_string.length);
    return prefix + overwrite_string + suffix;
}