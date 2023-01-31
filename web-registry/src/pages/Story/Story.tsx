import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ProjectFormTemplate } from 'components/templates/ProjectFormTemplate';

import { StoryForm, StoryValues } from '../../components/organisms';
import {
  useProjectByIdQuery,
  useUpdateProjectByIdMutation,
} from '../../generated/graphql';
import { useProjectEditContext } from '../ProjectEdit';

const Story: React.FC<React.PropsWithChildren<unknown>> = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const { isEdit } = useProjectEditContext();

  const [updateProject] = useUpdateProjectByIdMutation();
  const { data } = useProjectByIdQuery({
    variables: { id: projectId },
    fetchPolicy: 'cache-and-network',
  });

  let initialFieldValues: StoryValues | undefined;
  if (data?.projectById?.metadata) {
    const metadata = data.projectById.metadata;
    initialFieldValues = {
      'regen:landStory': metadata['regen:landStory'],
      'regen:landStewardStory': metadata['regen:landStory'],
      'regen:landStewardStoryTitle': metadata['regen:landStewardStoryTitle'],
      'regen:projectQuote': metadata['regen:projectQuote'],
    };
  }

  const saveAndExit = (): Promise<void> => {
    // TODO: functionality
    return Promise.resolve();
  };

  async function submit(values: StoryValues): Promise<void> {
    const metadata = { ...data?.projectById?.metadata, ...values };
    try {
      await updateProject({
        variables: {
          input: {
            id: projectId,
            projectPatch: {
              metadata,
            },
          },
        },
      });
      !isEdit && navigate(`/project-pages/${projectId}/media`);
    } catch (e) {
      // TODO: Should we display the error banner here?
      // https://github.com/regen-network/regen-registry/issues/554
      // console.log(e);
    }
  }

  function navigateNext(): void {
    navigate(`/project-pages/${projectId}/media`);
  }

  function navigatePrev(): void {
    navigate(`/project-pages/${projectId}/entity-display`);
  }

  return (
    <ProjectFormTemplate
      isEdit={isEdit}
      title="Story"
      saveAndExit={saveAndExit}
    >
      <StoryForm
        submit={submit}
        initialValues={initialFieldValues}
        onPrev={navigatePrev}
        onNext={navigateNext}
      />
    </ProjectFormTemplate>
  );
};

export { Story };
