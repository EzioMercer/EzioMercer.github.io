import TAGS from './Tags';

export type ValuesOfTags = typeof TAGS[keyof typeof TAGS];

export default class Project {
	readonly #id: string = '';
	readonly #link: string = '';
	readonly #title: string = '';
	readonly #tags: Set<ValuesOfTags>= new Set();

	constructor(title: string, link: string, tags: ValuesOfTags[]) {
		this.#id = crypto.randomUUID();
		this.#title = title;
		this.#link = link;

		for (const tag of tags) {
			this.#tags.add(tag);
		}
	}

	get id(): string {
		return this.#id;
	}

	get link(): string {
		return this.#link;
	}

	get title(): string {
		return this.#title;
	}

	get tags(): ValuesOfTags[] {
		return [...this.#tags.values()];
	}

	hasTag(tag: ValuesOfTags): boolean {
		return this.#tags.has(tag);
	}
}