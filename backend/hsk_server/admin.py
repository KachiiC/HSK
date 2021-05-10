from django.contrib import admin
from .models import Word, HSKLevel

admin.site.register(Word)  # HSK Word
admin.site.register(HSKLevel)  # HSK Level
