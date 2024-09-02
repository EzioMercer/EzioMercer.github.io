import Project, { ValueOfTags } from './Project';
import TAGS from './Tags';

class ProjectsDB {
	static readonly #host = 'https://EzioMercer.github.io/';
	static readonly #profile = 'https://github.com/EzioMercer/';

	readonly #projects: Project[] = [
		new Project('Finom', ProjectsDB.#host + 'Finom', [TAGS.LAYOUT, TAGS.REACT, TAGS.HTML, TAGS.CSS]),
		new Project('Registration', ProjectsDB.#host + 'Registration', [TAGS.LAYOUT, TAGS.CANVAS]),
		new Project('Colorful border', ProjectsDB.#profile + 'cobo', [TAGS.LAYOUT, TAGS.JS, TAGS.CSS, TAGS.HTML, TAGS.LIBRARY]),
		new Project('True Math', ProjectsDB.#profile + 'true-math', [TAGS.ALGORITHMS, TAGS.JS, TAGS.LIBRARY]),
	]

	getProjects(title: string = '', page: number = 0, tags: ValueOfTags[] = []): Project[] {
		const pageSize = 16;

		return this.#projects
			.filter(project => new RegExp(title, 'gi').test(project.title))
			.filter(project => tags.every(tag => project.hasTag(tag)))
			.slice(page * pageSize, (page + 1) * pageSize)
	}
}

export default new ProjectsDB();