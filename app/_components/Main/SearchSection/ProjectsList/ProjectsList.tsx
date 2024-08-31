import Project from '../../../../_localDB/projectsDB/Project';
import ProjectListItem from './ProjectListItem/ProjectListItem';

const ProjectsList = ({
	projects
}: {
	projects: Project[]
}) => {
	return (
		<ul>
			{
				projects.map(project => <ProjectListItem key={ project.id } project={ project } />)
			}
		</ul>
	)
}

export default ProjectsList;
