export interface Contact {
	id?: number;
	nome: string;
	email: string;
	celular: string;
	telefone?: string;
	favorito: string;
	ativo: string;
	dataAniversário?: number;
}

export interface ContactResume {
	id: number;
	nome: string;
	celular: string;
	email: string;
	favorito: string;
}