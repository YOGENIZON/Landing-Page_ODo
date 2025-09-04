import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export const useRecaptcha = () => {
	const { executeRecaptcha } = useGoogleReCaptcha();

	const generateToken = async (onVerify) => {
		if (executeRecaptcha) {
			try {
				const token = await executeRecaptcha();
				onVerify(token); 
			} catch (error) {
				console.error("Recaptcha execution failed:", error);
			}
		}
	};

	return generateToken;
};