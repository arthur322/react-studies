import { useState } from "react";
import Layout from "../components/Layout";

const Index = () => {
  const [clicks, setClick] = useState(0);

  return (
    <Layout>
      <p>Hello nextjs!!!!</p>
      <button onClick={() => setClick(clicks + 1)}>Click me plez</button>
      <button onClick={() => setClick(0)}>Reset counter</button>
      <h4>{clicks}</h4>
    </Layout>
  );
};

export default Index;
