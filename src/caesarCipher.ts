export const caesarCipher = (inputString: string, shift: number, direction: 'forward' | 'backward'): string => {
  if (direction === 'backward') {
    shift = -shift;
  }

  const characterArray: string[] = inputString.split("");
  const lowerCaseStartingPoint = 97;
  const upperCaseStartingPoint = 65;
  const upperCaseEndPoint = 90;
  const alphabetLength = 26; // this wouldn't work internationally

  const encryptedStringArray: string[] = characterArray.map(char => {
    // ignore numeric or special characters
    if (/[a-z]/i.test(char)) {
      const charCode = char.charCodeAt(0);
      const startPoint = charCode >= upperCaseStartingPoint &&
        charCode <= upperCaseEndPoint ?
        upperCaseStartingPoint :
        lowerCaseStartingPoint;
      const shiftedCharCode = ((charCode - startPoint + shift) % alphabetLength + alphabetLength);
      return String.fromCharCode(shiftedCharCode % alphabetLength + startPoint);
    }
    return char;
  });

  return encryptedStringArray.join("");
}