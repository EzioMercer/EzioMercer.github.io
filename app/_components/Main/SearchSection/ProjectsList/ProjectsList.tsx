import styles from './ProjectsList.module.scss';
import Project from '../../../../_localDB/projectsDB/Project';
import ProjectListItem from './ProjectListItem/ProjectListItem';

const ProjectsList = ({
	projects
}: {
	projects: Project[]
}) => {
	return (
		<ul className={ styles.list }>
			{
				projects.map(project => <ProjectListItem key={ project.id } project={ project } />)
			}
		</ul>
	)
}

export default ProjectsList;
