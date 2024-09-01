import { ValuesOfTags } from '../../../_localDB/projectsDB/Project';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import TAGS from '../../../_localDB/projectsDB/Tags';
import { SearchOptions } from '../SearchSection';

const values = Object.values(TAGS);

const SearchForm = ({
	setSearchOptions
}: {
	setSearchOptions: Dispatch<SetStateAction<SearchOptions>>
}) => {
	const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchOptions(prev => ({
			...prev,
			title: e.target.value
		}))
	}

	const handleTagsChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setSearchOptions(prev => ({
			...prev,
			tags: [...e.target.selectedOptions].map(x => (x.value as ValuesOfTags))
		}))
	}

	return (
		<form>
			<input type="text" placeholder="Enter the name of project" onChange={ handleTitleChange } />
			<select
				multiple={ true }
				onChange={ handleTagsChange }
			>
				{
					values.map(tag => <option key={ tag } value={ tag }>{ tag }</option>)
				}
			</select>
		</form>
	)
}

export default SearchForm;
