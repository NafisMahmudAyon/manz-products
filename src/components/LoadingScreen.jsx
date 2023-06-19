

const ShoppingCart = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={128}
      height={128}
      aria-label="Shopping cart line animation"
      className="cart"
      {...props}
    >
      <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={8}>
        <g stroke="hsla(0,10%,10%,0.1)" className="cart__track">
          <path d="M4 4h17l5 18h98l-12 42H35l4 16h67" />
          <circle cx={43} cy={111} r={13} />
          <circle cx={102} cy={111} r={13} />
        </g>
        <g stroke="currentColor" className="cart__lines">
          <path
            strokeDasharray="338 338"
            strokeDashoffset={-338}
            d="M4 4h17l5 18h98l-12 42H35l4 16h67"
            className="cart__top"
          />
          <g className="cart__wheel1" transform="rotate(-90 43 111)">
            <circle
              cx={43}
              cy={111}
              r={13}
              strokeDasharray="81.68 81.68"
              strokeDashoffset={81.68}
              className="cart__wheel-stroke"
            />
          </g>
          <g className="cart__wheel2" transform="rotate(90 102 111)">
            <circle
              cx={102}
              cy={111}
              r={13}
              strokeDasharray="81.68 81.68"
              strokeDashoffset={81.68}
              className="cart__wheel-stroke"
            />
          </g>
        </g>
      </g>
    </svg>
  );

const LoadingScreen = () => {
    return (
      <div className="flex bg-[#0E2954] justify-center items-center w-full h-[100vh]">
        
          <ShoppingCart />
        
        
      </div>
    );
  };

export default LoadingScreen