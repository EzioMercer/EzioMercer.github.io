'use client';

import styles from './SearchSection.module.scss';
import { useEffect, useState } from 'react';
import projectsDB from '../../_localDB/projectsDB/projectsDB';
import Project, { ValueOfTags } from '../../_localDB/projectsDB/Project';
import SearchForm from './SearchForm/SearchForm';
import ProjectsList from './ProjectsList/ProjectsList';
import Container from '../Container/Container';

export type SearchOptions = {
	title: string,
	tags: ValueOfTags[]
}

const SearchSection = () => {
	const [searchOptions, setSearchOptions] = useState<SearchOptions>({
		title: '',
		tags: []
	});
	const [projects, setProjects] = useState<Project[]>(projectsDB.getProjects());

	useEffect(() => {
		setProjects(projectsDB.getProjects(searchOptions.title, 0, searchOptions.tags))
	}, [searchOptions])

	return (
		<section className={ styles.section }>
			<Container className={ styles.container }>
				<SearchForm setSearchOptions={ setSearchOptions } />
				<ProjectsList projects={ projects } />
			</Container>
		</section>
	)
}

export default SearchSection;
