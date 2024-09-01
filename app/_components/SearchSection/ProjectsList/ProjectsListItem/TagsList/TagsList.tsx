import styles from './TagsList.module.scss';
import { ValuesOfTags } from '../../../../../_localDB/projectsDB/Project';
import TagsListItem from './TagsListItem/TagsListItem';

const TagsList = ({
	tags
}: {
	tags: ValuesOfTags[]
}) => (
	<ul className={ styles.list }>
		{
			tags.map((tag, i) => <TagsListItem key={ i } tag={ tag } />)
		}
	</ul>
)

export default TagsList;
