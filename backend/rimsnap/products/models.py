from django.db import models
from django.utils.html import format_html


class Product(models.Model):
    name = models.CharField(max_length=256)
    description = models.CharField(max_length=256)
    tags = models.CharField(max_length=256)
    price = models.IntegerField()
    
    def __str__(self):
        return self.name

class ProductImage(models.Model):
    product = models.ForeignKey(Product, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='products/')

    def image_preview(self):
        if self.image:
            return format_html('<img src="{}" width="100" />', self.image.url)
        return "No Image"

    image_preview.short_description = 'Preview'

    def __str__(self):
        return f"Image for {self.product.name}"