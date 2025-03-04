import { TableTabs } from 'components/organisms/TableTabs';

import { getProjectDetailsTabs } from './ProjectDetails.TableTabs.config';
import { ProjectDetailsTableTabsProps } from './ProjectDetails.TableTabs.types';

export const ProjectDetailsTableTabs = ({
  sx,
  ...props
}: ProjectDetailsTableTabsProps) => {
  const tabs = getProjectDetailsTabs(props);
  return <TableTabs tabs={tabs} sx={sx} />;
};
