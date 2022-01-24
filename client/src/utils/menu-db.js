const serialize = (str) => {
	const regex = /[a-zA-Z0-9]+/g;

	const clear = str.match(regex);
	const res = clear.reduce((acc, curr) => {
		acc += curr;
		return acc.toLowerCase();
	}, "");

	return res;
};

export const topMenuData = [
	{
		type: "etat",
		click: false,
		text: "Que recherchez-vous ?",
		// component: <Etat text="Que recherchez-vous ?" serialize={serialize} clickHandler={setSelectedValue} />,
		// component: Etat,
		props: {
			text: "Que recherchez-vous ?",
			serialize: serialize,
			// clickHandler: setSelectedValue,
		},
	},
	{
		type: "lieu",
		click: false,
		text: "Lieu",
		// component: Lieu,
		props: {
			text: "Lieu",
			serialize: serialize,
			// clickHandler: setSelectedValue,
			// onChange,
			// values,
		},
	},
	{
		type: "budget",
		click: false,
		text: "Budget",
		// component: Budget,
		props: {
			text: "Budget",
			serialize: serialize,
			// clickHandler: setSelectedValue,
			// onChange,
			// values,
		},
	},
	{
		type: "surface",
		click: false,
		text: "Surface",
		// component: Surface,
		props: {
			text: "Surface",
			serialize: serialize,
			// clickHandler: setSelectedValue,
			// onChange,
			// values,
		},
	},
	{
		type: "pieces",
		click: false,
		text: "Pièces",
		// component: Pieces,
		props: {
			text: "Pieces",
			serialize: serialize,
			// clickHandler: setSelectedValue,
			// onChange,
		},
	},
];

export const asideData = [
	{
		type: "Commodités",
		elements: [
			"Ascenseur",
			"Cave",
			"Garage",
			"Piscine enterrée",
			"Parking gratuit copropriété",
		],
	},
	{
		type: "Cuisine",
		elements: ["Ouvert", "Fermé", "Rénovée"],
	},
	{
		type: "Situation",
		elements: [
			"Belle vue",
			"Plein pied ou RDC",
			"Dernier étage",
			"Orientation Sud",
			"Exposition sans vis-à-vis",
		],
	},
	{
		type: "Caractéristiques extérieures",
		elements: [
			"Belle vue",
			"Balcon",
			"Veranda",
			"Terrasse sur toit",
			"Jardin paysage",
		],
	},
	{
		type: "Occupation du bien",
		elements: ["Vide", "Loué", "Disponible immédiat."],
	},
	{
		type: "Sécurité",
		elements: ["Cocierge", "Systéme d'alarme", "Porte d'entrée blindée"],
	},
	{
		type: "Emplacement",
		elements: [
			"Extême centre ville",
			"Centre ville",
			"Faubourg ville",
			"Coeur de village",
			"Exérieur village",
			"Isolé",
			"Impasse",
		],
	},
	{
		type: "État gu général du bien",
		elements: [
			"Neuf",
			"Comme neuf",
			"Très bon état",
			"Bon état",
			"Façade en bon état",
			"Toiture en bon état",
			"État correct",
			"Intérieur entièrement à rénover",
		],
	},
	{
		type: "Type de chauffage",
		elements: ["Individuel", "Collectif", "Très bon état", "Bon état"],
	},
	{
		type: "Nuisances sonores",
		elements: ["Très calme", "Calme", "Pue bruyant"],
	},
];

export const alerts = [
	"Appartements Paris 100m2",
	"Appartements Paris 200m2",
	"Appartements Paris 300m2",
];
