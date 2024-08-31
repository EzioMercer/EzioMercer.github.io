import Project, { ValuesOfTags } from './Project';
import TAGS from './Tags';

class ProjectsDB {
	readonly #host = 'https://EzioMercer.github.io/';
	readonly #projects: Project[] = [
		new Project('Finom', this.#host + 'Finom', [TAGS.LAYOUT, TAGS.REACT]),
		new Project('Registration', this.#host + 'Registration', [TAGS.LAYOUT, TAGS.CANVAS])
	]

	getProjects(title: string, page: number, tags: ValuesOfTags[]): Project[] {
		const pageSize = 16;

		return this.#projects
			.filter(project => new RegExp(title, 'gi').test(project.title))
			.filter(project => tags.every(tag => project.hasTag(tag)))
			.slice(page * pageSize, (page + 1) * pageSize)
	}
}

export default new ProjectsDB();