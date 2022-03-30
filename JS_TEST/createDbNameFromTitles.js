const titles = [
	"Date de fin de mandat",
	"NOM, Prénom / société",
	"Code postal",
	"Type de bien",
	"Raison principale de l'échec",
	"Durée de Mandat",
	"Négociateur",
	"Rapport Négociateur",
	"Prix net vendeur",
	"Prix net vendeur Renégocié",
	"État de la relation selon Négociateur",
	"État de la relation selon Propriétaire",
	"Date de prise de Contact vendeur",
	"Date de 2nd Contact",
	"Décision",
	"Nouveau PNV Négocié",
];

let res = titles.map((el) => {
	return {
		title: el,
		dbName: configDbKey([el]),
	};
});

res.forEach((el) => console.log(el.dbName));

function configDbKey(arr) {
	let dbKey = arr
		.reduce((acc, curr) => {
			curr = curr.split(/[ ,./]+/g).join("");
			acc.push(curr);

			return acc;
		}, [])
		.join("");
	console.log(dbKey);
	return dbKey;
}
