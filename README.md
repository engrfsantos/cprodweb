executar

PS> docker build . -t naldfranc/cprodweb:1.0

PS> docker run --network=host -d -p 8000:8000 -v .:/CPRODWEB --name cprodweb naldfranc/cprodweb:1.0

Abrir um terminal dentro do docker iniciado

PA> npm init



#Instalar os pacotes um a um
python -m pip install uvicorn

#se der erro use abaixo
pip install --upgrade pip

#Instalar os pacotes pelo arquivo requiriments.txt
pip install -r requirements.txt


#Caso ainda não exista o arquivo requeriments.txt, cria-lo com  as dependências do projeto
pip freeze > requirements.txt
#recria-lo a cada pacote instalado

## Rodando a API Produtos utilizando o framework FastAPI
#Para executar o servidor FastAPI

uvicorn main:app --host 127.0.0.1 --port 8000 --reload
```


dentro da pasta lanacmento-> models.py
...
class Producao(models.Model):
    producao_id = models.AutoField(primary_key=True, db_column="td01_producao_id")
    leitura = models.CharField(max_length=24, db_column="td01_leitura")
    cod_produto = models.CharField(max_length=15, db_column="td01_cod_produto")
    descricao = models.CharField(max_length=30, db_column="td01_descricao")
    status = models.IntegerField(db_column="td01_status")
    id = models.CharField(max_length=6, db_column="td01_id")
    dt = models.DateTimeField(db_column="td01_dt")
    hr = models.TimeField( db_column="td01_hr")
    serie = models.CharField(max_length=6,db_column="td01_serie")
    re = models.CharField(max_length=6, db_column="td01_re")
    local = models.CharField(max_length=4, db_column="td01_local")
    os = models.IntegerField(db_column="td01_os")
class Meta:
        # Definindo o nome da tabela no banco de dados
        db_table = 'td01_producao'

def __str__(self):
        return self.name
dentro da pasta lanacmento-> models.py
...
class Producao(models.Model):
    producao_id = models.AutoField(primary_key=True, db_column="td01_producao_id")
    leitura = models.CharField(max_length=24, db_column="td01_leitura")
    cod_produto = models.CharField(max_length=15, db_column="td01_cod_produto")
    descricao = models.CharField(max_length=30, db_column="td01_descricao")
    status = models.IntegerField(db_column="td01_status")
    id = models.CharField(max_length=6, db_column="td01_id")
    dt = models.DateTimeField(db_column="td01_dt")
    hr = models.TimeField( db_column="td01_hr")
    serie = models.CharField(max_length=6,db_column="td01_serie")
    re = models.CharField(max_length=6, db_column="td01_re")
    local = models.CharField(max_length=4, db_column="td01_local")
    os = models.IntegerField(db_column="td01_os")
class Meta:
        # Definindo o nome da tabela no banco de dados
        db_table = 'td01_producao'

def __str__(self):
        return self.name
dentro da pasta lanacmento-> models.py
...
class Producao(models.Model):
    producao_id = models.AutoField(primary_key=True, db_column="td01_producao_id")
    leitura = models.CharField(max_length=24, db_column="td01_leitura")
    cod_produto = models.CharField(max_length=15, db_column="td01_cod_produto")
    descricao = models.CharField(max_length=30, db_column="td01_descricao")
    status = models.IntegerField(db_column="td01_status")
    id = models.CharField(max_length=6, db_column="td01_id")
    dt = models.DateTimeField(db_column="td01_dt")
    hr = models.TimeField( db_column="td01_hr")
    serie = models.CharField(max_length=6,db_column="td01_serie")
    re = models.CharField(max_length=6, db_column="td01_re")
    local = models.CharField(max_length=4, db_column="td01_local")
    os = models.IntegerField(db_column="td01_os")
class Meta:
        # Definindo o nome da tabela no banco de dados
        db_table = 'td01_producao'

def __str__(self):
        return self.name
