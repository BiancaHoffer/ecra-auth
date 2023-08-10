import { ReactDOM } from "react";
import { Container, ContainerAuth, Video, ContentAuth } from "./styles";
import backgroundvideo from "./assets/background.mp4";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { InputPassword } from "./components/InputPassword";

const createUserFormSchema = z.object({
  email: z.string().nonempty("E-mail is required"),
  password: z.string().nonempty("Password is required"),
})

export function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(createUserFormSchema),
  });

  function handleSignIn(data: any) {
    console.log(data);
  }

  return (
    <Container>
      <Video src={backgroundvideo} autoPlay loop muted />
      <ContainerAuth>
        <ContentAuth>
          <h1>Welcome</h1>
          <p>
            Lorem Ipsum is simply dummy text of
            the printing and typesetting industry.
            Lorem Ipsum has been.
          </p>

          <form onSubmit={handleSubmit(handleSignIn)}>
            <Input
              errors={errors}
              register={register}
              type="email"
              name="email"

            />
            <InputPassword
              errors={errors}
              register={register}
              placeholder="Password"
              name="password"
            />

            <Button title="Sign In" type="submit" />
          </form>

          <span className="separator" />

          <span className="help">Help, I can't <a href="/">Sign in</a></span>
        </ContentAuth>
      </ContainerAuth>
    </Container>
  )
}


