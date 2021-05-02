import { useContext } from "react";
import { createContext, useState } from "react";

interface GlobalContextData {
  isSignInModalOpen: boolean;
  handleSignInModal: () => void;
}

const GlobalContext = createContext<GlobalContextData>({} as GlobalContextData);

export const GlobalContextProvider: React.FC = ({ children }) => {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  function handleSignInModal(): void {
    setIsSignInModalOpen(!isSignInModalOpen);
  }

  return (
    <GlobalContext.Provider value={{ handleSignInModal, isSignInModalOpen }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextData =>
  useContext(GlobalContext);
