import { Slider } from "../components/Slider";
import { Layout } from "../components/Layout";
import Tourism from "../components/Tourism/Tourism";
import CodeDiscount from "../components/CodeDiscount/CodeDiscount";

const Home = () => {
  return (
    <>
      <Layout>
        <Slider/>
        <Tourism/>
        <CodeDiscount/>
      </Layout>
    </>
  );
};

export default Home;
