import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")<{ carouselWith: number }>`
  position: relative;
  width: ${(props) => props.carouselWith + 2}vw;
  margin: 2vw auto 0 auto;
  perspective: 1000px;

  @media (max-width: 900px) {
    width: ${(props) => (props.carouselWith + 2) * 1.2}vw;
  }
`;

export const CarouselContainer = styled("div")<{ isAnimationPaused: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;

  /* transform: rotateY(-360deg) translateZ(-412px); add reverse transformation from the slides */

  animation: ${({ isAnimationPaused }) =>
    isAnimationPaused ? "none" : "swirl 40s steps(10000, end) infinite"};

  @keyframes swirl {
    from {
      transform: rotateY(-360deg);
    }
    to {
      transform: rotateY(0deg);
    }
  }
`;

export const Slide = styled("div")<{
  degY: number;
  radius: number;
  carouselWith: number;
}>`
  position: absolute;
  top: 10px;
  left: 10px;
  width: ${(props) => props.carouselWith}vw;
  height: ${(props) => props.carouselWith}vh;
  transform: rotateY(${(props) => props.degY}deg)
    translateZ(${(props) => props.radius}vw);

  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 23% 23% 23% 10%;
  grid-gap: 1%;
  place-items: center;
  justify-items: center;

  @media (max-width: 900px) {
    width: ${(props) => props.carouselWith * 1.2}vw;
    height: ${(props) => props.carouselWith * 0.7}vh;
    transform: rotateY(${(props) => props.degY}deg)
      translateZ(${(props) => props.radius * 1.2}vw);
  }

  @media (max-width: 550px) {
    height: ${(props) => props.carouselWith * 0.5}vh;
  }
`;

export const Picture = styled("img")<{ carouselWith: number }>`
  width: ${(props) => props.carouselWith}vw;
  height: ${(props) => props.carouselWith * 1.4}vh;
  border: 3px inset red;
  border-style: ridge;

  /* border: 3px inset rgba(47, 115, 201, 0.75); */
  box-shadow: 0 0 15px 3px rgba(86, 6, 6, 0.9);

  grid-column: 1 / span 4;
  grid-row: 1 / span 4;
  position: relative;

  @media (max-width: 900px) {
    width: ${(props) => props.carouselWith * 1.2}vw;
    height: ${(props) => props.carouselWith * 1.4 * 0.7}vh;
  }

  @media (max-width: 550px) {
    height: ${(props) => props.carouselWith * 0.5}vh;
  }
`;

export const TextContainer = styled("div")`
  position: absolute;
  grid-column: 1 / span 3;
  grid-row: 3/3;
  color: yellow;
  z-index: 10;
  max-width: 80%;
  text-align: left;
  margin-left: -1vw;

  @media (max-width: 1400px) {
    font-size: 1.5rem;
  }

  @media (max-width: 1200px) {
    font-size: 1.3rem;
  }

  @media (max-width: 1100px) {
    font-size: 1.1rem;
  }

  @media (max-width: 900px) {
    font-size: 0.9rem;
  }
  @media (max-width: 750px) {
    font-size: 0.8rem;
  }
  @media (max-width: 550px) {
    font-size: 0.6rem;
  }
  @media (max-width: 350px) {
    font-size: 0.4rem;
  }
`;

export const BorderLeft = styled("div")`
  position: absolute;
  top: -2vh;
  width: 90%;
  height: 10vh;
  grid-column: 1 / span 4;
  grid-row: 1 / span 3;
  border: 2px solid red;
  z-index: 10;
  border-right: none;
  border-bottom: none;

  @media (max-width: 900px) {
    height: 7vh;
  }

  @media (max-width: 550px) {
    top: 0;
    height: 5vh;
  }
`;

export const BorderRight = styled("div")<{ carouselWith: number }>`
  position: absolute;
  top: -2vh;
  width: 90%;
  height: ${(props) => props.carouselWith / 1.43}vh;
  grid-column: 3;
  grid-row: 1 / span 4;
  border: 2px solid red;
  border-left: none;
  border-top: none;
  margin-right: 18%;
  z-index: 10;

  @media (max-width: 900px) {
    height: ${(props) => (props.carouselWith / 1.43) * 0.7}vh;
  }

  @media (max-width: 550px) {
    top: 0;
    height: ${(props) => (props.carouselWith / 1.43) * 0.5}vh;
  }
`;

export const ButtonMore = styled("button")`
  letter-spacing: 0.06em;
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
  background: linear-gradient(
    to right,
    rgba(250, 2, 2, 0.7) 1%,
    transparent 40%,
    transparent 60%,
    rgba(97, 6, 6, 0.7) 100%
  );
  color: #950101;
  box-shadow: inset 0 0 10px rgba(253, 27, 27, 0.4),
    0 0 9px 3px rgba(253, 27, 27, 0.1);
  border: 3px inset red;
  border-style: ridge;
  width: 8vw;
  height: 3vh;
  grid-column: 2 / span 4;
  z-index: 15;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: "";
    position: absolute;
    left: -4em;
    width: 4em;
    height: 100%;
    top: 0;
    transition: transform 0.4s ease-in-out;
    background: linear-gradient(
      to right,
      transparent 1%,
      rgba(163, 17, 17, 0.1) 40%,
      rgba(85, 6, 6, 0.1) 60%,
      transparent 100%
    );
  }

  &:hover {
    color: #f9f905;
    box-shadow: inset 0 0 10px rgba(245, 41, 41), 0 0 9px 3px rgba(126, 21, 21);
  }
  &:hover:before {
    transform: translateX(15em);
  }

  @media (max-width: 900px) {
    width: 10vw;
    top: -1vh;
  }

  @media (max-width: 550px) {
    top: -3vh;
    left: -4.5vw;
  }
`;

/*
9 Slides total: 360 Degrees (full circle) --> 360/9 = 40 --> our increment for rotation

Some math. Consider how the carousel will be set up. It's going to be a 3D circle, like an orbit. The orientation will be such that it would be like setting a ring down on a table, then bending down and looking at the ring head on from the edge of the table. The main "front" image will be entirely front-facing. The other images will be rotated slightly to make a full circle. You could sketch this out in 2D from a bird's eye view, and you'd end up with a picture like the following:

https://cl.ly/image/2P3E1U0W0c29

Each triangle/piece would be a slide, hence 9 pieces. That being said, let's do some calculations, but we'll use the dimensions of our elements rather than those in the picture.

So, we're rotating all the slides in 40º increments relative to each other, because 360º makes a full circle, and we have 9 elements: 360/9 = 40

In the picture above, we want to find the radius of the circle (which isn't exactly a circle because it's made up of triangles). So we can cut each triangle in half and solve for `r` (radius). We can solve for `r` using some geometry and our own elements' dimensions. 

The width of the slides is 300px. We're going to split those triangles in half and use the TANGENT function in geometry/trigonemty to solve for `r`. And since we're splitting each of the 9 triangles (the slides) in half for this, we need to account for the fact that our key angle is now going to be 20º and not 40º. We can solve for `r` by taking our smaller triangles' width (150px) and dividing by the tangent of 20º (in degrees, not radians). So:

            150
   r =  -----------
          tan(20º)

Here's a screenshot of me doing the calculations in JavaScript, right in the browser console!

Math things: https://cl.ly/image/1t0j1V2Y2l2Z

So, `r` is (about) 412px long! This means we need to TRANSLATE the slides in the Z 3-dimensional plane by 412px. This should be done AFTER the rotateY transformation.
*/
