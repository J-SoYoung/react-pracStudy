import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import badpage from "../assets/badpage.json";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="NotFound">
        <p
          onClick={() => {
            navigate("/");
          }}
        >
          잘못된 페이지입니다. 홈으로 이동
        </p>
      <div className="notFoundLottie">
        <Lottie animationData={badpage} />
      </div>
    </div>
  );
};
