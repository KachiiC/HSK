from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import HSK1
from .serializers import *

@api_view(['GET', 'POST'])
def hsk1_list(request):
    if request.method == 'GET':
        data = HSK1.objects.all()

        serializer = HSK1Serializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = HSK1Serializer(data=request.data, many=True)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def hsk1_detail(request, pk):
    try:
        hsk1 = HSK1.objects.get(pk=pk)
    except HSK1.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = HSK1Serializer(hsk1, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        hsk1.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)