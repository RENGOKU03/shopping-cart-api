import React from "react";

const DetailCard = () => {
  return (
    <div className="detail-card">
      <img
        src="https://static.vecteezy.com/system/resources/previews/009/665/781/large_2x/school-bag-for-student-or-bag-for-kid-free-png.png"
        alt=""
      />
      <div className="div-detail">
        <span>$209</span>
        <button>Remove</button>
      </div>
    </div>
  );
};

export default DetailCard;
