# Jobber

Tecnologias e Programação Web - Universidade de Aveiro 2019/20

Jobber é um website para procurar e publicar ofertas de emprego.

- Tomás Batista | 89296
- João Dias | 89236
- Flávia Figueiredo | 88886 


# Website
### Deployment:
O nosso website foi deployed no [Heroku](https://jobber-angular.herokuapp.com/)

### Funções disponíveis:

> Login e Registo

> Visualizar, Inserir Detalhes e Atualizar Perfil Utilizador

> Publicar ofertas de emprego (Necessita estar registado e loggado)

> É possível ver todas as ofertas de emprego disponíveis no website

> Procurar ofertas de emprego (Necessita Login), filtrando por:

> - Título da oferta (Keyword, ex: "Frontend")   
> - Setor da oferta (Finanças, Software Dev, Arts, etc)
> - Localidade (Cidade da oferta de emprego)    
> - Empresa que publicou oferta  


### User Teste
- **Email:** teste@teste.com
- **Password:** 12345

# API

API foi deployed no pythonanywhere: [Python Anywhere](http://tomas99batista.pythonanywhere.com/)

|URL |REQUEST|TYPE|DATA |  
|-|-|-|-|
|*/*|API List | **GET** |Lista com todos os endpoints possíveis
|*/emprego/*|Empregos | **GET, POST** |{title, description, created_at, empresa_fk, location, job_sector}
|*/utilizador/*|Utilizadores | **GET, POST** |{first_name, last_name, b_date, email, password, phone, city, website, sector}
|*/empresa/*|Empresas | **GET, POST** |{company_name, email, password, phone, city, website, job_sector}
|*/emprego/{id}/*|Emprego por id| **GET, PUT** |{title, description, created_at, empresa_fk, location, job_sector}
|*/utilizador/{id}/*|Utilizador por id | **GET, PUT** |{first_name, last_name, b_date, email, password, phone, city, website, sector}
|*/empresa/{id}/*|Empresa por id | **GET, PUT** |{company_name, email, password, phone, city, website, job_sector}
|*/auth/login_user/*|Login User | **POST** |{email, password}
|*/auth/register_user/*|Regist User | **POST** |{first_name, last_name, b_date, email, password, phone, city, website, sector}
|*/auth/login_empresa/*|Login empresa | **POST** |{email, password}
|*/auth/register_empresa/*|Regist Empresa | **POST** |{company_name, email, password, phone, city, website, job_sector}

# Nota
- Caso o Heroku e o PythonAnywhere não funcionem por motivos alheios a nós, incluímos também os ficheiros para a Rest API e para o projeto Angular para poderem ser corridos localmente.

- **Install REST API**

 `$ virtualenv -p python3 venv`

 `$ source ./venv/bin/activate`

`$ pip3 install -r requirements.txt`

- **Run REST API**

 `$ source ./venv/bin/activate`

 `$ python3 manage.py runserver`

- **Run Angular Website**

 `$ ng serve`
