let value = null;
let inputEle = document.getElementById("inputClass");
let history = document.getElementById("history");

function handleClick(char) {
  if (char === null) {
    value = null;
    inputEle.value = null;
    return;
  }

  if (
    (char === "/" || char === "." || char === "*" || char === "%") &&
    value === null
  ) {
    return;
  }

  if (
    (char === "/" ||
      char === "+" ||
      char === "." ||
      char === "*" ||
      char === "%" ||
      char === "-") &&
    value !== null &&
    (value[value.length - 1] === "/" ||
      value[value.length - 1] === "+" ||
      value[value.length - 1] === "." ||
      value[value.length - 1] === "*" ||
      value[value.length - 1] === "%" ||
      value[value.length - 1] === "-")
  ) {
    return;
  }

  if (value === null) {
    value = char;
  } else {
    value += char;
  }
  inputEle.value = value;
  //   console.log(value);
}

function handleSubmit() {
  let operations;
  if (value === null) {
    return;
  }

  if (
    value[value.length - 1] === "/" ||
    value[value.length - 1] === "+" ||
    value[value.length - 1] === "*" ||
    value[value.length - 1] === "%" ||
    value[value.length - 1] === "-"
  ) {
    let temp = "";
    for (let i = 0; i < value.length - 1; i++) {
      temp += value[i];
      console.log(temp);
    }
    value = eval(temp);
    operations = temp + "=" + value;
  }

  operations = value;
  value = eval(value);
  operations += "=" + value;
  inputEle.value = value;
  

  let his = document.createElement("h2");
  his.innerText = operations;
  history.append(his);
}


