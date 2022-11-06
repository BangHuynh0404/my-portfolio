import React from "react";

import StylesInfoCard from "./styles";

export interface InfoCardProps {
  title?: string;
  content?: string;
  icon?: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = (
  { title, content, icon },
) => {
  //Some Logic
  return (
    <StylesInfoCard className="o-infoCard">
      {title && (
        <div className="o-infoCard_title">
          {title}
        </div>
      )}

      {icon && (
        <div className="o-infoCard_icon">
          {icon}
        </div>
      )}

      {content && <div className="o-infoCard_content">{content}content</div>}
    </StylesInfoCard>
  );
};

InfoCard.defaultProps = {};

export default InfoCard;
