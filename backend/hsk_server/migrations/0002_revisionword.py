# Generated by Django 3.2.2 on 2021-05-10 20:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hsk_server', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='RevisionWord',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('words', models.ManyToManyField(blank=True, to='hsk_server.Word')),
            ],
        ),
    ]
