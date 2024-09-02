import styles from './TagsCheckboxList.module.scss';
import { ValueOfTags } from '../../../../_localDB/projectsDB/Project';
import TagsCheckboxListItem from './TagsCheckboxListItem/TagsCheckboxListItem';

const TagsCheckboxList = ({
	tags
}: {
	tags: ValueOfTags[]
}) => (
	<div className={ styles.tags }>
		{
			tags.map((tag, i) => <TagsCheckboxListItem key={ i } tag={ tag } />)
		}
	</div>
)

export default TagsCheckboxList;
