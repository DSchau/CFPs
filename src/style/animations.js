import { keyframes } from 'emotion';

export const ANIMATE_BACKGROUND = keyframes`
  0%{
    background-position: 50% 0%;
  }
  50%{
    background-position: 51% 100%;
  }
  100%{
    background-position:50% 0%;
  }
`;

export const FADE_IN_BOTTOM = keyframes`
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
