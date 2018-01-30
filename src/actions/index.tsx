import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

export const errorMessage = (error: AxiosError) => {
    const response = error.response;
    if (response && response.status > 300) {
        if (response.status === 422) {
            const detail = response.data.error;
            if (typeof detail === 'object') {
                Object.keys(detail).forEach((e) => {
                    detail[e].forEach((message: string) => {
                        toast.error(message);
                    });
                });
            } else {
                toast.error(detail);
            }
            return;
        }

        toast.error('Server error.');
        return;
    }  
}; 
