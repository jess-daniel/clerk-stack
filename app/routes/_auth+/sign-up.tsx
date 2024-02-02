import { SignUp } from "@clerk/remix";
import {
	type MetaFunction,
} from '@remix-run/node'
import { GeneralErrorBoundary } from '#app/components/error-boundary.tsx'

export const meta: MetaFunction = () => {
	return [{ title: 'Sign Up | Epic Notes' }]
}

export default function SignupRoute() {
	return (
		<div className="container flex flex-col justify-center pb-32 pt-20">
			<div className="text-center">
				<h1 className="text-h1">Let's start your journey!</h1>
			</div>
			<div className="mx-auto mt-16 min-w-full max-w-sm sm:min-w-[368px]">
			<SignUp 
				routing={"path"}  
				path={'/sign-up'}
			/>
			</div>
		</div>
	)
}

export function ErrorBoundary() {
	return <GeneralErrorBoundary />
}
