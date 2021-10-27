import React from 'react';

import { MenuContainer, MenuItem } from 'modules/pageLayout';
import { useSelector } from 'services/hooks';
import UserIcon from 'vectors/user.svg';

export const MainMenu: React.FC = () => {
  const project = useSelector(state => state.project.data);

  console.log(project)
  return (
    <MenuContainer>
      <MenuItem to="/" title="Projects Overview" icon={null} exact />
        <MenuItem to="/project-summary" title="Project Summary" icon={<UserIcon />} />
        <MenuItem to="/work-status" title="Work Status" icon={<UserIcon />} />
        <MenuItem to="/team-information" title="Team Information" icon={<UserIcon />} />
        <MenuItem to="/deployment-view" title="Deployment View" icon={<UserIcon />} />
    </MenuContainer>
  );
};
