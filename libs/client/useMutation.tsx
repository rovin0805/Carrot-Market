import { useState } from 'react';

interface UseMutationState<T> {
  loading: boolean;
  data?: T;
  error: undefined | any;
}

type UseMutationResult<T> = [(data: any) => void, UseMutationState<T>];

export default function useMutation<T = any>(
  url: string
): UseMutationResult<T> {
  const [state, setSate] = useState<UseMutationState<T>>({
    loading: false,
    data: undefined,
    error: undefined,
  });

  function mutation(data: any) {
    setSate((prev) => ({ ...prev, loading: true }));
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json().catch(() => {}))
      .then((data) => setSate((prev) => ({ ...prev, data, loading: false })))
      .catch((error) =>
        setSate((prev) => ({ ...prev, error, loading: false }))
      );
  }

  return [mutation, { ...state }];
}
