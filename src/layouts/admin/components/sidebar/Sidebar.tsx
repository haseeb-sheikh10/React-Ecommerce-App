import { FC } from "react";
import { useAppSelector } from "../../../../redux/store";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  const { config } = useAppSelector((state) => state.global);
  return (
    <aside
      className="w-[250px] h-full p-4"
      style={{
        backgroundColor: config?.primary_color,
        color: config?.colors?.primary_text_color,
      }}
    >
      haseeb
    </aside>
  );
};

export default Sidebar;
