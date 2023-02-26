type Props = {
  active: boolean;
};

const TopChartsIcon = ({ active = false }: Props) => {
  return (
    <svg
      width="21"
      height="12"
      viewBox="0 0 21 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 0.25H20H21V1.25V6.25H20V1.96045L12.7187 9.31042C12.5231 9.50764 12.2042 9.50764 12.0086 9.31042L7.81818 5.08506L1.35502 11.6021C1.16057 11.7982 0.843987 11.7995 0.647917 11.605C0.451846 11.4106 0.450532 11.094 0.644983 10.8979L7.46316 4.02292C7.65876 3.82569 7.97761 3.82569 8.1732 4.02292L12.3636 8.24827L19.2962 1.25H15V0.25Z"
        fill={active ? '#0149FF' : '#3C5660'}
      />
    </svg>
  );
};

export default TopChartsIcon;
