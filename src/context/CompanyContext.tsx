// CompanyContext.tsx
import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import type { CompanyData } from "../pages/Home/companyConfig";
import { companyData } from "../pages/Home/companyConfig";

// Cria o contexto com o tipo correto
const CompanyContext = createContext<CompanyData | undefined>(undefined);

// Provider
export const CompanyProvider = ({ children }: { children: ReactNode }) => {
  return (
    <CompanyContext.Provider value={companyData}>
      {children}
    </CompanyContext.Provider>
  );
};

// Hook personalizado para consumir o contexto
export const useCompany = (): CompanyData => {
  const context = useContext(CompanyContext);
  if (!context) {
    throw new Error("useCompany deve ser usado dentro de um CompanyProvider");
  }
  return context;
};
