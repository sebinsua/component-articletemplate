import React from 'react';
import ArticleTemplate from './';
import AnimatedPanel from '@economist/component-animatedpanel';
import Gobbet from '@economist/component-gobbet';
import customSharebar from '@economist/component-sharebar';
import ImageCaption from '@economist/component-imagecaption';

export default (
  <ArticleTemplate
  section="This is the section"
  title="A billion-person question add more so that we wrap"
  flytitle="If india's monsoon fails add more so that we wrap"
  mainimage="http://lorempixel.com/g/1190/669/people">
    <p className="span_10 margin_1">
    This is the body with <b>rich text</b> Lorem ipsum dolor sit amet, id erat in, nec id et molestie, tortor donec
    fusce ultrices odio cum id, fusce donec tempus, porttitor inceptos proin. Praesent amet, quis nascetur non in. Duis
    amet faucibus porta vulputate molestie, augue elit urna, adipiscing  metus interdum vitae vivamus voluptatem taciti,
    id nulla proin a, sociis est felis massa. Eleifend lectus, nec amet vestibulum pede. Risus justo praesent dolor quis
    elementum et, ipsum dui, platea ligula urna et bibendum leo, sapien bibendum fermentum, eros in adipiscing non
    facilis curabitur. Tristique molestie eget nonummy vestibulum. Dui nibh duis pellentesque volutpat ultricies,
    erat semper duis mi corporis suspendisse dolor. Viverra nunc vel turpis ligula sed proin. Tellus mauris vel morbi
    elit mauris, iaculis leo corporis vestibulum tincidunt tellus, lobortis nunc, sit sed at, in eu sem enim. Egestas
    et sollicitudin tellus, quam dolor etiam. Ut turpis ac, ut felis augue id risus, vitae libero fusce, at ornare sed
    vel vulputate.
    </p>
    <blockquote className="article-blockqoute-image">This is an example of a qoute, in this case it has an image
    <img src="http://lorempixel.com/g/290/163/people" />
    </blockquote>
     <Gobbet className="gobbet" showShareBar={true} sharebar={customSharebar}>
      <ImageCaption caption="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
      dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
      quam felis, ultricies nec, pellentesque eu, pretium quis, sem." src="http://lorempixel.com/g/300/169/food"
      textposition="top" />
    </Gobbet>
    <p className="span_10 margin_1">
    Diam massa proin libero vestibulum, faucibus sollicitudin diam a aliquet, turpis magna, orci facilisis lorem,
    porttitor in sit gravida. Varius vivamus congue porta, leo dolor lorem ullamcorper, id nostra tempus condimentum
    quam. Sit ligula in, phasellus enim pede in in, doloremque fuga felis id ut venenatis, diam nonummy nam varius,
    risus lacus ultricies condimentum magna nec viverra. Non justo vestibulum, lectus mollis mi et. Nulla hac, nostra
    augue risus sit litora amet donec. Quisque magna, urna nostra lacus id, pulvinar wisi, nulla consequat a, a mattis
    mi ac amet suspendisse. Nisl felis labore eu, convallis ac montes dictum at eget quam, lectus euismod velit eget
    nec ultricies tempor. Vel sem feugiat eu et consectetuer, quam aenean, in vitae eu elit eu, eget sed, proin augue
    vestibulum luctus vitae laoreet nec.</p><p>Ultricies vel magna nullam, rutrum odio, vel leo mus arcu. Mattis
    lacinia pellentesque id, risus mauris rhoncus ac suspendisse rutrum. Lacus lectus consectetuer vel, imperdiet
    curabitur sit qui ac ut, morbi aliquam dolor suscipit aliquet, quam at quis maecenas. Scelerisque cubilia aliquam
    donec donec justo porta, at tellus nibh id pede, orci vehicula sed, lectus accumsan nulla fringilla et, augue
    gravida mi sapien sapien interdum. Orci elit eget mi, a ac, donec dictumst erat consectetuer scelerisque neque,
    arcu at non cras ultricies augue imperdiet, erat dictum. Iaculis augue egestas suspendisse tristique, nulla neque
    blandit lacus vulputate blandit, nulla nulla sed quam sit, ullamcorper orci, nec viverra netus feugiat ligula.
    Mauris lectus expedita.</p><p>Lacinia morbi, arcu turpis pede bibendum leo eget, venenatis luctus at. Ut quis
    quisque ac, maecenas vitae wisi harum ipsum dapibus ante, mollis amet libero, occaecati pellentesque, vel orci
    nunc lacus donec. Sed scelerisque pretium vehicula vestibulum, luctus ac sem adipiscing, etiam vel magna non
    lectus, ut lacinia ligula, mus massa tristique nibh nec sed. Sit lacinia. Donec justo lorem sagittis.
    </p>
    <blockquote className="article-blockqoute">This is an example of a qoute, lets add a few more lines here to pad
    it out a bit
    </blockquote>
    <p>Ultricies vel magna nullam, rutrum odio, vel leo mus arcu. Mattis lacinia pellentesque id, risus mauris rhoncus
    ac suspendisse rutrum. Lacus lectus consectetuer vel, imperdiet curabitur sit qui ac ut, morbi aliquam dolor
    suscipit aliquet, quam at quis maecenas. Scelerisque cubilia aliquam donec donec justo porta, at tellus nibh id
    pede, orci vehicula sed, lectus accumsan nulla fringilla et, augue gravida mi sapien sapien interdum. Orci elit
    eget mi, a ac, donec dictumst erat consectetuer scelerisque neque, arcu at non cras ultricies augue imperdiet,
    erat dictum. Iaculis augue egestas suspendisse tristique, nulla neque blandit lacus vulputate blandit, nulla
    nulla sed quam sit, ullamcorper orci, nec viverra netus feugiat ligula. Mauris lectus expedita.
    </p>
     <AnimatedPanel className="span_12" />
    <p>Lacinia morbi, arcu turpis pede bibendum leo eget, venenatis luctus at. Ut quis quisque ac, maecenas vitae wisi
    harum ipsum dapibus ante, mollis amet libero, occaecati pellentesque, vel orci nunc lacus donec. Sed scelerisque
    pretium vehicula vestibulum, luctus ac sem adipiscing, etiam vel magna non lectus, ut lacinia ligula, mus massa
    tristique nibh nec sed. Sit lacinia. Donec justo lorem sagittis.
    </p>
    <figure className="article-image-caption">
    <img src="http://lorempixel.com/g/290/163/cats" />
    <figcaption>
    This is an example of a image with a caption, lets add a few more lines here to pad it out a bit
    </figcaption>
    </figure>
    <p>
    Ultricies vel magna nullam, rutrum odio, vel leo mus arcu. Mattis lacinia pellentesque id, risus mauris rhoncus ac
    suspendisse rutrum. Lacus lectus consectetuer vel, imperdiet curabitur sit qui ac ut, morbi aliquam dolor suscipit
    aliquet, quam at quis maecenas. Scelerisque cubilia aliquam donec donec justo porta, at tellus nibh id pede, orci
    vehicula sed, lectus accumsan nulla fringilla et, augue gravida mi sapien sapien interdum. Orci elit eget mi, a
    ac, donec dictumst erat consectetuer scelerisque neque, arcu at non cras ultricies augue imperdiet, erat dictum.
    Iaculis augue egestas suspendisse tristique, nulla neque blandit lacus vulputate blandit, nulla nulla sed quam
    sit, ullamcorper orci, nec viverra netus feugiat ligula. Mauris lectus expedita.
    </p>
    <p>
    Lacinia morbi, arcu turpis pede bibendum leo eget, venenatis luctus at. Ut quis quisque ac, maecenas vitae wisi
    harum ipsum dapibus ante, mollis amet libero, occaecati pellentesque, vel orci nunc lacus donec. Sed scelerisque
    pretium vehicula vestibulum, luctus ac sem adipiscing, etiam vel magna non lectus, ut lacinia ligula, mus massa
    tristique nibh nec sed. Sit lacinia. Donec justo lorem sagittis.
    </p>
  </ArticleTemplate>
);
