import React from 'react';
import {
  SubContainerImage,
  ContainerPage,
} from '../../test/container-page/container-page';
import { Card } from '../../card';

import './about-us-card.scss';
import './about-us-card-mobile.scss';
import { Text } from '../../text';
import { Particles } from '../../decorators/particles';

export const AboutUsCard = (props: {
  title: string;
  info: string;
  picture: string;
}) => {
  return (
    <div className="about-box">
      <Card
        className="about-us-card"
        title={props.title}
      // background={props.picture}
      >
        <Particles total={30} maxY={300} />
        <ContainerPage className={`container-about-us`}>
          <div className="left-content">
            <Text type="text">{props.info}</Text>
          </div>
          <SubContainerImage img={props.picture} />
        </ContainerPage>
      </Card>
    </div>
  );
};
