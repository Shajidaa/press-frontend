
import {

  CardAction,
 
  CardDescription,

  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Link from "next/link"
import LoginFrom from "../_components/LoginFrom"

export default function LoginPage() {
  return (

    <>
    <div className="flex min-h-screen items-center justify-center">
      <div className=" w-full max-w-md space-y-6 rounded-lg">
<CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
         </CardDescription>
         <CardAction>
         <Link href={'/register'}>Sign Up</Link>
 
        </CardAction>
      </CardHeader>
      {/* fOrm */}
<LoginFrom></LoginFrom>
    </div>

    </div>
    
    </>
  )
}
