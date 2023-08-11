import { Container, ContainerAuth, Video, ContentAuth } from "./styles";
import backgroundvideo from "./assets/background.mp4";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AiOutlineLock, AiOutlineMail } from 'react-icons/ai';

import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";

const createUserFormSchema = z.object({
  email: z.string().nonempty("E-mail is required"),
  password: z.string().nonempty("Password is required"),
})

export type CreateUserFormData = z.infer<typeof createUserFormSchema>

export function App() {
  const [dataForm, setDataForm] = useState<CreateUserFormData>();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState,
    reset
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  const { errors } = formState;

  function handleSignIn(data: CreateUserFormData) {
    setDataForm(data);
    setLoading(true);
  }

  useEffect(() => {
    if (loading === true) {
      setTimeout(() => {
        setLoading(false);

        toast.success(`Login successful! ${dataForm?.email}`, {
          position: "top-center",
          autoClose: 9000,
        });

        reset();
      }, 2000);
    }
  }, [loading])

  return (
    <>
      <Container>
        <Video src={backgroundvideo} autoPlay loop muted />
        <ContainerAuth>
          <ContentAuth>
            <h1>Sign In</h1>
            <p>
              Lorem Ipsum is simply dummy text of
              the printing and typesetting industry.
              Lorem Ipsum has been.
            </p>

            <form onSubmit={handleSubmit(handleSignIn)}>
              <Input
                errors={errors}
                register={register}
                iconInput={<AiOutlineMail size={20} color="#3BA2FE" />}
                placeholder="E-mail *"
                name="email"
                type="email"
              />
              <Input
                errors={errors}
                register={register}
                iconInput={<AiOutlineLock size={22} color="#3BA2FE" />}
                placeholder="Password *"
                name="password"
                inputPassword={true}
              />

              <Button
                title={loading == true ? <ClipLoader size={14.5} color="#ffff" /> : "Sign In"}
                disabled={loading == true ? true : false}
                type="submit"
              />
            </form>

            <span className="separator" />

            <span className="help">Help, I can't <a href="/">Sign in</a></span>
          </ContentAuth>
        </ContainerAuth>
      </Container>
    </>
  )
}


