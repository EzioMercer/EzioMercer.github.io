'use client';

import styles from './SearchSection.module.scss';
import projectsDB from '../../../_localDB/projectsDB/projectsDB';
import { useEffect, useState } from 'react';
import Project, { ValuesOfTags } from '../../../_localDB/projectsDB/Project';
import SearchForm from './SearchForm/SearchForm';
import ProjectsList from './ProjectsList/ProjectsList';

export type SearchOptions = {
	title: string,
	tags: ValuesOfTags[]
}

const SearchSection = () => {
	const [searchOptions, setSearchOptions] = useState<SearchOptions>({
		title: '',
		tags: []
	});
	const [projects, setProjects] = useState<Project[]>([]);

	useEffect(() => {
		setProjects(projectsDB.getProjects(searchOptions.title, 0, searchOptions.tags))
	}, [searchOptions])

	return (
		<section className={ styles.section }>
			<SearchForm setSearchOptions={ setSearchOptions } />
			<ProjectsList projects={ projects } />
		</section>
	)
}

export default SearchSection;
