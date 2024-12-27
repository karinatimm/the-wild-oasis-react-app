import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../../api/apiSettings";

export const useFetchSettingsData = () => {
  const {
    isLoading,
    error,
    data: settings,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  return { isLoading, error, settings };
};
