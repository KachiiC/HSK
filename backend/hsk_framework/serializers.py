from rest_framework import serializers
from .models import *


class HSK1Serializer(serializers.ModelSerializer):

    class Meta:
        model = HSK1
        fields = ('pk', 'word', 'pingyin', 'definition', 'type')