# Generated by Django 3.2.2 on 2021-05-10 21:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('hsk_server', '0002_revisionword'),
    ]

    operations = [
        migrations.RenameField(
            model_name='revisionword',
            old_name='words',
            new_name='revision_word',
        ),
    ]
