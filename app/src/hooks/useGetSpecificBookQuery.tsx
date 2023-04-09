import { BookResponse } from '@/models';
import { api } from '@/services/api';
import { useState, useCallback, useEffect } from 'react';

export function useGetSpecificBookQuery(id: string) {
  const [data, setData] = useState<BookResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const getBook = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await api.getSpecificBook(id);
      setIsLoading(false);
      setData(res);
    } catch (e) {
      setIsError(true);
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getBook();
  }, [getBook]);

  return { data, isLoading, isError };
}
