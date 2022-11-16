import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
  const { colorMode } = useColorMode();
  return (
    <div style={{marginTop:'30px'}}>
    <Giscus
      repo="wjwei-handsome/wjwei-docusaurus"
      repoId="R_kgDOIB2dAQ"
      category="General"
      categoryId="DIC_kwDOIB2dAc4CRiFZ"
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme={colorMode}
      lang="en"
      loading="lazy"
      crossorigin="anonymous"
      async
    />
    </div>
  );
}