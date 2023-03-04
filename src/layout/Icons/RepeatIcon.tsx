type Props = {
  onClick: () => void;
  active: boolean;
};

const RepeatIcon = ({ active = false, onClick }: Props) => {
  return (
    <svg
      onClick={onClick}
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: 'pointer' }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.3417 2.2314L12.0013 0V1.74529H3.00001H2.00001V2.71751L2.00001 5.63418H3.00001V2.71751H12.0013V4.47107L14.3417 2.2314ZM0.634705 10.9814L2.99869 13.275V11.4675H12H13V10.4953V7.57863H12V10.4953H2.99869V8.7008L0.634705 10.9814Z"
        fill={active ? '#0149FF' : '#3C5660'}
      />
    </svg>
  );
};

export default RepeatIcon;
