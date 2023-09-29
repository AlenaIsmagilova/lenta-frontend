import { Logo } from "../../ui/logo/logo";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <Logo />
    </div>
  );
};

export default Sidebar;
