from django.shortcuts import render, get_object_or_404
from rest_framework import generics, status
from rest_framework.response import Response
from .models import *
from .serializers import *
from rest_framework.decorators import api_view

# Request
def index(request):
    return render(request, "index.html")

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
        queryset = Utilizador.objects.filter(id=self.kwargs['post_id'])
        return queryset

# Utilizador Login
@api_view(['POST'])
def login_user(request):
    data = request.data
    user = get_object_or_404(Utilizador, email=data['email'])
    if user.password == data['password']:
        return Response(data={'user': UtilizadorSerializer(user).data} ,status=201)
    else:
        return Response(data={'Failed combination'}, status=400)
    
# Utilizador Regist
@api_view(['POST'])
def register_user(request):
    data = request.data
    serializer = UtilizadorSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Empresa Login
@api_view(['POST'])
def login_empresa(request):
    data = request.data
    user = get_object_or_404(Empresa, email=data['email'])
    if user.password == data['password']:
        return Response(data={'user': EmpresaSerializer(user).data} ,status=201)
    else:
        return Response(data={'Failed combination'}, status=400)
    
# Empresa Regist
@api_view(['POST'])
def register_empresa(request):
    data = request.data
    serializer = EmpresaSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)