import React from 'react';

import Layout from 'src/components/layout';
import SEO from 'src/components/seo';
import MoneyIcon from 'src/images/money.inline.svg';
import { Heading, Paragraph, TextInput } from 'evergreen-ui';

const SecondPage = () => (
  <Layout>
    <SEO title='Home Purchase Timing Calculator' />
    <Heading size={900}>Home Purchase Timing</Heading>
    <Paragraph size={500}>Show me the money!</Paragraph>
    <TextInput name='text-input-name' placeholder='Text input placeholder...' />
    <TextInput name='text-input-name' placeholder='Text input placeholder...' />
    <div className='pulse-animation' style={{ width: '48px', height: '48px', marginTop: '48px' }}>
      <MoneyIcon />
    </div>
  </Layout>
);

export default SecondPage;
