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

e a chave estarangeira de produto, já que produto pertence ao funcionarios e um funcionario pode ter muitos projetos;
