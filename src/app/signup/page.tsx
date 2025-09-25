"use client"

import React, { useState } from "react"
import { Eye, EyeOff, User, Mail, Lock, Info } from "lucide-react"
import { useRouter } from "next/navigation"
import z from "zod"
import { useRegisterUser } from "../_services/authService"
import { SignupRequest } from "../_types/auth"
import { ExternalToast, toast } from "sonner"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
interface FormData {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export const formDataSchema = z.object({
  name: z.string().trim().min(3, "Name must be at least 3 characters"),
  email: z.email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string()
}).superRefine((val, ctx) => {
  if (val.confirmPassword !== val.password) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["confirmPassword"],
      message: "Confirm password does not match",
    });
  }
}) satisfies z.ZodType<FormData>

export default function SignUpPage() {
  const router = useRouter()
  const { trigger: handleRegister, isMutating: isProcessing } = useRegisterUser()

  const externalToast : ExternalToast = { position: "top-center", style: { fontSize: "1rem" } }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },    
    reset,
    getValues, // get each value in all fields
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(formDataSchema),
    mode: "onBlur",
  })

  const isAllEmpty =
    Object.values(getValues()).every(v =>
      typeof v === "string" ? v.trim() === "" : // empty string
      Array.isArray(v)      ? v.length === 0 : // array empty
      v == null // null or undefined
    );


  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [showPassword, setShowPassword] = useState(false)


  const onSubmit = async (fd: FormData) => {
    const payload: SignupRequest = {
      name: fd.name,
      email: fd.email,
      password: fd.password,
    }

    try {
      await handleRegister(payload)
      toast.info("Register successful, redirect to login", externalToast)
      
      reset()
      router.push("/login")
    } catch (e: any) {
      const msg = e?.response?.data?.message ?? "Register failed";
      toast.error(msg, externalToast)
    }
  }


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleGoogleLogin = () => {
    console.log("Google login clicked")
    // Handle Google login logic here
  }

  return (
    <body className="text-slate-950 text-base not-italic normal-nums font-normal accent-auto bg-white box-border block tracking-[normal] leading-[26px] list-outside list-disc outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-start indent-[0px] normal-case visible border-separate font-lexend">
      <div className="box-border hidden outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]"></div>

      <div className="box-border flex min-h-[1000px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
        <div className="items-center bg-[linear-gradient(220.95deg,rgb(145,213,255)_9.21%,rgb(221,235,255)_59.04%,rgb(249,242,247)_89.13%)] box-border flex justify-center outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full p-6 md:w-6/12 md:p-10">
          <div className="flex min-h-screen items-center justify-center bg-gradient-to-b ">
            <div className="w-full max-w-md bg-transparent">
              <h2 className="mb-6 text-center text-2xl font-bold text-blue-700">Sign Up</h2>

              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                {/* Display Name */}
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input                      
                    type="text"
                    placeholder="Enter your display name"
                    className="w-full rounded-md border bg-white border-gray-300 py-2 pl-10 pr-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    {...register("name")}
                  />
                  {errors.name && <p className="text-red-600 text-sm mt-1 mb-[-0.65rem]">{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input                    
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-md border bg-white border-gray-300 py-2 pl-10 pr-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"                    
                    {...register("email")}
                  />
                  {errors.email && <p className="text-red-600 text-sm mt-1 mb-[-0.65rem]">{errors.email.message}</p>}
                </div>

                {/* Password */}
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input                    
                    type={showPassword ? "text" : "password"}                    
                    placeholder="Enter your password"
                    className="w-full rounded-md border bg-white border-gray-300 py-2 pl-10 pr-10 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    {...register("password")}
                  />
                  {errors.password && <p className="text-red-600 text-sm mt-1 mb-[-0.65rem]">{errors.password.message}</p>}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                {/* Confirm Password */}
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input                    
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Enter your confirm password"
                    className="w-full rounded-md border bg-white border-gray-300 py-2 pl-10 pr-10 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"                  
                    {...register("confirmPassword")}
                  />
                  {errors.confirmPassword && <p className="text-red-600 text-sm mt-1 mb-[-0.65rem]">{errors.confirmPassword.message}</p>}
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                {/* Referral Code */}
                <input
                  type="text"
                  placeholder="Enter your referral code"
                  className="w-full rounded-md border bg-white border-gray-300 py-2 px-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700 transition"
                  disabled={isAllEmpty || !isValid}
                >
                  Sign Up
                </button>
              </form>

              {/* Terms */}
              <p className="mt-4 text-center text-sm text-gray-500">
                By signing up to create an account, you agree to our{" "}
                <a href="#" className="text-blue-600 underline">
                  terms and conditions
                </a>
              </p>

              {/* Login */}
              <p className="mt-4 text-center text-sm text-gray-600">
                Already have an account?{" "}
                <a href="/login" className="text-blue-600 font-medium hover:underline">
                  Login
                </a>
              </p>

              {/* Divider */}
              <div className="my-4 flex items-center justify-center">
                <div className="h-px w-1/4 bg-gray-300"></div>
                <span className="mx-2 text-sm text-gray-500">Or signup with your email</span>
                <div className="h-px w-1/4 bg-gray-300"></div>
              </div>

              {/* Google Sign up */}
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 py-2 hover:bg-gray-100"
              >
                <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="h-5 w-5" />
                <span>Login with Google</span>
              </button>
            </div>
          </div>
        </div>

        <div className="[align-items:normal] box-border hidden flex-row justify-normal min-h-0 min-w-0 bg-white w-auto md:items-center md:flex md:flex-col md:justify-center md:min-h-[auto] md:min-w-[auto] md:w-6/12">
          <div className="box-border max-w-[300px] min-h-0 min-w-0 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full mb-6 md:min-h-[auto] md:min-w-[auto]">
            <div className="box-border flex justify-center outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full border-2 border-solid border-transparent">
              <img
                alt="Login background"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src="https://c.animaapp.com/mequphna8q7Vuh/assets/1.png"
                className="text-transparent aspect-[auto_359_/_363] box-border h-full max-w-full min-h-0 min-w-0 object-contain outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full md:min-h-[auto] md:min-w-[auto]"
              />
            </div>
          </div>
          <h3 className="text-blue-700 text-2xl font-bold box-border leading-9 max-w-[80%] min-h-0 min-w-0 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-center mb-2 md:text-4xl md:leading-[54px] md:min-h-[auto] md:min-w-[auto]">
            LEARN FROM THE BEST. MASTER LATEST SKILLS - Anytime, Anywhere.
          </h3>
        </div>
      </div>

      <section
        aria-label="Notifications alt+T"
        className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]"
      ></section>
    </body>
  )
}
