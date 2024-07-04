# Trabalho-Programa-o-NodeJs

O trabalho conta com dois atores os Funcionarios e os Projetos, podendo editar e excluir cada ator separadamente ou excluir e listar os projetos que pertecem a um funcionario e vice-e-versa.

**A tabela Projetos temos:**

id: Int;

nome: String;

data: DataOnly;

descricao:Text;

custo_projeto: Double;


**A tabela Funcionarios temos:**

id: Int;

nome: String;

idade: int;

cpf: String;

email: String;

e a chave estarangeira de projeto, já que projeto pertence ao funcionarios e um funcionario pode ter muitos projetos;

**No Insominia**

- Para Testar o método get em projetos e em funcionarios:
![Captura de tela 2024-07-04 090429](https://github.com/Kauafelippe/Trabalho-Programa-o-NodeJs/assets/160186619/f8f453f6-a611-4c35-8c75-372b0468c9b8)

![Captura de tela 2024-07-04 091311](https://github.com/Kauafelippe/Trabalho-Programa-o-NodeJs/assets/160186619/8d9760c2-5417-442c-96d7-857f400caa56)

- Para testar o método get com filtro nesse caso o id:
![Captura de tela 2024-07-04 091452](https://github.com/Kauafelippe/Trabalho-Programa-o-NodeJs/assets/160186619/f6561d93-83b8-423c-9fb4-08d049fc8d33)

![Captura de tela 2024-07-04 091650](https://github.com/Kauafelippe/Trabalho-Programa-o-NodeJs/assets/160186619/90571f7f-f841-4894-86cf-9873a12effc2)

- Para testar o método get com filtro pesquisando por um sbconjunto nesse caso nome de um projeto e funcionario:
![Captura de tela 2024-07-04 092816](https://github.com/Kauafelippe/Trabalho-Programa-o-NodeJs/assets/160186619/2d86bb75-3e66-42e9-9239-92b7078d8dd2)

![Captura de tela 2024-07-04 093051](https://github.com/Kauafelippe/Trabalho-Programa-o-NodeJs/assets/160186619/7824e0aa-b115-41f5-8c35-2c1f681bfa9f)

- Para testar o método post em projetos e funcionarios:
![Captura de tela 2024-07-04 093150](https://github.com/Kauafelippe/Trabalho-Programa-o-NodeJs/assets/160186619/674d7c7f-c37d-477a-9f34-2ff043fa4966)

![Captura de tela 2024-07-04 093226](https://github.com/Kauafelippe/Trabalho-Programa-o-NodeJs/assets/160186619/343eb521-a9a7-47ee-a5cf-cf5a3b9d07fd)

- Para testar o método PUT em projetos e funcionarios:
![Captura de tela 2024-07-04 093414](https://github.com/Kauafelippe/Trabalho-Programa-o-NodeJs/assets/160186619/87417b8d-7bbe-483d-bb6f-3b4ec2b47f11)

![Captura de tela 2024-07-04 093541](https://github.com/Kauafelippe/Trabalho-Programa-o-NodeJs/assets/160186619/4b17a79e-2fc7-4466-a19a-2198fe537574)

- Para testar o método delete em projetos e funcionarios:
![Captura de tela 2024-07-04 093626](https://github.com/Kauafelippe/Trabalho-Programa-o-NodeJs/assets/160186619/6259bfde-2ea9-4041-8d7c-2c678f370d0d)

![Captura de tela 2024-07-04 093715](https://github.com/Kauafelippe/Trabalho-Programa-o-NodeJs/assets/160186619/13667b59-44ed-4b01-8c0d-fc79e828fe11)
