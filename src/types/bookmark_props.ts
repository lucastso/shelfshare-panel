export interface BookmarkProps {
  id: number;
  user_id: string;
  folder_id: number;
  category_id: number;
  url: string;
  name: string;
  favourite: boolean;
  icon: string;
  created_at: string;
}
