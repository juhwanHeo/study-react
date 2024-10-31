import React, {ReactNode} from "react";

interface PanelProps {
  title: string;
  children: ReactNode;
  isActive: boolean;
  onShow: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Panel({title, children, isActive, onShow}: PanelProps) {
  return (
      <section className="panel">
        <h3>{title}</h3>
        {
          isActive
              ? (<p>{children}</p>)
              : (<button onClick={onShow}>Show</button>)
        }
      </section>
  );
}

export default Panel;