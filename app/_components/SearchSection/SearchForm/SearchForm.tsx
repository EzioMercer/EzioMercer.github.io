import styles from './SearchForm.module.scss';
import { ValueOfTags } from '../../../_localDB/projectsDB/Project';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import TAGS from '../../../_localDB/projectsDB/Tags';
import { SearchOptions } from '../SearchSection';
import TagsCheckboxList from './TagsCheckboxList/TagsCheckboxList';

const tags = Object.values(TAGS);

const SearchForm = ({
	setSearchOptions
}: {
	setSearchOptions: Dispatch<SetStateAction<SearchOptions>>
}) => {
	const handleChange = (e: ChangeEvent<HTMLFormElement>) => {
		const formData = new FormData(e.currentTarget);

		setSearchOptions(() => ({
			title: formData.get('title') as string,
			tags: formData.getAll('tags') as ValueOfTags[],
		}))
	}

	return (
		<form className={ styles.form } onChange={ handleChange }>
			<input type="text" placeholder="Enter the name of project" name="title" />
			<TagsCheckboxList tags={tags} />
		</form>
	)
}

export default SearchForm;
