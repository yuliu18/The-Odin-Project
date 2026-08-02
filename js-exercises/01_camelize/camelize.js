/*function capitalize(strCapitalize) {
  if (!strCapitalize) return "";
  return strCapitalize.charAt(0).toUpperCase() + strCapitalize.slice(1);
}

const camelize = function (str) {
  if (typeof str !== "string") return str;
  let strArray = str.split("-");
  for (let i = 1; i < strArray.length; i++) {
    strArray[i] = capitalize(strArray[i]);
  }
  return strArray.join("");
};*/

function camelize(str) {
  if (typeof str !== "string") return str;
  return str
    .split("-") //divide the string use - and convert in a Array
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1),
    ) // convert word in Capitalize when his index is not a 0
    .join(""); //convert Array modified in a string
}

module.exports = camelize;
