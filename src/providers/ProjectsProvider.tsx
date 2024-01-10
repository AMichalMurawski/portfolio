import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';

interface ProjectsState {
  autoplay: boolean;
  toggleAutoplay: () => void;
  boardOpen: boolean;
  toggleBoardOpen: () => void;
}

const defaultProjects: ProjectsState = {
  autoplay: true,
  toggleAutoplay: () => {},
  boardOpen: false,
  toggleBoardOpen: () => {},
};

const ProjectsContext = createContext(defaultProjects);

export const useProjects = () => useContext(ProjectsContext);

export const ProjectsProvider: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [autoplay, setAutoplay] = useState<boolean>(true);
  const toggleAutoplay = (): void => {
    setAutoplay(!autoplay);
  };

  const [boardOpen, setBoardOpen] = useState<boolean>(false);
  const toggleBoardOpen = (): void => {
    setBoardOpen(!boardOpen);
  };

  return (
    <ProjectsContext.Provider
      value={{ autoplay, toggleAutoplay, boardOpen, toggleBoardOpen }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};
