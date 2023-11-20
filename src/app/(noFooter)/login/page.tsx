"use client";

import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function Login() {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [formValues, setFormValues] = useState({
		email: "",
		password: "",
	});
	const [error, setError] = useState("");

	const searchParams = useSearchParams();
	const callbackUrl = searchParams.get("callbackUrl") || "/profile";


	return (
		<main className="flex-1 flex justify-center items-center">
			<button
				className="bg-secondary-600 px-7 py-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex justify-center items-center"
				onClick={() => alert("Not implemented yet")}
				role="button"
			>
				Continue with GitHub
			</button>
		</main>
	);
};
