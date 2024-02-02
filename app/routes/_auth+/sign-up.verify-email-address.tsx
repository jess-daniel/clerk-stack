import {
	type MetaFunction,
} from '@remix-run/node'
import { GeneralErrorBoundary } from '#app/components/error-boundary.tsx'

export const meta: MetaFunction = () => {
	return [{ title: 'Email Verification' }]
}

export default function EmailVerificationRoute() {
	return (
		<div className="container flex flex-col justify-center pb-32 pt-20">
			<div className="text-center">
				<h1 className="text-h1">Email verification has been sent.</h1>
			</div>
		</div>
	)
}

export function ErrorBoundary() {
	return <GeneralErrorBoundary />
}
