export type Assignment = {
  id: number;
  title: string;
  created_at: string;
  due_date: string;
  submissions: {
    submission_link: string;
  };
};
