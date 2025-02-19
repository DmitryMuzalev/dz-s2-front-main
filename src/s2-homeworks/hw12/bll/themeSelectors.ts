import { AppStoreType } from "../../hw10/bll/store";

export const selectThemeId = (store: AppStoreType) => store.theme.themeId;
