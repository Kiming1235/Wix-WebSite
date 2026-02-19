import { Member } from ".";

export const getCurrentMember = async (): Promise<Member | null> => {
  // Static hosting mode (Cafe24): no Wix Members runtime.
  return null;
};
