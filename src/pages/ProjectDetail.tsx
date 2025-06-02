import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectDetailsSection from '../components/ProjectDetailsSection';

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  
  return (
    <div>
      <ProjectDetailsSection projectId={projectId || ''} />
    </div>
  );
};

export default ProjectDetail;