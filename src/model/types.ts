export type NavLink = {
  label: string;
  icon: ({ active }: { active: boolean }) => JSX.Element;
  link: string;
};
