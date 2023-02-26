type Props = {
  active: boolean;
};

const RecommendedIcon = ({ active = false }: Props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM14.24 5.76L12.12 12.12L5.76 14.24L7.88 7.88L14.24 5.76ZM8.67057 8.67057L7.34114 12.6589L11.3294 11.3294L12.6589 7.34114L8.67057 8.67057Z"
        fill={active ? '#0149FF' : '#3C5660'}
      />
    </svg>
  );
};

export default RecommendedIcon;
