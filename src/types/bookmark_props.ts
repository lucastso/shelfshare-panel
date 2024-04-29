export interface BookmarkProps {
  id: number;
  userId: string;
  folderId: number;
  categoryId: number;
  url: string;
  name: string;
  favourite: boolean;
  icon: string;
  createdAt: string;
  category: {
    id: number;
    name: string;
    backgroundColor: string;
    textColor: string;
    createdAt: string;
  };
  folder: {
    id: number;
    creatorId: string;
    collabsId: string[];
    name: string;
    createdAt: string;
  };
}
