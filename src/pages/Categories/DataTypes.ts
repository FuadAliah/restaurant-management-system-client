export interface ActionButton {
	label: string;
	color?: string;
	onClick: () => void;
}

export interface Data {
	rows: [];
	id: string;
	name: {
		first: string;
		last: string;
	};
	dob: {
		age: number
	};
	actions: ActionButton[];
}