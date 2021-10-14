import * as i from 'types';
import React from 'react';

import { Header, Sidebar } from 'modules/pageLayout';

import { ChildrenWrapper } from './styled';

export const Page: React.FC<PageProps> = ({
  children,
  headerActions,
  headerMainAction,
  headerTabs,
  statusLabel,
  title,
  isLoading,
}) => {
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} />
      <Header
        title={title}
        isLoading={isLoading}
        headerActions={headerActions}
        headerMainAction={headerMainAction}
        headerTabs={headerTabs}
        setSidebarOpen={setSidebarOpen}
        isSidebarOpen={isSidebarOpen}
        statusLabel={statusLabel}
      />
      <ChildrenWrapper headerHasTabs={Boolean(headerTabs)}>
        {children}
      </ChildrenWrapper>
    </>
  );
};

type PageProps = {
  children: React.ReactNode;
  headerActions?: i.HeaderAction[];
  headerMainAction?: i.HeaderAction;
  headerTabs?: i.Tab[];
  isLoading?: boolean;
  statusLabel?: i.StatusLabel;
  title: string;
};
