import React, { useState } from 'react';
import styled from '@emotion/styled';
import CogIcon from './CogIcon';
import Popup from './Popup';
import ISettings from './ISettings';

const Container = styled.div`
  position: absolute;
  top: 5%;
  right: 5%;
`;

export default (props: ISettings) => {
  const openByDefault = props.home === undefined;
  const [popupIsVisible, setPopupIsVisible] = useState(openByDefault);

  const togglePopup = () => setPopupIsVisible(!popupIsVisible);

  return (
    <Container>
      <CogIcon onClick={togglePopup} />
      <Popup isVisible={popupIsVisible} {...props} />
    </Container>
  );
};
