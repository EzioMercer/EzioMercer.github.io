import styles from './ProjectsListItem.module.scss'
import Project from '../../../../_localDB/projectsDB/Project';
import TagsList from './TagsList/TagsList';

const ProjectsListItem = ({
	project
}: {
	project: Project
}) => (
	<li className={ styles['list-item'] }>
		<a target="_blank" href={ project.link }>{ project.title }</a>
		<TagsList tags={ project.tags } />
	</li>
)

export default ProjectsListItem;
