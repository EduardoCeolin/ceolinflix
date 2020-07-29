import React from "react";
import { VideoCardGroupContainer, Title, ExtraLink } from "./styles";
import VideoCard from "./components/VideoCard";

import ScrollAnimation from "react-animate-on-scroll";
import Slider, { SliderItem } from "../Slider";

function Carousel({ ignoreFirstVideo, category }) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const videos = category.videos;

  return (
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" delay={100}>
      <VideoCardGroupContainer>
        {categoryTitle && (
          <>
            <Title style={{ backgroundColor: categoryColor || "red" }}>
              {categoryTitle}
            </Title>
            {categoryExtraLink && (
              <ExtraLink href={categoryExtraLink.url} target="_blank">
                {categoryExtraLink.text}
              </ExtraLink>
            )}
          </>
        )}
        <Slider>
          {videos.map((video, index) => {
            if (ignoreFirstVideo && index === 0) {
              return null;
            }

            return (
              <SliderItem key={video.titulo}>
                {
                  <VideoCard
                    videoTitle={video.titulo}
                    videoURL={video.url}
                    categoryColor={categoryColor}
                  />
                }
              </SliderItem>
            );
          })}
        </Slider>
      </VideoCardGroupContainer>
    </ScrollAnimation>
  );
}

export default Carousel;
