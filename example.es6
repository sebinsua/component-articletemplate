import React from 'react';
import ArticleTemplate from './index.es6';

ArticleTemplate.store.add({
  id: '1',
  attributes: {
    section: 'This is the section',
    title: 'A billion-person question add more so that we wrap',
    flytitle: 'If india\'s monsoon fails add more so that we wrap',
    mainimage: 'http://lorempixel.com/g/1190/669/people',
    rubric: 'This is a nice little rubric for testing ',
    content: [
      `This is the body with <b>rich text</b> Lorem ipsum dolor sit amet, id erat in, nec id et molestie, tortor donec
      fusce ultrices odio cum id, fusce donec tempus, porttitor inceptos proin. Praesent amet, quis nascetur non in.
      Duis amet faucibus porta vulputate molestie, augue elit urna, adipiscing  metus interdum vitae vivamus voluptatem
      taciti, id nulla proin a, sociis est felis massa. Eleifend lectus, nec amet vestibulum pede. Risus juto praesent`,
      `Dolor quis elementum et, ipsum dui, platea ligula urna et bibendum leo, sapien bibendum fermentum, eros in
      adipiscing non facilis curabitur. Tristique molestie eget nonummy vestibulum. Dui nibh duis pellentesque volutpat
      ultricies, erat semper duis mi corporis suspendisse dolor. Viverra nunc vel turpis ligula sed proin. Tellus
      mauris vel morbi elit mauris, iaculis leo corporis vestibulum tincidunt tellus, lobortis nunc, sit sed at, in eu
      sem enim. Egestas et sollicitudin tellus, quam dolor etiam. Ut turpis ac, ut felis augue id risus, vitae libero
      fusce, at ornare sed vel vulputate.`,
      {
        component: 'PullQuote',
        props: { 'className': 'ArticleTemplate--blockquote' },
        content: [
          'This is an example of a qoute, in this case it has an image',
          {
            component: 'Image',
            props: {
              src: 'http://lorempixel.com/g/290/163/people',
              className: 'ArticleTemplate--blockquote-image',
            },
          },
        ],
      },
      {
        component: 'Gobbet',
        props: {
          title: 'this is a test',
          showShareBar: true,
        },
        content: [
          {
            component: 'ImageCaption',
            props: {
              caption: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
              src: 'http://lorempixel.com/g/300/169/food',
              textposition: 'top',
            },
          },
        ],
      },
      `Diam massa proin libero vestibulum, faucibus sollicitudin diam a aliquet, turpis magna, orci facilisis lorem,
      porttitor in sit gravida. Varius vivamus congue porta, leo dolor lorem ullamcorper, id nostra tempus condimentum
      quam. Sit ligula in, phasellus enim pede in in, doloremque fuga felis id ut venenatis, diam nonummy nam varius`,
      `Risus lacus ultricies condimentum magna nec viverra. Non justo vestibulum, lectus mollis mi et. Nulla hac, nostra
      augue risus sit litora amet donec. Quisque magna, urna nostra lacus id, pulvinar wisi, nulla consequat a, a
      mattis mi ac amet suspendisse. Nisl felis labore eu, convallis ac montes dictum at eget quam, lectus euismod
      velit eget nec ultricies tempor. Vel sem feugiat eu et consectetuer, quam aenean, in vitae eu elit eu, eget sed`,
      `Proin augue vestibulum luctus vitae laoreet nec. Ultricies vel magna nullam, rutrum odio, vel leo mus arcu.
      Mattis lacinia pellentesque id, risus mauris rhoncus ac suspendisse rutrum. Lacus lectus consectetuer vel,
      imperdiet curabitur sit qui ac ut, morbi aliquam dolor suscipit aliquet, quam at quis maecenas. Scelerisque
      cubilia aliquam donec donec justo porta, at tellus nibh id pede, orci vehicula sed, lectus accumsan nulla.`,
      `Fringilla et, augue gravida mi sapien sapien interdum. Orci elit eget mi, a ac, donec dictumst erat consectetuer
      scelerisque neque, arcu at non cras ultricies augue imperdiet, erat dictum. Iaculis augue egestas suspendisse
      tristique, nulla neque blandit lacus vulputate blandit, nulla nulla sed quam sit, ullamcorper orci, nec viverra
      netus feugiat ligula. Mauris lectus expedita.`,
      `Lacinia morbi, arcu turpis pede bibendum leo eget, venenatis luctus at. Ut quis quisque ac, maecenas vitae wisi
      harum ipsum dapibus ante, mollis amet libero, occaecati pellentesque, vel orci
      nunc lacus donec. Sed scelerisque pretium vehicula vestibulum, luctus ac sem adipiscing, etiam vel magna non
      lectus, ut lacinia ligula, mus massa tristique nibh nec sed. Sit lacinia. Donec justo lorem sagittis.`,
      {
        component: 'PullQuote',
        props: { 'className': 'ArticleTemplate--blockquote' },
        content: [
          'This is an example of a qoute, lets add a few more lines here to pad it out a bit',
        ],
      },
      `Ultricies vel magna nullam, rutrum odio, vel leo mus arcu. Mattis lacinia pellentesque id, risus mauris rhoncus
      ac suspendisse rutrum. Lacus lectus consectetuer vel, imperdiet curabitur sit qui ac ut, morbi aliquam dolor
      suscipit aliquet, quam at quis maecenas. Scelerisque cubilia aliquam donec donec justo porta, at tellus nibh id
      pede, orci vehicula sed, lectus accumsan nulla fringilla et, augue gravida mi sapien sapien interdum. Orci elit
      eget mi, a ac, donec dictumst erat consectetuer scelerisque neque, arcu at non cras ultricies augue imperdiet,
      erat dictum. Iaculis augue egestas suspendisse tristique, nulla neque blandit lacus vulputate blandit, nulla
      nulla sed quam sit, ullamcorper orci, nec viverra netus feugiat ligula. Mauris lectus expedita.`,
      `Lacinia morbi, arcu turpis pede bibendum leo eget, venenatis luctus at. Ut quis quisque ac, maecenas vitae wisi
      harum ipsum dapibus ante, mollis amet libero, occaecati pellentesque, vel orci nunc lacus donec. Sed scelerisque
      pretium vehicula vestibulum, luctus ac sem adipiscing, etiam vel magna non lectus, ut lacinia ligula, mus massa
      tristique nibh nec sed. Sit lacinia. Donec justo lorem sagittis.`,
      `Ultricies vel magna nullam, rutrum odio, vel leo mus arcu. Mattis lacinia pellentesque id, risus mauris rhoncus
      ac suspendisse rutrum. Lacus lectus consectetuer vel, imperdiet curabitur sit qui ac ut, morbi aliquam dolor`,
      `Suscipit aliquet, quam at quis maecenas. Scelerisque cubilia aliquam donec donec justo porta, at tellus nibh id
      pede, orci vehicula sed, lectus accumsan nulla fringilla et, augue gravida mi sapien sapien interdum. Orci elit
      eget mi, a ac, donec dictumst erat consectetuer scelerisque neque, arcu at non cras ultricies augue imperdiet,
      erat dictum. Iaculis augue egestas suspendisse tristique, nulla neque blandit lacus vulputate blandit, nulla nulla
      sed quam sit, ullamcorper orci, nec viverra netus feugiat ligula. Mauris lectus expedita.`,
      `Lacinia morbi, arcu turpis pede bibendum leo eget, venenatis luctus at. Ut quis quisque ac, maecenas vitae wisi
      harum ipsum dapibus ante, mollis amet libero, occaecati pellentesque, vel orci nunc lacus donec. Sed scelerisque
      pretium vehicula vestibulum, luctus ac sem adipiscing, etiam vel magna non lectus, ut lacinia ligula, mus massa
      tristique nibh nec sed. Sit lacinia. Donec justo lorem sagittis.`,
    ],
  },
});


ArticleTemplate.store.add({
  id: '2',
  attributes: {
    section: 'This is the section',
    title: 'A billion-person question add more so that we wrap',
    flytitle: 'If india\'s monsoon fails add more so that we wrap',
    mainimage: 'http://lorempixel.com/g/1190/669/people',
    rubric: 'This is a nice little rubric for testing ',
    content: [
      `This is the body with <b>rich text</b> Lorem ipsum dolor sit amet, id erat in, nec id et molestie, tortor donec
      fusce ultrices odio cum id, fusce donec tempus, porttitor inceptos proin. Praesent amet, quis nascetur non in.
      Duis amet faucibus porta vulputate molestie, augue elit urna, adipiscing  metus interdum vitae vivamus voluptatem
      taciti, id nulla proin a, sociis est felis massa. Eleifend lectus, nec amet vestibulum pede. Rius justo praesent`,
      `Dolor quis elementum et, ipsum dui, platea ligula urna et bibendum leo, sapien bibendum fermentum, eros in
      adipiscing non facilis curabitur. Tristique molestie eget nonummy vestibulum. Dui nibh duis pellentesque volutpat
      ultricies, erat semper duis mi corporis suspendisse dolor. Viverra nunc vel turpis ligula sed proin. Tellus
      mauris vel morbi elit mauris, iaculis leo corporis vestibulum tincidunt tellus, lobortis nunc, sit sed at, in eu
      sem enim. Egestas et sollicitudin tellus, quam dolor etiam. Ut turpis ac, ut felis augue id risus, vitae libero
      fusce, at ornare sed vel vulputate.`,
      {
        component: 'PullQuote',
        props: { 'className': 'ArticleTemplate--blockquote' },
        content: [
          'This is an example of a qoute, in this case it has an image',
          {
            component: 'Image',
            props: {
              src: 'http://lorempixel.com/g/290/163/people',
              className: 'ArticleTemplate--blockquote-image',
            },
            content: [],
          },
        ],
      },
      // {
      //   name: 'WorldIfGobbet',
      //   props: {},
      //   content: [
      //     name: 'ImageCaption',
      //     props: {
      //       caption='Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
      //       src='http://lorempixel.com/g/300/169/food'
      //       textposition='top'
      //     }
      //   ]
      // },
      `Diam massa proin libero vestibulum, faucibus sollicitudin diam a aliquet, turpis magna, orci facilisis lorem,
      porttitor in sit gravida. Varius vivamus congue porta, leo dolor lorem ullamcorper, id nostra tempus condimentum
      quam. Sit ligula in, phasellus enim pede in in, doloremque fuga felis id ut venenatis, diam nonummy nam varius`,
      `Risus lacus ultricies condimentum magna nec viverra. Non justo vestibulum, lectus mollis mi et. Nulla hac, nostra
      augue risus sit litora amet donec. Quisque magna, urna nostra lacus id, pulvinar wisi, nulla consequat a, a
      mattis mi ac amet suspendisse. Nisl felis labore eu, convallis ac montes dictum at eget quam, lectus euismod
      velit eget nec ultricies tempor. Vel sem feugiat eu et consectetuer, quam aenean, in vitae eu elit eu, eget sed`,
      `Proin augue vestibulum luctus vitae laoreet nec. Ultricies vel magna nullam, rutrum odio, vel leo mus arcu.
      Mattis lacinia pellentesque id, risus mauris rhoncus ac suspendisse rutrum. Lacus lectus consectetuer vel,
      imperdiet curabitur sit qui ac ut, morbi aliquam dolor suscipit aliquet, quam at quis maecenas. Scelerisque
      cubilia aliquam donec donec justo porta, at tellus nibh id pede, orci vehicula sed, lectus accumsan nulla.`,
      `Fringilla et, augue gravida mi sapien sapien interdum. Orci elit eget mi, a ac, donec dictumst erat consectetuer
      scelerisque neque, arcu at non cras ultricies augue imperdiet, erat dictum. Iaculis augue egestas suspendisse
      tristique, nulla neque blandit lacus vulputate blandit, nulla nulla sed quam sit, ullamcorper orci, nec viverra
      netus feugiat ligula. Mauris lectus expedita.`,
      `Lacinia morbi, arcu turpis pede bibendum leo eget, venenatis luctus at. Ut quis quisque ac, maecenas vitae wisi
      harum ipsum dapibus ante, mollis amet libero, occaecati pellentesque, vel orci
      nunc lacus donec. Sed scelerisque pretium vehicula vestibulum, luctus ac sem adipiscing, etiam vel magna non
      lectus, ut lacinia ligula, mus massa tristique nibh nec sed. Sit lacinia. Donec justo lorem sagittis.`,
      {
        component: 'PullQuote',
        props: { 'className': 'ArticleTemplate--blockquote' },
        content: [
          'This is an example of a qoute, lets add a few more lines here to pad it out a bit',
        ],
      },
      `Ultricies vel magna nullam, rutrum odio, vel leo mus arcu. Mattis lacinia pellentesque id, risus mauris rhoncus
      ac suspendisse rutrum. Lacus lectus consectetuer vel, imperdiet curabitur sit qui ac ut, morbi aliquam dolor
      suscipit aliquet, quam at quis maecenas. Scelerisque cubilia aliquam donec donec justo porta, at tellus nibh id
      pede, orci vehicula sed, lectus accumsan nulla fringilla et, augue gravida mi sapien sapien interdum. Orci elit
      eget mi, a ac, donec dictumst erat consectetuer scelerisque neque, arcu at non cras ultricies augue imperdiet,
      erat dictum. Iaculis augue egestas suspendisse tristique, nulla neque blandit lacus vulputate blandit, nulla
      nulla sed quam sit, ullamcorper orci, nec viverra netus feugiat ligula. Mauris lectus expedita.`,
      `Lacinia morbi, arcu turpis pede bibendum leo eget, venenatis luctus at. Ut quis quisque ac, maecenas vitae wisi
      harum ipsum dapibus ante, mollis amet libero, occaecati pellentesque, vel orci nunc lacus donec. Sed scelerisque
      pretium vehicula vestibulum, luctus ac sem adipiscing, etiam vel magna non lectus, ut lacinia ligula, mus massa
      tristique nibh nec sed. Sit lacinia. Donec justo lorem sagittis.`,
      `Ultricies vel magna nullam, rutrum odio, vel leo mus arcu. Mattis lacinia pellentesque id, risus mauris rhoncus
      ac suspendisse rutrum. Lacus lectus consectetuer vel, imperdiet curabitur sit qui ac ut, morbi aliquam dolor`,
      `Suscipit aliquet, quam at quis maecenas. Scelerisque cubilia aliquam donec donec justo porta, at tellus nibh id
      pede, orci vehicula sed, lectus accumsan nulla fringilla et, augue gravida mi sapien sapien interdum. Orci elit
      eget mi, a ac, donec dictumst erat consectetuer scelerisque neque, arcu at non cras ultricies augue imperdiet,
      erat dictum. Iaculis augue egestas suspendisse tristique, nulla neque blandit lacus vulputate blandit, nulla nulla
      sed quam sit, ullamcorper orci, nec viverra netus feugiat ligula. Mauris lectus expedita.`,
      `Lacinia morbi, arcu turpis pede bibendum leo eget, venenatis luctus at. Ut quis quisque ac, maecenas vitae wisi
      harum ipsum dapibus ante, mollis amet libero, occaecati pellentesque, vel orci nunc lacus donec. Sed scelerisque
      pretium vehicula vestibulum, luctus ac sem adipiscing, etiam vel magna non lectus, ut lacinia ligula, mus massa
      tristique nibh nec sed. Sit lacinia. Donec justo lorem sagittis.`,
    ],
  },
});
export default (
  <ArticleTemplate params={{ id: '1' }}/>
);
