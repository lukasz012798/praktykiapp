export default convertToArray = (text) => {
  let displacement = 0;
  let array = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "<") {
      if (text.slice(i, i + 5) === "<br/>") {
        array.push({ type: "breakline", key: `key_${i}` });
      } else if (
        text[i] === "<" &&
        (text[i + 5] === ">" || text[i + 7] === ">")
      ) {
        if (text[i + 5] === ">") displacement = 5;
        else displacement = 7;
        const type = text.slice(i + 1, i + displacement);
        const innerText = text.slice(
          i + displacement + 1,
          text.indexOf("</", i)
        );
        array.push({ type, innerText, key: `key_${i}` });
      }
    }
  }
  return array;
};
