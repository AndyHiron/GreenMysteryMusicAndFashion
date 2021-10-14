import * as i from 'types';
import React from 'react';

import { Tab } from '../Tab';
import { TabGroupContainer } from './styled';

export const TabGroup: React.FC<TabGroupProps> = ({ tabs }) => {
  return (
    <TabGroupContainer>
      {tabs.map((tab) => (
        <Tab
          to={tab.to}
          exact={tab.exact}
          key={tab.to}
        >
          {tab.label}
        </Tab>
      ))}
    </TabGroupContainer>
  );
};

export type TabGroupProps = {
  tabs: i.Tab[];
};
