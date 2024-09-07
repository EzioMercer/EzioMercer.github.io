import styles from './ProjectsListItem.module.scss'
import Project from '../../../../_localDB/projectsDB/Project';
import TagsList from './TagsList/TagsList';

const ProjectsListItem = ({
	project
}: {
	project: Project
}) => (
	<li className={ styles['list-item'] }>
		<a target="_blank" href={ project.link }>
			<span>{ project.title }</span>
			<TagsList tags={ project.tags } />
		</a>
	</li>
)

export default ProjectsListItem;
