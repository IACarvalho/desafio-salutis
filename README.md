====================================================================
06. Crie uma função chamada embaralhaString() que deve receber duas strings como parâmetros e juntar sequencialmente seus caracteres em uma outra string. 
Exemplos: 
1. embaralhaString('abcd','efgh')	=> 'aebfcgdh'
2. embaralhaString('abcd','ef') 	=> 'aebfcd'
3. embaralhaString('ab','efgh') 	=> 'aebfgh'





====================================================================
07. Implemente uma função RECURSIVA que inverta uma string.
Exemplos: inverte( "teste" ) => "etset"





====================================================================
08. Crie uma função que receba uma string e retorne um Hash com a quantidade de ocorrências de cada palavra. 
ATENÇÃO: Não usar a função split, ou outra que automatize o processo de quebra da string em palavras.
Exemplo: contaOcorrencias('asa bola casa asa bola asa') teria como saída um hash com a seguinte estrutura:
{
	'asa':	3,
	'bola':	2,
	'casa':	1
}





====================================================================
09. Implemente um método ou função que receba dois intervalos de datas e retorne um booleano informando se existe intersecção entre os dois intervalos:
Exemplos:
1. verificaInterseccao('01/12/2013', '20/12/2013', '15/12/2013', '31/12/2013')  => Verdadeiro
2. verificaInterseccao('01/12/2013', '15/12/2013', '20/12/2013', '31/12/2013')  => Falso





====================================================================
10. Dadas as tabelas abaixo:
PEDIDO: 
	CHAVE Integer 		(Chave Primária)
	MOVIMENTACAO Date 	(Data sem hora)
	PESSOA Integer		(Foreign Key PESSOA.CHAVE) 
	RECURSO Integer 	(Foreign Key RECURSO.CHAVE) 
	QUANTIDADE Double 	(Número de ponto flutuante)
	UNITARIO Double 
	TOTAL Double; 	

RECURSO: 
	CHAVE Integer 		(Chave Primária)
	CODIGO VarChar(25), 
	NOME VarChar(150), 

PESSOA: 
	CHAVE Integer 		(Chave Primária)
	CODIGO VarChar(25), 
	NOME VarChar(150), 
	UF Integer; 		(Foreign Key UF.CHAVE) 

UF: 
	CHAVE Integer 		(Chave Primária)
	CODIGO VarChar(25), 
	NOME VarChar(150), 

Crie uma query que traga a soma dos totais dos pedidos movimentados entre 1º de Janeiro de 2006 a 31º de Janeiro de 2006, por nome do recurso, nome da pessoa e código da uf da pessoa, independentemente dos campos pessoa, recurso, uf estarem preenchidas.

```sql
SELECT sum(pe.TOTAL) AS [totais dos pedidos],
       re.NOME AS [nome do recurso],
       pess.NOME AS [nome da pessoa],
       u.CODIGO AS [código da uf da pessoa]
FROM PEDIDO pe
LEFT JOIN RECURSO re ON pe.RECURSO = re.CHAVE
LEFT JOIN PESSOA pess ON pess.CHAVE = pe.PESSOA
LEFT JOIN UF u ON u.CHAVE = pess.UF
WHERE pe.MOVIMENTACAO BETWEEN '2006-01-01' AND '2006-01-31'
GROUP BY re.NOME,
         pess.NOME,
         u.CODIGO
```