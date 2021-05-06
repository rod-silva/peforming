import { useContext } from "react";
import { createContext, useState } from "react";

interface GlobalContextData {
  isSignInModalOpen: boolean;
  isSideBarOpen: boolean;
  handleSideBarOpen: () => void;
  handleSignInModal: () => void;
}

const GlobalContext = createContext<GlobalContextData>({} as GlobalContextData);

export const GlobalContextProvider: React.FC = ({ children }) => {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  function handleSignInModal(): void {
    setIsSignInModalOpen(!isSignInModalOpen);
  }

  function handleSideBarOpen(): void {
    setIsSideBarOpen(!isSideBarOpen);
  }

  return (
    <GlobalContext.Provider
      value={{
        isSideBarOpen,
        handleSideBarOpen,
        handleSignInModal,
        isSignInModalOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextData =>
  useContext(GlobalContext);
