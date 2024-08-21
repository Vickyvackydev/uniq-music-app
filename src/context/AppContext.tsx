import React, {
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface AppQueryProps {
  // set params types for the context
  menu: boolean;
  setMenu: React.Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<AppQueryProps>({
  // define the context state
  menu: false,
  setMenu: () => {},
});

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [menu, setMenu] = useState(false);
  return (
    <AppContext.Provider value={{ menu, setMenu }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppQuery = (): AppQueryProps => useContext(AppContext); // export useAppQuery as hook to render the state
