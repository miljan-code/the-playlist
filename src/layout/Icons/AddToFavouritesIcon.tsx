type Props = {
  onClick: () => void;
  active: boolean;
};

const AddToFavouritesIcon = ({ active = false, onClick }: Props) => {
  return (
    <svg
      onClick={onClick}
      width="16"
      height="11"
      viewBox="0 0 16 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: 'pointer' }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.07692 3.66197H0V4.63419H9.07692V3.66197ZM9.07692 0.7453H0V1.71752H9.07692V0.7453ZM12.0018 3.66197H11.0006V6.57863H7.99662V7.54686H11.0006V10.4704H12.0018V7.54686H15.0275V6.57863H12.0018V3.66197ZM0 7.55086H6V6.57863H0V7.55086Z"
        fill={active ? '#0149FF' : '#3C5660'}
      />
    </svg>
  );
};

export default AddToFavouritesIcon;
