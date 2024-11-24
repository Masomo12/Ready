export interface Message {
  id: number;
  text: string;
  image: string | null;
  timestamp: number;
  location?: string;
  author: string;
}