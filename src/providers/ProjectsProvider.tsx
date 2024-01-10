import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';

interface ProjectsState {
  controlledSwiper: any;
  setControlledSwiper: any;
  autoplayOn: () => void;
  autoplayOff: () => void;
  nextSlide: () => void;
  prevSlide: () => void;
  boardOpen: boolean;
  toggleBoardOpen: () => void;
}

const defaultProjects: ProjectsState = {
  controlledSwiper: null,
  setControlledSwiper: () => {},
  autoplayOn: () => {},
  autoplayOff: () => {},
  nextSlide: () => {},
  prevSlide: () => {},
  boardOpen: false,
  toggleBoardOpen: () => {},
};

const ProjectsContext = createContext(defaultProjects);

export const useProjects = () => useContext(ProjectsContext);

export const ProjectsProvider: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [controlledSwiper, setControlledSwiper] = useState<any>(null);

  const autoplayOn = () => {
    controlledSwiper.slideNext();
    controlledSwiper.autoplay.start();
  };
  const autoplayOff = () => {
    controlledSwiper.autoplay.stop();
  };

  const nextSlide = () => {
    controlledSwiper.slideNext();
  };
  const prevSlide = () => {
    controlledSwiper.slidePrev();
  };

  const [boardOpen, setBoardOpen] = useState<boolean>(false);
  const toggleBoardOpen = (): void => {
    setBoardOpen(!boardOpen);
  };

  return (
    <ProjectsContext.Provider
      value={{
        controlledSwiper,
        setControlledSwiper,
        autoplayOn,
        autoplayOff,
        nextSlide,
        prevSlide,
        boardOpen,
        toggleBoardOpen,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};
