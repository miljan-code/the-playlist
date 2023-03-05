type Props = {
  active: boolean;
  onClick: () => void;
};

const ShuffledIcon = ({ active = false, onClick }: Props) => {
  return (
    <svg
      onClick={onClick}
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: 'pointer' }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.35502 8.20855L10.8536 10.6377L12 9.52307V12.4397H9L10.1464 11.3251L7.64819 8.89627L8.35502 8.20855ZM4.35599 4.32059L0.707107 0.773071L0 1.46054L3.64929 5.00846L4.35599 4.32059ZM10.8536 2.57514L12 3.68974V0.773071H9L10.1464 1.88767L0 11.7523L0.707107 12.4397L10.8536 2.57514Z"
        fill={active ? '#0149FF' : '#3C5660'}
      />
    </svg>
  );
};

export default ShuffledIcon;
