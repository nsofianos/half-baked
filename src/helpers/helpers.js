var Fraction = require("fractional").Fraction;

export const convertFractions = (recipe, multiplier, adjuster) => {
  let converted = "";
  for (let i = 0; i < recipe.length; i++) {
    let curIndex = recipe.charAt(i);
    let indexp1 = recipe.charAt(i + 1);
    let indexp2 = recipe.charAt(i + 2);
    if (
      //if mixed fraction, multiply and skip index forward
      parseInt(curIndex) &&
      /\s/g.test(indexp1) &&
      parseInt(indexp2)
    ) {
      let frac = new Fraction(parseInt(curIndex));
      frac = frac.add(
        new Fraction(parseInt(indexp2), parseInt(recipe.charAt([i + 4])))
      );
      adjuster === "divide"
        ? (frac = frac.divide(multiplier).toString())
        : (frac = frac.multiply(multiplier).toString());
      converted += frac;
      i += 4;
    } //else if fraction, multiply/divide and skip index forward
    else if (parseInt(curIndex) && indexp1 === "/" && parseInt(indexp2)) {
      let frac = new Fraction(parseInt(curIndex), parseInt(indexp2));
      adjuster === "divide"
        ? (frac = frac.divide(multiplier).toString())
        : (frac = frac.multiply(multiplier).toString());

      converted += frac;
      i += 2;
    } else {
      converted += curIndex;
    }
  }
  return converted;
};

export const checkNotFraction = (s, i) => {
  return (
    parseInt(s.charAt(i)) &&
    !parseInt(s.charAt(i + 2)) &&
    s.charAt(i - 1) !== "/"
  );
};

//remove unicode fractions to keep code uniform
const parseUnicodeFractions = (recipe) => {
  return recipe
    .replaceAll("½", "1/2")
    .replaceAll("¼", "1/4")
    .replaceAll("⅛", "1/8")
    .replaceAll("⅓", "1/3")
    .replaceAll("⅔", "2/3")
    .replaceAll("¾", "3/4");
};

export const convertRecipe = (recipe, adjuster, multiplier) => {
  //convert unicode fractions to regular fractions
  let parsedRecipe = parseUnicodeFractions(recipe);
  let parsedConverted = "";

  for (let i = 0; i < parsedRecipe.length; i++) {
    //check if number is not part of a fraction
    if (checkNotFraction(parsedRecipe, i)) {
      //check if single or double digit
      if (parseInt(parsedRecipe.charAt(i + 1))) {
        parsedConverted +=
          adjuster === "divide"
            ? parseInt(parsedRecipe.charAt(i) + parsedRecipe.charAt(i + 1)) /
              multiplier
            : parseInt(parsedRecipe.charAt(i) + parsedRecipe.charAt(i + 1)) *
              multiplier;
        i++;
      } else {
        parsedConverted +=
          adjuster === "divide"
            ? Math.round(
                ((parseInt(parsedRecipe.charAt(i)) / multiplier) * 10) / 10
              )
            : parseInt(parsedRecipe.charAt(i)) * multiplier;
      }
    } else parsedConverted += parsedRecipe.charAt(i);
  }

  let parsedConvertedWithFractions = convertFractions(
    parsedConverted,
    multiplier,
    adjuster
  );
  return parsedConvertedWithFractions.replace(/\n\s*\n/g, "\n");
};

export const parseIngredients = (data) => {
  return data.map((ingredient) => ingredient.original).join("\r\n");
};
