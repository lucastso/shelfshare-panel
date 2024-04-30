export interface FolderProps {
  id: number;
  creatorId: string;
  collabsId: string[];
  name: string;
  createdAt: string;
  creator: {
    id: string;
    email: string;
    name: string;
    photo: string;
    password: string;
    createdAt: string;
    subscription: string;
    activeFolder: number;
  };
}
