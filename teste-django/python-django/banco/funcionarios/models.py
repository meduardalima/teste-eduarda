from django.db import models

# Create your models here.
class Pessoa(models.Model):
    nome = models.CharField(max_length=50, help_text="insira o nome")
    cpf = models.CharField(max_length=11, help_text='apenas número', unique= True)
    email = models.EmailField()
    data_cadastro = models.DateField(auto_now_add=True)

    class Meta: 
        abstract = True

class Funcionario(Pessoa):
    cargo = models.CharField(max_length=20)
    meta = models.BigIntegerField()
    class Meta: 
        verbose_name = 'funcionario'
        verbose_name_plural = 'funcionarios'
    def __str__(self):
        return self.cpf
