// import { SubTitle } from 'CommonStyle/Title/Title.styled';

import css from './Main.module.css';
import {
  InfoItems,
  InfoList,
  TrackerInfoContainer,
} from './WhyDrinkWater.styled';

export const WhyDrinkWater = () => {
  return (
    <>
      <TrackerInfoContainer>
        <h3 className={css.list_title}>Why drink water</h3>
        <InfoList>
          <InfoItems>Supply of nutrients to all organs</InfoItems>
          <InfoItems>Providing oxygen to the lungs</InfoItems>
          <InfoItems>Maintaining the work of the heart</InfoItems>
          <InfoItems>Release of processed substances</InfoItems>
          <InfoItems>
            Ensuring the stabiInfoItemsty of the internal environment
          </InfoItems>
          <InfoItems>Maintaining within the normal temperature</InfoItems>
          <InfoItems>
            Maintaining an immune system capable of resisting disease
          </InfoItems>
        </InfoList>
      </TrackerInfoContainer>
    </>
  );
};
