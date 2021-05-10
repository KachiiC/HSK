from rest_framework import serializers
from .models import HSKLevel, Word, RevisionWord


class WordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Word
        fields = ('chinese_characters', 'pinyin', 'definition', 'type', 'hsk_level')


class HSKLevelSerializer(serializers.ModelSerializer):
    words = WordSerializer(many=True, read_only=True)

    class Meta:
        model = HSKLevel
        fields = ('level', 'words')


class RevisionWordSerializer(serializers.ModelSerializer):
    words = WordSerializer(many=True, read_only=True)

    class Meta:
        model = RevisionWord
        fields = ['words']
