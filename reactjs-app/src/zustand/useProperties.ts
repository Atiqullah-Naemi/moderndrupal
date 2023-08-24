import { create } from "zustand";

export type Property = {
  title: string;
  imageUrl: string;
  link: string;
};

interface PropertyProps {
  properties: Property[] | null;
  setPropeties: (properties: Property[]) => void;
}

const useProperties = create<PropertyProps>((set) => ({
  properties: null,
  setPropeties: (properties: Property[]) => set({ properties }),
}));

export default useProperties;
