import styles from './TagsListItem.module.scss';
import Icon from '../../../../../Icon/Icon';
import { ValueOfTags } from '../../../../../../_localDB/projectsDB/Project';

const TagsListItem = ({
	tag
}: {
	tag: ValueOfTags
}) => (
	<li className={ styles['list-item'] }>
		<Icon iconName={ 'tag' } />
		{ tag }
	</li>
)

export default TagsListItem;
