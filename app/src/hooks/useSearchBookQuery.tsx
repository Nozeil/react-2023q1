import { SearchResponse } from '@/models';
import { api } from '@/services/api';
import { useCallback, useEffect, useState } from 'react';

export function useSearchBookQuery(search: string) {
  const [data, setData] = useState<SearchResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const searchBooks = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await api.searchBook(search);
      setIsLoading(false);
      setData(res);
    } catch (e) {
      setIsError(true);
      setIsLoading(false);
    }
  }, [search]);

  useEffect(() => {
    if (search) {
      searchBooks();
    }
  }, [search, searchBooks]);

  return { data, isLoading, isError };
}
