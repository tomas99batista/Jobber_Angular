# Generated by Django 3.0 on 2019-12-16 10:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('jobber_restapi_app', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='utilizador',
            name='curriculum',
        ),
        migrations.RemoveField(
            model_name='utilizador',
            name='user',
        ),
    ]
