from django.shortcuts import render
from rest_framework import generics
from .models import *
from .serializers import *

# All empregos
class empregoList(generics.ListCreateAPIView):
    queryset = Emprego.objects.all()
    serializer_class = EmpregoSerializer

# Empregos by id
class emprego_by_idList(generics.ListCreateAPIView):
    queryset = Emprego.objects.all()
    serializer_class = EmpregoSerializer
    def get_queryset(self):
        queryset = Emprego.objects.filter(id=self.kwargs['post_id'])
        return queryset

# All empresas
class empresaList(generics.ListCreateAPIView):
    queryset = Empresa.objects.all()
    serializer_class = EmpresaSerializer

# Empresas by id
class empresa_by_idList(generics.ListCreateAPIView):
    queryset = Empresa.objects.all()
    serializer_class = EmpresaSerializer
    def get_queryset(self):
        queryset = Emprego.objects.filter(id=self.kwargs['post_id'])
        return queryset

# All users
class utilizadorList(generics.ListCreateAPIView):
    queryset = Utilizador.objects.all()
    serializer_class = UtilizadorSerializer

# Users by id
class utilizador_by_idList(generics.ListCreateAPIView):
    queryset = Utilizador.objects.all()
    serializer_class = UtilizadorSerializer
    def get_queryset(self):
        queryset = Emprego.objects.filter(id=self.kwargs['post_id'])
        return queryset
