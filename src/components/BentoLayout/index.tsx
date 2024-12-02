import React from 'react';
import BentoContainer from './BentoContainer';
import wwj from '@site/static/img/wwj-scenery.jpeg'
import MapChart from './map';
import Timeline from './timeline'
import coffeecup from '@site/static/img/coffee-cup.png'

const BentoLayout: React.FC = () => {
  return (
    <main className="bento">
      {/* Variant 1 */}
      <BentoContainer
        variant="variant-1"
        items={[
          {
            rows: 'span 2',
            columns: '1 / -1',
            content: <div style={{ position: 'relative', alignContent: 'center', padding: '1rem' }}><h1>Hi there!</h1><h1>I'm Wenjie Wei.</h1><h3>PhD student in <a href="https://yanglab.westlake.edu.cn">YangLab</a></h3><img
              src={coffeecup}
              alt="Profile"
              style={{
                position: 'absolute',
                top: '-120px',   /* Moves the image slightly above the div */
                right: '-40px', /* Moves the image to the right, slightly outside the div */
                width: '200px', /* Adjust the image size */
                height: 'auto'
              }}
            /></div>
          },
          // {
          //   rows: 'span 1',
          //   columns: '1 / -1',
          //   content: <div style={{ alignContent: 'center', padding: '1rem' }}><h4>I was born in 1999 in Shaoxing, China</h4></div>
          // },
          {
            rows: 'span 3',
            columns: '1 / -1',
            content: <div style={{ alignContent: 'center', padding: '1rem' }}><h4>I am currently in Hangzhou. You can fly to me like this👇🏻</h4><MapChart /></div>
          },
          // {
          //   columns: '1 / -1',
          //   content: <div><h3>card</h3><h3>card</h3></div>
          // },
          // {
          //   columns: '1 / -1',
          //   rows: 'span 2',
          //   content: <div><h3>Card 5</h3></div>
          // },
          // {
          //   content: <div><h3>Card 6</h3></div>
          // },
        ]}
      />

      {/* Variant 2 */}
      <BentoContainer
        variant="variant-2"
        items={[
          {
            rows: 'span 1',
            columns: '1 / -1',
            content: <div style={{ alignContent: 'center', padding: '1rem' }}><h3>I enjoy contributing to the bioinformatics community.</h3><img src="https://github-readme-stats.vercel.app/api?username=wjwei-handsome&include_all_commits=true&theme=swift&show_icons=true" alt="github_stats" style={{ borderRadius: '10px', height: '100%' }} /> </div>
          },
          // {
          //   columns: 'span 2',
          //   content: <div><h3>Card B</h3></div>
          // },
          {
            rows: 'span 4',
            columns: '1 / -1',
            content: <img src={wwj} alt="Card C" style={{ borderRadius: '10px', height: '100%' }} />
          },
          // {
          //   rows: 'span 4',
          //   columns: '1 / -1',
          //   content: <div><h3>Card D</h3></div>
          // },
          // {
          //   rows: 'span 1',
          //   columns: '1 / -1',
          //   content: <div><h3>Card E</h3></div>
          // },
          // {
          //   columns: '1 / -1',
          //   rows: 'span 2',
          //   content: <div><h3>Card F</h3></div>
          // },
        ]}
      />

      {/* Variant 3 */}
      <BentoContainer
        variant="variant-3"
        items={[
          {
            rows: 'span 1',
            columns: '1 / -1',
            content: <div style={{ alignContent: 'center', padding: '1rem' }}><h3>I'm still learning these languages</h3><img src="https://github-readme-stats.vercel.app/api/top-langs/?username=wjwei-handsome&layout=compact&theme=swift" alt="Card 2" style={{ borderRadius: '10px', height: '100%', alignContent: 'center' }} /></div>
          },
          // {
          //   rows: 'span 3',
          //   content: <div><h3>Card Y</h3></div>
          // },
          {
            rows: 'span 4',
            columns: '1 / -1',
            content: <div><Timeline /></div>
          },
          // {
          //   columns: '1 / -1',
          //   content: <div><h3>Card W</h3><button>Click Here</button></div>
          // },
          // {
          //   columns: '1 / -1',
          //   content: <div><h3>Card V</h3></div>
          // },
        ]}
      />
    </main >
  );
};

export default BentoLayout;
