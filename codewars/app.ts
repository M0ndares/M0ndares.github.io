// Digital root: Sums the digits of a number until this number is a single digit long
export function digitalroot(n:number): number {
    let result = 0;
    const toString = n.toString();
    const toStringLength = toString.length;
    let counter = 0;
    while(toString.length<counter) {
        const stringValue = toString.charAt(counter);
        const numberValue = parseInt(stringValue);
        result = numberValue+result
    } 
    if(result>10) {
        while(result>10) {
            const stringValue = toString.charAt(counter);
            const numberValue = parseInt(stringValue);
            result = numberValue+result
        }
    }
    return result;
}