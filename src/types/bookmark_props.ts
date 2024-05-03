import { CategoryProps } from "./category_props";
import { FolderProps } from "./folder_props";
import { UserProps } from "./user_props";

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
  category: CategoryProps;
  folder: FolderProps;
  user: UserProps
}
