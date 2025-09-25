"use client"

import { useRouter } from "next/navigation"
import React, { useState } from "react"
import { useLoginUser } from "../_services/authService"
import { LoginRequest } from "../_types/auth"
import { toast } from "sonner"
import { ExternalToast } from "sonner"
import { useForm } from "react-hook-form"

interface FormData {
  email: string
  password: string
}

export default function LoginPage() {
  const router = useRouter()
  const { trigger: handleLogin, isMutating: isProcessing } = useLoginUser()
  
  const externalToast : ExternalToast = { position: "top-center", style: { fontSize: "1rem" } }

  // const [formData, setFormData] = useState<FormData>({
  //   email: "",
  //   password: "",
  // })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,   
  } = useForm<FormData>({
    defaultValues: { email: "", password: "" },
  })

  const [showPassword, setShowPassword] = useState(false)

  const onSubmit = async (fd: FormData) => { 
    console.log("Login attempt:", fd)
  
    const payload: LoginRequest = {
      email: fd.email,
      password: fd.password,
    }
    
    try {      
      await handleLogin(payload) // server auto save token to cookie if login success
      toast.info("Login successful", externalToast)

      reset()
      // router.push("/")
    } catch (e: any) {
      const msg = e?.response?.data?.message ?? "Login failed";
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
          <div className="box-border gap-x-4 flex flex-col max-w-[400px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-4 w-full">
            <h1 className="text-blue-700 text-2xl font-semibold box-border leading-9 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mb-2">
              Login
            </h1>

            <form className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]" onSubmit={handleSubmit(onSubmit)}>
              <div className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mb-4">
                <label className="text-sm font-medium items-center box-border flex leading-[14px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mb-2">
                  <div className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
                    <p className="box-border leading-[21px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
                      Email
                    </p>
                  </div>
                </label>
                <div className="relative box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full">
                  <div className="absolute text-slate-500 box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] left-3 top-2/4">
                    <img
                      src="https://c.animaapp.com/mequphna8q7Vuh/assets/icon-1.svg"
                      alt="Icon"
                      className="box-border h-4 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-4"
                    />
                  </div>
                  <input
                    placeholder="Enter your email"
                    type="email"                                        
                    className="text-sm box-border flex h-10 leading-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full border border-slate-200 pl-10 pr-3 py-2 rounded-md border-solid"
                    {...register("email")}
                    required
                  />
                </div>
              </div>

              <div className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mb-4">
                <label className="text-sm font-medium items-center box-border flex leading-[14px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] mb-2">
                  <div className="box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
                    <p className="box-border leading-[21px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
                      Password
                    </p>
                  </div>
                </label>
                <div className="relative box-border h-10 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
                  <div className="relative box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full">
                    <div className="absolute text-slate-500 box-border outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] left-3 top-2/4">
                      <img
                        src="https://c.animaapp.com/mequphna8q7Vuh/assets/icon-2.svg"
                        alt="Icon"
                        className="box-border h-4 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-4"
                      />
                    </div>
                    <input
                      placeholder="Enter your password"
                      type={showPassword ? "text" : "password"}                      
                      className="text-sm box-border flex h-10 leading-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] w-full border border-slate-200 px-10 py-2 rounded-md border-solid"
                      {...register("password")}
                      required
                    />
                  </div>
                  <button
                    type="button"
                    className="absolute text-slate-500 text-sm items-center bg-transparent flex h-[calc(100%_-_6px)] justify-center leading-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-center text-nowrap w-10 p-0 rounded-md right-[3px] top-[3px]"
                    onClick={togglePasswordVisibility}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    <img
                      src="https://c.animaapp.com/mequphna8q7Vuh/assets/icon-3.svg"
                      alt="Icon"
                      className="box-border h-4 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-nowrap w-4"
                    />
                  </button>
                </div>
              </div>

              <a
                href="/en/forgot-password?next=/"
                className="text-blue-700 text-sm items-center box-border inline-flex justify-end leading-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] underline-offset-4 text-nowrap w-full rounded-md"
              >
                Forgot Your Password?
              </a>

              {/* <button
                type="submit"
                className="text-indigo-50 text-sm items-center bg-blue-700 inline-flex h-10 justify-center leading-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-center text-nowrap w-full mb-4 px-4 py-2 rounded-md"
              >
                Login
              </button> */}

              <button
                type="submit"
                disabled={isSubmitting || isProcessing}
                aria-disabled={isSubmitting || isProcessing}
                aria-busy={isSubmitting || isProcessing}
                className={[
                  "text-indigo-50 text-sm items-center inline-flex h-10 justify-center leading-5",
                  "outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-center text-nowrap w-full mb-4 px-4 py-2 rounded-md transition",
                  (isSubmitting || isProcessing)
                    ? "bg-blue-700/60 cursor-not-allowed"
                    : "bg-blue-700 hover:bg-blue-800"
                ].join(" ")}
              >
                {(isSubmitting || isProcessing) ? (
                  <svg
                    className="h-4 w-4 animate-spin opacity-70"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" strokeWidth="4" />
                    <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                ) : (
                  "Login"
                )}
              </button>

              <div className="text-slate-500 text-sm box-border leading-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-center mb-4">
                By logging in, you agree to our's
                <a
                  href="/en/terms"
                  className="text-blue-700 font-medium items-center box-border inline-flex justify-center outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] underline-offset-4 text-nowrap ml-1 rounded-md"
                >
                  terms and conditions
                </a>
              </div>

              <div className="items-center box-border flex justify-center outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
                <p className="text-sm box-border leading-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)]">
                  Don't have an account?
                </p>
                <a
                  href="/en/signup?next=/"
                  className="text-blue-700 text-sm font-medium items-center box-border flex justify-center leading-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] underline-offset-4 text-nowrap ml-1 rounded-md"
                >
                  Sign Up
                </a>
              </div>
            </form>

            <div className="relative items-center box-border flex justify-center outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] before:accent-auto before:bg-slate-500 before:box-border before:text-slate-950 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-0.5 before:tracking-[normal] before:leading-[26px] before:list-outside before:list-disc before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:font-lexend after:accent-auto after:bg-slate-500 after:box-border after:text-slate-950 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-0.5 after:tracking-[normal] after:leading-[26px] after:list-outside after:list-disc after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:font-lexend">
              <span className="text-slate-500 text-sm box-border block shrink-0 leading-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] px-8 md:px-16">
                Or continue with
              </span>
            </div>

            <button
              type="button"
              className="text-sm items-center bg-white gap-x-2 flex h-10 justify-center leading-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] gap-y-2 text-center text-nowrap w-full border border-slate-200 p-0 rounded-md border-solid"
              onClick={handleGoogleLogin}
            >
              <img
                src="https://c.animaapp.com/mequphna8q7Vuh/assets/icon-4.svg"
                alt="Icon"
                className="box-border h-5 outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-nowrap w-5"
              />
              <span className="text-base box-border block leading-[22.4px] outline-[oklab(0.136266_-0.00681703_-0.0357494_/_0.5)] text-nowrap font-lexend">
                Login with Google
              </span>
            </button>
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
