from rest_framework import serializers
from .models import *

# Models serializer
class UtilizadorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Utilizador
        fields = "__all__"

class EmpresaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empresa
        fields = "__all__"


class EmpregoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Emprego
        fields = "__all__"        