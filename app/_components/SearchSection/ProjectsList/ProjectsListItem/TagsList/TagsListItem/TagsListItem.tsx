import styles from './TagsListItem.module.scss';
import Icon from '../../../../../Icon/Icon';
import { ValuesOfTags } from '../../../../../../_localDB/projectsDB/Project';

const TagsListItem = ({
	tag
}: {
	tag: ValuesOfTags
}) => (
	<li className={ styles['list-item'] }>
		<Icon iconName={ 'tag' } />
		{ tag }
	</li>
)

export default TagsListItem;
