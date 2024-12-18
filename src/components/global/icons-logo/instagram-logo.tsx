const InstagramGradientIcon = () => {
    return (
      <svg
        className="w-[75px] h-[75px]"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="instagramGradient" gradientTransform="rotate(45)">
            <stop offset="0%" stopColor="#f09433" />
            <stop offset="50%" stopColor="#e6683c" />
            <stop offset="100%" stopColor="#bc1888" />
          </linearGradient>
        </defs>
        <path
          fill="url(#instagramGradient)"
          d="M7.5,2C4.462,2,2,4.462,2,7.5v9C2,19.538,4.462,22,7.5,22h9c3.038,0,5.5-2.462,5.5-5.5v-9C22,4.462,19.538,2,16.5,2H7.5z M16.5,4c1.932,0,3.5,1.568,3.5,3.5v9c0,1.932-1.568,3.5-3.5,3.5h-9C5.568,20,4,18.432,4,16.5v-9C4,5.568,5.568,4,7.5,4H16.5z M12,7.5c2.481,0,4.5,2.019,4.5,4.5s-2.019,4.5-4.5,4.5S7.5,14.481,7.5,12S9.519,7.5,12,7.5z M12,9c-1.657,0-3,1.343-3,3s1.343,3,3,3s3-1.343,3-3S13.657,9,12,9z M16.5,6.5c0.828,0,1.5,0.672,1.5,1.5S17.328,9.5,16.5,9.5S15,8.828,15,8S15.672,6.5,16.5,6.5z"
        />
      </svg>
    );
  };
  
  export default InstagramGradientIcon;
  