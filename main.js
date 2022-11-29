const arr = [
  {
    breakes: "({(({}))})"
  },
  {
    breakes: "({({}))})" // false
  },
  {
    breakes: "({(({}))}" // false
  },
  {
    breakes: "({(({}))})"
  },
  {
    breakes: "({(({}))})"
  },
  {
    breakes: "({(({}})" // false
  },
  {
    breakes: "({(({}))})"
  },
  {
    breakes: "({(({}))})" // false
  }
]

function filterBreakes(data) {
  let result = data.filter((obj) => {
    if (obj.breakes === "({(({}))})") {
      console.log(true);
    } else {
      console.log(false);
    }
  })

  return result;
}

filterBreakes(arr);