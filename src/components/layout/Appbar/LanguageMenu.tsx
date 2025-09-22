import { Menu } from "antd";

  export const languageMenu = (
    <Menu /* onClick={(e) => setLanguage(e.key)} */ style={{ minWidth: 120 }}>
      <Menu.Item key="en" icon={<span className="mr-2">🇬🇧</span>}>
        English
      </Menu.Item>
      <Menu.Item key="fa" icon={<span className="mr-2">🇮🇷</span>}>
        فارسی
      </Menu.Item>
      <Menu.Item key="es" icon={<span className="mr-2">🇪🇸</span>}>
        Español
      </Menu.Item>
    </Menu>
  );
