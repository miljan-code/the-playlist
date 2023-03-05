import styles from './DurationBar.module.css';

type DurationBarType = {
  currentTime: number;
  durationTime: number;
  changeTime: (time: number) => void;
};

const DurationBar = ({
  currentTime,
  durationTime,
  changeTime,
}: DurationBarType) => {
  const handleChangeTime = (e: React.MouseEvent) => {
    const clickedAt = e.nativeEvent.offsetX;
    const width = e.currentTarget.getBoundingClientRect().width;
    const percentage = +((clickedAt / width) * 100).toFixed(2);
    const time = +((percentage * durationTime) / 100).toFixed(2);
    changeTime(time);
  };

  return (
    <svg
      width="586"
      height="36"
      viewBox="0 0 586 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.durationbar}
      onClick={e => handleChangeTime(e)}
    >
      <defs>
        <linearGradient id="gradient">
          <stop offset="0%" stopColor="blue" />
          <stop offset={`${currentTime}%`} stopColor="blue" />
          <stop offset={`${currentTime}%`} stopColor="gray" />
          <stop offset="100%" stopColor="gray" />
        </linearGradient>
      </defs>
      <path
        opacity=".2"
        d="M39.3135 29.1982C30.0708 25.1982 9.60495 19.5316 0.527344 17.6983H585.508C583.857 18.1982 583.145 17.1982 569.941 20.6982C552.684 25.2727 546.748 40.3231 522.902 31.1982C491.543 19.1982 475.039 34.6982 451.107 25.6982C439.693 21.4058 405.719 33.1982 394.991 34.6982C384.262 36.1982 372.709 34.6982 357.03 29.1982C341.35 23.6982 333.923 40.6983 319.069 34.6982C295.155 25.0386 281.933 30.1982 276.982 32.1982C272.03 34.1982 262.953 31.1982 258.826 31.1982C252.173 31.1982 248.924 35.6982 234.895 34.6982C220.866 33.6982 219.215 22.6982 192.808 31.1982C166.4 39.6982 137.517 31.6982 126.789 29.1982C116.061 26.6982 92.1286 34.1982 76.4491 29.1982C60.7696 24.1982 50.8668 34.1982 39.3135 29.1982Z M39.7861 6.8018C30.5435 10.8018 10.0776 16.4684 1 18.3017H585.98C584.33 17.8018 583.617 18.8018 570.413 15.3018C553.156 10.7273 547.221 -4.32307 523.375 4.80179C492.016 16.8018 475.511 1.30179 451.579 10.3018C440.165 14.5942 406.191 2.80175 395.463 1.30179C384.735 -0.198184 373.182 1.30178 357.502 6.8018C341.823 12.3018 334.396 -4.69825 319.541 1.30179C295.627 10.9614 282.406 5.80175 277.454 3.80175C272.503 1.80175 263.425 4.80179 259.299 4.80179C252.646 4.80179 249.396 0.301785 235.367 1.30179C221.338 2.30178 219.688 13.3018 193.28 4.80179C166.873 -3.69821 137.989 4.30178 127.261 6.8018C116.533 9.30182 92.6013 1.8018 76.9218 6.8018C61.2423 11.8018 51.3394 1.8018 39.7861 6.8018Z"
        fill="url(#gradient)"
      />
    </svg>
  );
};

export default DurationBar;
