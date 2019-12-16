from django.db import models
from django.contrib.auth.models import User
from .choices import *

# Create your models here.
class Utilizador(models.Model):
    id = models.AutoField(primary_key=True)  # Id_autogerated
    # Details
    first_name = models.CharField(max_length=70)
    last_name = models.CharField(max_length=70)
    b_date = models.DateField()
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=20)
    phone = models.CharField(max_length=20)
    city = models.CharField(max_length=50)
    website = models.URLField()
    sector = models.CharField(max_length=20)
    
    class Meta:
        db_table = 'utilizador'
    
    def __str__(self):
        return self.first_name + self.last_name
    

class Empresa(models.Model):
    id = models.AutoField(primary_key=True)  # Id_autogerated
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    # Details
    first_name = models.CharField(max_length=70)
    last_name = models.CharField(max_length=70)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=20)
    phone = models.CharField(max_length=20)
    city = models.CharField(max_length=50)
    website = models.URLField()
    company_name = models.CharField(max_length=50)

    class Meta:
        db_table = 'empresa'

    def __str__(self):
        return self.first_name + self.last_name
    
class Emprego(models.Model):
    id = models.AutoField(primary_key=True)  # Id_autogerated
    title = models.CharField(max_length=70)
    description = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    publisher = models.CharField(max_length=20, blank=True)
    location = models.IntegerField(choices=LOCATION)  # Pode ser Remote, no Local da empresa ou noutra sede ou sth else
    # Professional Details
    job_sector = models.IntegerField(choices=JOB_SECTOR)  # IT, Economy
    file = models.FileField(blank=True)  # Can post a PDF with more details of the job, but it's totally optional

    class Meta:
        db_table = 'emprego'

    def __str__(self):
        return self.title
    