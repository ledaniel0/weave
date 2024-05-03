import { List, nil, equal ,cons, rev } from './list';
import { Color } from './color';


/**
 * Returns the list of colors shown in the each of the odd rows (first,
 * third, fifth, etc.) by a warp-faced weave with the given warp colors.
 * @param list of all the (warp) colors in the weave
 * @return keep(colors), i.e., every other color starting from the first
 */
export const warpFacedOdds = (colors: List<Color>): List<Color> => {
  // TODO(5c): detect and handle odd length lists here

  let R: List<Color> = rev(colors);
  let S: List<Color> = nil;
  let T: List<Color> = nil;

  // Inv: TODO(5a): add this
  while (R.kind !== "nil" && R.tl !== nil) {
    // TODO(5b): implement this
    break;  // TODO(5b): remove
  }

  if (!equal(S, colors)) {  // defensive programming
    throw new Error("uh oh! S != colors... we made a mistake somewhere!");
  }

  if (R.kind === "nil") {
    return T;  // We have S = colors, so T = keep(S) = keep(colors).
  } else {
    throw new Error("uh oh! the list length wasn't even");
  }
};

/**
 * Returns the list of colors shown in the each of the even rows (second,
 * fourth, etc.) by a warp-faced weave with the given warp colors.
 * @param list of all the (warp) colors in the weave
 * @return drop(colors), i.e., every other color starting from the second
 */
export const warpFacedEvens = (colors: List<Color>): List<Color> => {
  // TODO(5c): detect and handle odd length lists here

  let R: List<Color> = rev(colors);
  let S: List<Color> = nil;
  let T: List<Color> = nil;

  // Inv: TODO(5a): add this
  while (R.kind !== "nil" && R.tl !== nil) {
    // TODO(5b): implement this
    break;  // TODO(5b): remove
  }

  if (!equal(S, colors)) {  // defensive programming
    throw new Error("uh oh! S != colors... we made a mistake somewhere!");
  }

  if (R.kind === "nil") {
    return T;  // We have S = colors, so T = drop(S) = drop(colors).
  } else {
    throw new Error("uh oh! the list length wasn't even");
  }
};


/**
 * Returns the given number of rows of a weave with the given colors
 * @param rows the (natural) number of rows in the weave
 * @param colors the weft colors in each row
 * @returns list of the given length where the odd values are the colors of
 *      warpFacedOdds and the even values are the colors of
 *      warpFacedEvens.
 * @returns the function defined recursively (on rows) by
 *   - weave(0, colors) = nil
 *   - weave(1, colors) = cons(warpFacedEvens(colors), nil)
 *   - weave(n+2, colors) =
 *         cons(warpFacedEvens(colors),
 *             cons(warpFacedOdds(colors), weave(n, colors)))
 */
export const weave =
    (_rows: bigint, colors: List<Color>): List<List<Color>> => {
  // TODO: implement this with a while loop as described in 6d
  // Be sure to document your loop invariant with an Inv comment above the loop
  return cons(warpFacedEvens(colors),
      cons(warpFacedOdds(colors), nil));
};
