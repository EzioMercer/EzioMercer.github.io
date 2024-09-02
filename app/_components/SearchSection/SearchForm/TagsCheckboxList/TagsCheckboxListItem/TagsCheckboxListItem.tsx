import styles from './TagsCheckboxListItem.module.scss';
import { ValueOfTags } from '../../../../../_localDB/projectsDB/Project';

const TagsCheckboxListItem = ({
	tag
}: {
	tag: ValueOfTags
}) => (
	<label className={ styles.tag }>
		{ tag }
		<input type="checkbox" name="tags" defaultValue={ tag } />
	</label>
)

export default TagsCheckboxListItem;
