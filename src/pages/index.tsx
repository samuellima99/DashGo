import { Flex, Button, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import { Input } from '../components/Form/Input';

type SigninFormData = {
  email: string;
  password: string;
};

const signinFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório!').email('E-mail invalido!'),
  password: yup.string().required('Senha obrigatória!'),
});

export default function Home() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signinFormSchema),
  });
  const { errors } = formState;

  const handleSignin: SubmitHandler<SigninFormData> = async (values, event) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSignin)}
      >
        <Stack spacing={4}>
          <Input
            type="email"
            name="email"
            error={errors.email}
            label="E-mail"
            {...register('email')}
          />
          <Input
            type="password"
            name="password"
            error={errors.password}
            label="Senha"
            {...register('password')}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="purple"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
