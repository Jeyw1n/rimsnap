from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=256)
    description = models.CharField(max_length=256)
    tags = models.CharField(max_length=256)
    image = models.ImageField(upload_to='products/')
    price = models.IntegerField()

    def __str__(self):
        return self.name
