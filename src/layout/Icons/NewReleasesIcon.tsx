type Props = {
  active: boolean;
};

const NewReleasesIcon = ({ active = false }: Props) => {
  return (
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0H13V2H16C17.1046 2 18 2.89543 18 4V8V9V18C18 19.1046 17.1046 20 16 20H2C0.89543 20 0 19.1046 0 18V4C0 2.89543 0.89543 2 2 2H5V0H6V2H12V0ZM5 3V5H6V3H12V5H13V3H16C16.5523 3 17 3.44772 17 4V8H1V4C1 3.44772 1.44772 3 2 3H5ZM1 9V18C1 18.5523 1.44772 19 2 19H16C16.5523 19 17 18.5523 17 18V9H1Z"
        fill={active ? '#0149FF' : '#3C5660'}
      />
    </svg>
  );
};

export default NewReleasesIcon;
