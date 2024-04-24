import { useState, useCallback } from "react";
import axios, { AxiosError } from "axios";

export interface SubmissionFormData {
  name: string;
  title: string;
  age?: string;
  hometown?: string;
}

export interface UseSubmissionsHook {
  submissions: SubmissionFormData[];
  error: string | null;
  addSubmission: (newSubmission: SubmissionFormData) => Promise<void>;
  fetchSubmissions: () => Promise<void>;
}

const useSubmissions = (): UseSubmissionsHook => {
  const [submissions, setSubmissions] = useState<SubmissionFormData[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchSubmissions = useCallback(async () => {
    try {
      const response = await axios.get<SubmissionFormData[]>(
        "http://localhost:8080/submissions"
      );
      setSubmissions(response.data);
    } catch (err) {
      const axiosError = err as AxiosError;
      setError(axiosError.message);
    }
  }, []);

  const addSubmission = useCallback(
    async (newSubmission: SubmissionFormData) => {
      try {
        const response = await axios.post<SubmissionFormData>(
          "http://localhost:8080/submit",
          newSubmission
        );
        if (response.status === 200) {
          await fetchSubmissions();
        } else {
          setError("Failed to submit data");
        }
      } catch (err) {
        const axiosError = err as AxiosError;
        setError(axiosError.message);
      }
    },
    [fetchSubmissions]
  );

  return {
    submissions,
    error,
    addSubmission,
    fetchSubmissions,
  };
};

export default useSubmissions;
