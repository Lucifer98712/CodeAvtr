export interface User {
    id: number;
    email: string;
    name: string;
  }
  
  export interface Post {
    id: number;
    userId: number;
    content: string;
    type: string;
    createdAt: Date;
    user: User;
  }
  
  export interface PriorityCircle {
    id: number;
    ownerId: number;
    memberId: number;
    settings: {
      notifications: {
        lifeEvents: boolean;
        regularPosts: boolean;
      };
    };
  }