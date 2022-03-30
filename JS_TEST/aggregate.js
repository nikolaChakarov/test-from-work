const titles = [
	"Personnes alertées",
	"Phases du parcours DV",
	"Durée max",
	"Notification 1",
	"Notification 2",
	"Notification 3",
	"Déblocage",
	"Raison de la prolongation",
	"Explications",
];

const firstCol = [
	"InExclu",
	"Accompagnateur et Propriétaire",
	"Accompagnateur et Propriétaire",
	"Accompagnateur et Propriétaire",
	"Accompagnateur et Propriétaire",
	"Accompagnateur et Propriétaire",
	"InExclu",
	"Négociateur / Propriétaire",
	"Négociateur / Propriétaire",
];

const secondCol = [
	"Phase 0",
	"Phase 1",
	"Phase 2",
	"Phase 2 bis",
	"Phase 3",
	"Phase 4",
	"Phase 4 bis",
	"Phase 5",
	"Phase 6",
];

const messages = [
	"Durée de proposition de la mission sur la plateforme accompagnateur avant intervention d’InExclu pour trouver un accompagnateur",
	"Durée entre la prise de mission et le premier RDV",
	"Durée entre le premier RDV et le second RDV",
	"Durée supplémentaire accordé pour travaux : durée déterminée par l’accompagnateur modifiable et limitée à 45 jours",
	"Durée entre l second RDV et la mise en vente du mandat sur la plateforme",
	"Durée de vente du mandat",
	"Durée de renégociation du mandat et de vente du mandat en cas de non vente du mandat lors de sa première mise en vente",
	"Durée nécessaire à la vente du bien par le Négociateur",
	"Durée de renégociation du mandat et de vente du bien en cas de non vente du bien lors du premier mandat",
];

const test = firstCol.reduce((acc, curr, i) => {
	let row = [];
	row.push(curr, secondCol[i]);

	titles.forEach((el, idx) => {
		if (idx < 2) {
			return;
		}

		if (idx === titles.length - 1) {
			row.push(messages[i]);
			return;
		}

		const dbKeyName = configDbKey([curr, secondCol[i], el]);
		row.push(dbKeyName);
	});

	acc.push(row);
	return acc;
}, []);

function configDbKey(arr) {
	let dbKey = arr
		.reduce((acc, curr) => {
			curr = curr.split(/[ /]+/g).join("");
			acc.push(curr);

			return acc;
		}, [])
		.join("");
	console.log(dbKey);
	return dbKey;
}
