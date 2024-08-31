import Project from '../../../../../_localDB/projectsDB/Project';

const ProjectListItem = ({
	project
}: {
	project: Project
}) => {
	return (
		<li>
			<a target="_blank" href={ project.link }>{ project.title }</a>
		</li>
	)
}

export default ProjectListItem;
