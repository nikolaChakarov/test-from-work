const fields = [
	"Quantité",
	"Moyenne Générale",
	"Moyenne Top 10%",
	"Moyenne Top 30%",
];

const keys = [
	"nbMissionsEffectues",
	"nbVenteMandatRealises",
	"nbVenteBiensEngendres",
	"tauxTransformSignatureMandat",
	"tauxTransformVenteMandat",
	"tauxTransformVenteBien",
];

const db = generateDB();

const mappedData = () => {
	const sumFromSidebarKeys = db.reduce((acc, curr) => {
		keys.forEach((el) => {
			if (!acc[el]) {
				acc[el] = 0;
			}
			acc[el] += curr[el];
		});

		return acc;
	}, {});

	const tempArr = Object.entries(sumFromSidebarKeys);

	const temp = tempArr.reduce((acc, [k, v]) => {
		acc[k] = {};

		fields.forEach((el) => {
			if (!acc[k][el]) {
				acc[k][el] = 0;
			}

			switch (el) {
				case "Quantité":
					acc[k][el] = v;
					break;
				case "Moyenne Générale":
					acc[k][el] = v / db.length;
					break;
				default:
					acc[k][el] = v / db.length;
					break;
			}
		});

		return acc;
	}, {});

	const res = keys.map((el) => {
		let x = [el, Object.entries(temp[el])];

		return x;
	});

	console.log(res);
};

function generateDB() {
	let db = [];

	for (let i = 0; i < 50; i++) {
		let obj = {
			// day: dayjs(new Date(2022, 1, i + 1)),
			/* keys table 01 */

			// nbAccompDebut: Math.floor(Math.random() * 10),
			// nbAccompFin: Math.floor(Math.random() * 10),
			// nbAccompActif: Math.floor(Math.random() * 10),
			// nbInscription: Math.floor(Math.random() * 10),
			// nbMoyenneParMois: Math.floor(Math.random() * 10),
			// tauxMoyenneProgression: Math.floor(Math.random() * 10),

			/* keys table 02 */

			// nbMoyenMissionsAccompActif: Math.floor(Math.random() * 10),
			// nbMoyenMandatSignesAccompActif: Math.floor(Math.random() * 10),
			// nbMoyenMandatVendusAccompActif: Math.floor(Math.random() * 10),

			/* keys table 03 */

			// mandatTotalCommisionsGagnesAccomp: Math.floor(Math.random() * 10),
			// mandatMoyenCommisionsGagnesAccompActif: Math.floor(Math.random() * 10),
			// mandatMoyenMissionGagnesAccompActif: Math.floor(Math.random() * 10),
			// caGenereInExcluPeriod: Math.floor(Math.random() * 10),
			// caFraisFixGenereInExcluPeriod: Math.floor(Math.random() * 10),
			// caVariableGenereInExcluPeriod: Math.floor(Math.random() * 10),
			// caAbonnementVipPeriod: Math.floor(Math.random() * 10),
			// caOptionPeriod: Math.floor(Math.random() * 10),

			/* keys table 04 */

			// coutComissionsAccomp_caGenereInExclu: Math.floor(Math.random() * 10),
			// mandatMoyenCommisionsGagnesAccompActif: Math.floor(Math.random() * 10),

			/* keys table 05 */

			nbMissionsEffectues: Math.floor(Math.random() * 10),
			nbVenteMandatRealises: Math.floor(Math.random() * 10),
			nbVenteBiensEngendres: Math.floor(Math.random() * 10),
			tauxTransformSignatureMandat: Math.floor(Math.random() * 10),
			tauxTransformVenteMandat: Math.floor(Math.random() * 10),
			tauxTransformVenteBien: Math.floor(Math.random() * 10),
		};

		db.push(obj);
	}

	return db;
}

mappedData();
