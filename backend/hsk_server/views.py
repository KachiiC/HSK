from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Word, HSKLevel
from .serializers import WordSerializer, HSKLevelSerializer


@api_view(['GET'])
def hsk_words_list(request):
    data = Word.objects.all()

    serializer = WordSerializer(data, context={'request': request}, many=True)

    return Response(serializer.data)


@api_view(['GET'])
def hsk_single_word(request, chinese_characters):
    try:
        word = Word.objects.get(chinese_characters=chinese_characters)
    except Word.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = WordSerializer(word, context={'request': request})

    return Response(serializer.data)


@api_view(['GET'])
def all_hsk_levels(request):
    if request.method == 'GET':
        data = HSKLevel.objects.all()

        serializer = HSKLevelSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)


@api_view(['GET'])
def single_hsk_level(request, level):
    try:
        level = HSKLevel.objects.get(level=level)
    except HSKLevel.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = HSKLevelSerializer(level, context={'request': request})

    return Response(serializer.data)

@api_view(['GET'])
def revision_list(request):
    data = Word.objects.all().filter(revise=True)

    serializer = WordSerializer(data, context={'request': request}, many=True)

    return Response(serializer.data)

@api_view(['PUT'])
def add_revision_word(request,chinese_characters):
    try:
        word = Word.objects.get(chinese_characters=chinese_characters)
    except Word.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = WordSerializer(word, data=request.data, context={'request': request})

    if serializer.is_valid():

        serializer.save()

        return Response(status=status.HTTP_204_NO_CONTENT)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)