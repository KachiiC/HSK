from django.db import models


class Word(models.Model):
    word = models.CharField(max_length=10)
    pingyin = models.CharField(max_length=20)
    definition = models.TextField()
    type = models.CharField(max_length=20)

class HSK(models.Model):
    level = models.ManyToManyField(Word)