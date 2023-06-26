import { ProjectInfo } from '@regen-network/api/lib/generated/regen/ecocredit/v1/query';

import { Props as ActionCardProps } from 'web-components/lib/components/molecules/ActionCard/ActionCard';
import { Party } from 'web-components/lib/components/user/UserInfo';

import { Maybe, ProjectFieldsFragment } from 'generated/graphql';
import {
  AllCreditClassQuery,
  AllCreditTypeQuery,
  SdgByIriQuery,
} from 'generated/sanity-graphql';
import {
  BatchInfoWithSupply,
  BatchTotalsForProject,
} from 'types/ledger/ecocredit';
import {
  AnchoredProjectMetadataLD,
  LegacyProjectMetadataLD,
  ProjectPageMetadataLD,
} from 'lib/db/types/json-ld';

import { ProjectWithOrderData } from 'pages/Projects/Projects.types';

export type ProjectTopSectionProps = {
  offChainProject?: Maybe<ProjectFieldsFragment>;
  onChainProject?: ProjectInfo;
  projectMetadata?: AnchoredProjectMetadataLD | LegacyProjectMetadataLD;
  projectPageMetadata?: ProjectPageMetadataLD;
  creditClassSanity?: AllCreditClassQuery['allCreditClass'][0];
  sanityCreditTypeData?: AllCreditTypeQuery;
  geojson?: any;
  isGISFile?: boolean;
  onChainProjectId?: string;
  landSteward?: Party;
  landOwner?: Party;
  projectDeveloper?: Party;
  projectVerifier?: Party;
  loading?: boolean;
  soldOutProjectsIds: string[];
  projectWithOrderData: ProjectWithOrderData;
  batchData?: {
    batches?: BatchInfoWithSupply[];
    totals?: BatchTotalsForProject;
  };
  otcCard?: ActionCardProps;
};

export type SdgType = SdgByIriQuery['allSdg'][0];
