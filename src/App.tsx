import { Container, ContainerAuth, Video, ContentAuth } from "./styles";
import backgroundvideo from "./assets/background.mp4";
import { useForm } from "react-hook-form";

import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { InputPassword } from "./components/InputPassword";

type FormData = {
  email: string;
  password: string;
};

export function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: ""
    }
  });

  function handleSignIn(data: FormData) {
    console.log(data);
  }

  return (
    <Container>
      <Video src={backgroundvideo} autoPlay loop muted />
      <ContainerAuth>
        <ContentAuth>
          <h1>Welcome</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>

          <form onSubmit={handleSubmit(handleSignIn)}>
            <Input
              errors={errors}
              register={register}
              type="email"
              placeholder="E-mail"
              name="E-mail"

            />
            <InputPassword
              errors={errors}
              register={register}
              placeholder="Password"
              name="Password"
            />

            <Button title="Sign In" type="submit" />
          </form>
        </ContentAuth>
      </ContainerAuth>
    </Container>
  )
}


