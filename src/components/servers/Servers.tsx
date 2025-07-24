/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

import { serversApi } from "../../api/servers/serversApi";
import { Spinner } from "../ui/Spinner";
import { ServerItem } from "./table/ServerItem";
import { ServersTableHeader } from "./table/ServersTableHeader";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export const Servers: React.FC = () => {
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [paginationLink, setPaginationLink] = useState<string>("");

  const [debouncedSearchValue] = useDebounce<string>(searchValue, 1200);

  const { data, refetch } = useQuery({
    queryKey: [`servers-${debouncedSearchValue}`],
    queryFn: () => {
      return serversApi.getAllServers(
        `filter[search]=${paginationLink || searchValue}`
      );
    },
    enabled: false,
  });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (paginationLink.length) {
      setPaginationLink("");
    }

    if (value.trim().length) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }

    setSearchValue(value);
  };

  const handleNext = () => {
    if (data?.links.next) {
      setIsSearching(true);
      setPaginationLink(data?.links.next.split("earch%5D=")[1]);
    }
  };

  const handlePrev = () => {
    if (data?.links.prev) {
      setIsSearching(true);
      setPaginationLink(data?.links.prev.split("earch%5D=")[1]);
    }
  };

  useEffect(() => {
    if (debouncedSearchValue.length || paginationLink.length) {
      refetch().finally(() => setIsSearching(false));
    }
  }, [debouncedSearchValue, paginationLink]);

  console.log(data);

  return (
    <div className="w-full overflow-auto h-[calc(100vh-96px)]">
      <div className="max-w-[1200px] mx-auto py-4">
        <Input
          placeholder="Search"
          className="p-4 w-full max-w-[900px] mx-auto block mb-8"
          id="search"
          value={searchValue}
          onChange={onInputChange}
        />
        {isSearching && (
          <div className="w-full flex justify-center my-8">
            <Spinner size={30} />
          </div>
        )}
        {!!data?.data.length && (
          <div>
            <ServersTableHeader />
            {data?.data.map((item) => {
              return <ServerItem key={item.id} item={item} />;
            })}
            <div className="flex align-middle justify-center gap-4 mt-8 mb-12">
              <Button
                variant="outlined"
                className="w-24"
                disabled={!data.links.prev || isSearching}
                onClick={handlePrev}
              >
                Previous
              </Button>
              <Button
                variant="outlined"
                className="w-24"
                disabled={!data.links.next || isSearching}
                onClick={handleNext}
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
