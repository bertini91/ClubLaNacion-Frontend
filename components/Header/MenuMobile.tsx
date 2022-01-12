import FormSearch from "./FormSearch";
import { MenuDesktop } from './MenuDesktop';

export const MenuMobile = (): JSX.Element => {
  return (
    <div>
      <FormSearch />
      <MenuDesktop/>
    </div>
  );
};
