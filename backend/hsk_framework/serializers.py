from rest_framework import serializers
from .models import *


class HSKSerializer(serializers.ModelSerializer):

    class Meta:
        model = Word
        fields = ('pk', 'word', 'pingyin', 'definition', 'type')