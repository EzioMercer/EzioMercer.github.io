import TAGS from './Tags';

export type ValueOfTags = typeof TAGS[keyof typeof TAGS];

export default class Project {
	readonly #id: string = '';
	readonly #link: string = '';
	readonly #title: string = '';
	readonly #tags: Set<ValueOfTags>= new Set();

	constructor(title: string, link: string, tags: ValueOfTags[]) {
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

	get tags(): ValueOfTags[] {
		return [...this.#tags.values()];
	}

	hasTag(tag: ValueOfTags): boolean {
		return this.#tags.has(tag);
	}
}