import Project, { ValueOfTags } from './Project';
import TAGS from './Tags';

class ProjectsDB {
	static readonly #host = 'https://EzioMercer.github.io/';
	static readonly #profile = 'https://github.com/EzioMercer/';

	readonly #projects: Project[] = [
		// Hosted projects
		new Project('Finom', ProjectsDB.#host + 'Finom', [
			TAGS.LAYOUT,
			TAGS.REACT,
			TAGS.TYPE_SCRIPT,
			TAGS.SCSS
		]),
		new Project('Registration', ProjectsDB.#host + 'Registration', [
			TAGS.LAYOUT,
			TAGS.REACT,
			TAGS.TYPE_SCRIPT,
			TAGS.FIREBASE,
			TAGS.SCSS
		]),
		new Project('Snake game', ProjectsDB.#host + 'snake-canvas', [
			TAGS.GAME,
			TAGS.CANVAS,
			TAGS.JAVA_SCRIPT,
			TAGS.HTML,
			TAGS.CSS,
			TAGS.ALGORITHMS,
			TAGS.DATA_STRUCTURES
		]),

		// Not hosted projects
		new Project('Colorful border', ProjectsDB.#profile + 'cobo', [
			TAGS.LIBRARY,
			TAGS.JAVA_SCRIPT
		]),
		new Project('True Math', ProjectsDB.#profile + 'true-math', [
			TAGS.LIBRARY,
			TAGS.ALGORITHMS,
			TAGS.JAVA_SCRIPT
		])
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