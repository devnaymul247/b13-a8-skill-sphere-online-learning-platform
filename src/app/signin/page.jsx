"use client";
import { authClient } from "@/lib/auth-client";
import { Check, GeoPolygons } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useState } from "react";
import { GrGoogle } from "react-icons/gr";
import { toast } from "react-toastify";

export default function SignInPage() {
  const onSubmit = async (e) => {
    e.preventDefault();

        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries());
        console.log(userData);

        const {data, error} = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
            callbackURL: "/"
        });

        if (error) {
            console.error("Error signing in:", error);
            toast.error("Error signing in!");

        } 
        else {
            toast.success("User signed in successfully!");
        }
  };
 const [isGoogleLoading, setIsGoogleLoading] = useState(false);
      const handleGoogleSignIn = async () => {
    if (isGoogleLoading) return; 
    
    try {
      setIsGoogleLoading(true);
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
         errorCallbackURL: "/sign-in"
      });
    } catch (err) {
      console.error("Google sign-in error:", err);
      toast.error("Google sign-in failed!");
    } finally {
      setIsGoogleLoading(false); 
    }
  };

  return (
    <Card className="border mx-auto w-125 py-10 mt-5 bg-zinc-800">
      <h1 className="text-center text-2xl font-bold">Sign In</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Password should contains at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>

      <p className="text-center text-2xl">Or</p>
      <Button variant="outline" className="w-full" onClick={handleGoogleSignIn}>
        <GrGoogle />
        Sign in with Google
      </Button>
    </Card>
  );
}