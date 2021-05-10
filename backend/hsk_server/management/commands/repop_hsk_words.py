import os
from django.core.management.base import BaseCommand
from hsk_server.models import Word, HSKLevel
from hsk_server.management.repopper_hsk_words import create_new_hsk_words


class Command(BaseCommand):
    def handle(self, *args, **options):

        HSKLevel.objects.all().delete()
        Word.objects.all().delete()

        for x in range(1, 7):
            HSKLevel(
                level=x
            ).save()

        print("HSK levels made!")

        print("Creating HSK words...")
        create_new_hsk_words(os.getcwd() + '/hsk_server/data/hsk_data.json')

        words = Word.objects.all()
        all_levels = HSKLevel.objects.all()

        for word in words:
            for hsk_level in all_levels:
                if word.hsk_level == hsk_level.level:
                    correct_level = HSKLevel.objects.get(level=word.hsk_level)
                    correct_level.words.add(word)

        print("HSK repop complete!")
