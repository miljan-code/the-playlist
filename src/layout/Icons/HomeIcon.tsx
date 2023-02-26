type Props = {
  active: boolean;
};

const HomeIcon = ({ active = false }: Props) => {
  return (
    <svg
      width="22"
      height="16"
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 0V16H17V0H5ZM16 15H6V1H16V15ZM19 3H20V13H19V3ZM2 13H3V3H2V13ZM1 11H0V5H1V11ZM21 11H22V5H21V11Z"
        fill={active ? '#0149FF' : '#3C5660'}
      />
    </svg>
  );
};

export default HomeIcon;
