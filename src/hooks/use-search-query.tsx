import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

function useSearchQuery(queryParamName: string, debounceDelay = 300) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((searchTerm) => {
    const params = new URLSearchParams(searchParams);
    if (searchTerm) {
      params.set(queryParamName, searchTerm);
    } else {
      params.delete(queryParamName);
    }
    replace(`${pathname}?${params.toString()}`);
  }, debounceDelay);

  return { searchParams, handleSearch };
}

export { useSearchQuery };
