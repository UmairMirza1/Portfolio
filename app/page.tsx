import React from "react";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import { TabsData } from "@/components/TabsData";

const Home = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-8 lg:gap-16 items-start">
        {/* Main content first on phones, right column on desktop */}
        <div className="lg:order-2 min-w-0">
          <TabsData />
        </div>

        <aside className="lg:order-1 flex flex-col space-y-4 min-w-0">
          <Skills />
          <Education />
          <Contact />
        </aside>
      </div>
    </Layout>
  );
};

export default Home;
