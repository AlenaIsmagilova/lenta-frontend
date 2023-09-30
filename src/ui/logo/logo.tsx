interface ILogoProps {
    color?: string
}

export const Logo = ({color = "#103F93"}: ILogoProps) => {
    return (
        <div>
            <svg
                width="166"
                height="38"
                viewBox="0 0 166 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clip-path="url(#clip0_77_7697)">
                    <path
                        d="M0 26.4398C2.86799 33.2354 9.54464 37.9996 17.3251 37.9996C14.4571 31.2045 7.78008 26.4398 0 26.4398Z"
                        fill="#2BAB5A"
                    />
                    <path
                        d="M31.4442 14.25C31.4442 22.1202 25.1229 28.4997 17.3263 28.4997C9.52894 28.4997 3.20801 22.1198 3.20801 14.25C3.20801 6.37993 9.52894 0 17.3263 0C25.1229 0 31.4442 6.37993 31.4442 14.25Z"
                        fill="#FBB800"
                    />
                    <path
                        d="M17.3262 38C23.0413 37.9996 27.9631 34.5718 30.184 29.6421C24.4688 29.6421 19.5467 33.0704 17.3262 38Z"
                        fill="#2BAB5A"
                    />
                    <path
                        d="M24.3848 14.2501C24.3848 18.1849 21.2243 21.3749 17.3258 21.3749C13.4273 21.3749 10.2668 18.1849 10.2668 14.2501C10.2668 10.3148 13.4273 7.12521 17.3258 7.12521C21.2243 7.12521 24.3848 10.3148 24.3848 14.2501Z"
                        fill="#103F93"
                    />
                    <path
                        d="M81.9904 21.5559C81.9904 19.7629 80.2337 18.9632 78.2658 18.9632C75.2595 18.9632 72.6556 20.2448 71.8619 23.5414C77.9884 25.3268 81.9904 23.9948 81.9904 21.5559ZM71.7332 27.3595C72.3688 31.3046 75.4668 32.5942 78.6093 32.5942C80.6908 32.5942 82.8732 31.7731 84.2166 30.5444L87.8597 34.2425C85.6841 36.6741 82.6572 38 78.518 38C72.7231 38 65.7346 34.5482 65.7346 25.8015C65.7346 17.0549 72.4648 13.6034 78.1806 13.6034C85.4106 13.6034 88.4037 17.0306 88.4037 20.8755C88.4033 27.1586 80.4903 30.0621 71.7332 27.3595ZM43.2915 14.25L43.1166 22.9296C43.0745 26.4431 42.9484 28.1788 42.4454 30.1683C41.984 32.0734 41.1034 32.6116 39.7193 32.6116C39.258 32.6116 38.8383 32.5692 38.5027 32.4422V37.3527C38.964 37.6069 39.7193 37.7338 40.7257 37.7338C44.8779 37.6069 46.8911 35.6289 47.8979 32.0734C48.6107 29.5337 48.7365 27.5862 48.8626 24.665L48.9948 19.9794H56.3283V37.3527H62.2339V14.25H43.2915ZM156.937 25.8019C156.937 23.9074 156.343 22.3363 155.106 21.1352C153.916 19.888 152.405 19.2867 150.574 19.2867C148.743 19.2867 147.232 19.888 146.042 21.1352C144.852 22.3363 144.257 23.9077 144.257 25.8019C144.257 27.6961 144.852 29.2671 146.042 30.5147C147.232 31.7158 148.743 32.3171 150.574 32.3171C152.406 32.3171 153.916 31.7162 155.106 30.5147C156.343 29.2668 156.937 27.6961 156.937 25.8019ZM166 32.3273V37.2384C164.994 37.7458 163.735 38.0004 162.267 38.0004C159.2 38.0004 157.655 36.6513 157.036 34.4826L156.937 34.6273C155.152 36.8913 152.68 38.0004 149.475 38.0004C146.408 38.0004 143.799 36.8453 141.601 34.4884C139.45 32.1318 138.351 29.2214 138.351 25.8019C138.351 22.3824 139.45 19.5177 141.601 17.1615C143.799 14.8049 146.408 13.6034 149.475 13.6034C152.54 13.6034 154.932 14.6203 156.697 16.6886V14.2504H162.603V30.5923C162.603 31.9889 163.232 32.7088 164.49 32.7088C165.077 32.7084 165.581 32.5815 166 32.3273ZM116.844 19.9797H124.197V37.353H130.103V19.9797H137.365V14.25H116.845V19.9797H116.844ZM108.158 14.25H114.064V37.353H108.158V28.355H97.8477V37.3534H91.9421V14.25H97.8477V22.7635H108.158V14.25Z"
                        fill={color}
                    />
                </g>
                <defs>
                    <clipPath id="clip0_77_7697">
                        <rect width="166" height="38" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
};
