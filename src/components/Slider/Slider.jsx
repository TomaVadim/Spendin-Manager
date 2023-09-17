import { Swiper, SwiperSlide } from 'swiper/react';

import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import 'swiper/css';

const Span = styled.span`
  font-weight: 700;
  font-size: 16px;
  user-select: none;
  transition: border-bottom 0.3s ease;
  cursor: pointer;
`;

export const Slider = ({ setSelectedCategory }) => {
  const { t } = useTranslation();

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <Span onClick={() => setSelectedCategory('all')}>{t('optionAll')}</Span>
      </SwiperSlide>
      <SwiperSlide>
      <Span onClick={() => setSelectedCategory('foods')}>
            {t('optionFoods')}
          </Span>
      </SwiperSlide>
      <SwiperSlide>
      <Span onClick={() => setSelectedCategory('health')}>
            {t('optionHealth')}
          </Span>
        </SwiperSlide>
        <SwiperSlide>
        <Span onClick={() => setSelectedCategory('clothing')}>
            {t('optionClothing')}
          </Span>
        </SwiperSlide>
        <SwiperSlide>
        <Span onClick={() => setSelectedCategory('education')}>
            {t('optionEducation')}
          </Span>
        </SwiperSlide>
        <SwiperSlide>
        <Span onClick={() => setSelectedCategory('transport')}>
            {t('optionTransport')}
          </Span>
        </SwiperSlide>
        <SwiperSlide>
        <Span onClick={() => setSelectedCategory('pets')}>{t('optionPets')}</Span>
          </SwiperSlide>
          <SwiperSlide>
          <Span onClick={() => setSelectedCategory('bills')}>
            {t('optionBills')}
          </Span>
          </SwiperSlide>
          <SwiperSlide>
          <Span onClick={() => setSelectedCategory('electronics')}>
            {t('optionElectronics')}
          </Span>
          </SwiperSlide>
    </Swiper>
  )
}