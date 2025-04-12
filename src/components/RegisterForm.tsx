import { Input, Form, Button } from "@heroui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type Inputs = z.infer<typeof formSchema>;

const formSchema = z.object({
  email: z.string(),
  password: z.string(),
  name: z.string(),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(formSchema) });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Form
        className="w-full justify-center items-center space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          isRequired
          className="w-72"
          defaultValue=""
          label="Name"
          type="name"
          {...register("name")}
        />
        <Input
          isRequired
          className="w-72"
          defaultValue=""
          label="Email"
          type="email"
          {...register("email")}
        />
        <Input
          isRequired
          className="w-72"
          defaultValue=""
          label="Password"
          type="password"
          {...register("password")}
        />
        <Button className="w-72" color="danger" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}
