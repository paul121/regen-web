import React from 'react';
import { useStaticQuery, graphql, PageProps } from 'gatsby';
import { makeStyles } from '@mui/styles';
import { FluidObject } from 'gatsby-image';

import { Theme } from 'web-components/lib/theme/muiTheme';
import SEO from '../components/seo';
import TopSection from '../sections/token/TopSection';
import TokenEconomics from '../sections/token/TokenEconomics';
import InfoSection from '../sections/token/InfoSection';
import Staking from '../sections/token/Staking';
import BlockExplorerSection from '../sections/token/BlockExplorerSection';
import ConnectSection from '../sections/token/ConnectSection';
import MediaSection from '../sections/token/MediaSection';
import TokenDetails from '../sections/token/TokenDetails';
import EmailSubmitSection from '../sections/shared/EmailSubmitSection';
import { TokenPageQuery } from '../generated/graphql';

const useStyles = makeStyles((theme: Theme) => ({
  newsletterTitle: {
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.pxToRem(32),
    },
  },
}));

const query = graphql`
  query tokenPage {
    seoImage: file(relativePath: { eq: "token-aurora.png" }) {
      publicURL
    }
    emailImage: file(relativePath: { eq: "deer-newsletter-bg.png" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sanityTokenPage {
      topSection {
        title
        body
      }
      newsletterSection {
        header
        buttonText
        inputText
      }
    }
  }
`;

const TokenPage = ({ location }: PageProps): JSX.Element => {
  const styles = useStyles();
  const { emailImage, seoImage, sanityTokenPage } = useStaticQuery<TokenPageQuery>(query);
  const data = sanityTokenPage?.topSection;
  const newsletterContent = sanityTokenPage?.newsletterSection;

  return (
    <>
      <SEO
        description={data?.body || ''}
        title={data?.title || ''}
        location={location}
        imageUrl={seoImage?.publicURL || ''}
      />
      <TopSection />
      <TokenEconomics />
      <InfoSection />
      <TokenDetails />
      <BlockExplorerSection />
      <Staking />
      <ConnectSection />
      <MediaSection />
      <EmailSubmitSection
        classes={{ title: styles.newsletterTitle }}
        image={emailImage?.childImageSharp?.fluid as FluidObject}
        altContent={{
          header: newsletterContent?.header || '',
          buttonText: newsletterContent?.buttonText || '',
          inputText: newsletterContent?.inputText || '',
        }}
      />
    </>
  );
};

export default TokenPage;
