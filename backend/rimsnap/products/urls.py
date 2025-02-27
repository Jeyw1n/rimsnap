from django.urls import path
from .views import (
  ProductModelView,
  LastProductsView,
  ProductDetailView,
  ProductReviewsView,
  AddReviewView
)

urlpatterns = [
    path('products/', ProductModelView.as_view(), name='products'),
    path('products/<int:id>/', ProductDetailView.as_view(), name='product_detail'),  # Детали товара
    path('last-products/', LastProductsView.as_view(), name='last_products'),
    path('products/<int:product_id>/reviews/', ProductReviewsView.as_view(), name='product-reviews'),
    path('products/<int:product_id>/add-review/', AddReviewView.as_view(), name='add-review'),
]
