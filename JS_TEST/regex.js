// The Net Ninja -> youtube
// [abc]000 -> match a or b or c, followed be 000;
// [^abc]000 -> match  NO a or NO  b or  NO c, followed be 000;
// [a-z] -> range; every thing between
// [0-9]+ -> + matches between one and unlimited;
// [0-9]{11} -> {} count is in the brackets
// [0-9]{5, 8} -> {} count is in the brackets -> between 5 and 8
// [0-9]{5, } -> {} count is in the brackets -> min 5 digits long

// \d match any digit character (same as [0-9])
// \w match any word character (a-z, A-Z, 0-9 and _)
// \s match a whitespace character (spaces, tabs, etc)
// \t match a tab characer only

// + one or more
// ? the zero-or-one quantifier
// * the 0 or more
// . any character

// ^ -> start
// $ -> end
// | -> or
// () -> evaluate: (p|t)yre will match pyre or tyre

let reg = /[a-z]/gi;

const patterns = {
	telephone: /^\d{11}$/, // 11 digitst sharp, starts and ends with a number
	username: /^[a-z\d]{5-12}$/i, // start, all letters and digits, between  5 and 12, case insensitive
	password: /^[\w@-]{8-20 }$/, // (a-z, A-Z, 0-9 and _) plus @ and -, between 8 and 20
	slug: /^[a-z\d-]{8-20}$/, // only small characters, all digits and hyphen, between 8 and 20
	email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
};

//      1           2           3           4
// (yourname) @ (domain) . (extension)(.again optional)
// (theboss) @ (thenetninja) . (co) (.uk)

// 1. any letters, numbers, dots and/ or hyphens
// 2. any letters, numbers and/or hyphens
// 3. any letters
// 4 a dot(.) then any letters -> optional
// /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
