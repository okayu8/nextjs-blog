import { NextPage } from 'next';
import styled from 'styled-components';
import Layout from '~/components/Layout';

// export const config = { amp: true };

const Page: NextPage = () => {
  return (
    <Layout>
      <H1>AtomicStyle.work</H1>
    </Layout>
  );
};

const H1 = styled.h1`
  //propsで、themeのmainにある"red"を渡している
  color: ${(props) => props.theme.main};
`;

export default Page;
