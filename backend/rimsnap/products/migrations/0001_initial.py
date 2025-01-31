# Generated by Django 5.1.5 on 2025-01-30 07:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=256)),
                ('description', models.CharField(max_length=256)),
                ('tags', models.CharField(max_length=256)),
                ('image', models.ImageField(upload_to='products/')),
                ('price', models.IntegerField(max_length=256)),
            ],
        ),
    ]
