import { NextPage } from 'next';
import styled from 'styled-components';
import Layout from '~/components/Layout';

// export const config = { amp: true };

const Page: NextPage = () => {
  // getPosts();
  return (
    <Layout title="test">
      <Text>AtomicStyle.work</Text>
    </Layout>
  );
};

const Text = styled.h1`
  //propsで、themeのmainにある"red"を渡している
  color: ${(props) => props.theme.main};
`;

export default Page;
