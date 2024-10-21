import React from "react";
import Layout from '@theme/Layout';
import BentoLayout from "../components/BentoLayout";


export default function AboutMe() {
    return (
        <Layout
            title={"about-me"}
            description="wenjiewei wjwei weiwenjie blog bioinfomatic">
            <main>
                <BentoLayout />
            </main>
        </Layout>
    );
}