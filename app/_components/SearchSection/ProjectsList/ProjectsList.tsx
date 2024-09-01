import styles from './ProjectsList.module.scss';
import Project from '../../../_localDB/projectsDB/Project';
import ProjectsListItem from './ProjectsListItem/ProjectsListItem';

const ProjectsList = ({
	projects
}: {
	projects: Project[]
}) => (
	<ul className={ styles.list }>
		{
			projects.map(project => <ProjectsListItem key={ project.id } project={ project } />)
		}
	</ul>
)

export default ProjectsList;
