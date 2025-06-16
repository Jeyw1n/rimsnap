from django.db import models
from django.contrib.auth.models import User
from django.utils.html import format_html
from django.utils import timezone


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
    
class CartItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.quantity} x {self.product.name} в корзине {self.user.username}"

    @property
    def total_price(self):
        return self.product.price * self.quantity

    class Meta:
        ordering = ['-created_at']
        unique_together = ['product', 'user']  # Один товар - одна запись у пользователя

class Review(models.Model):
    product = models.ForeignKey(Product, related_name="reviews", on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField()
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Отзыв от {self.user.username} на {self.product.name}"

    class Meta:
        ordering = ['-date']  # Сортировка отзывов по дате (новые сначала)