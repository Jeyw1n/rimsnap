from django.urls import path
from .views import (
    ProductModelView,
    LastProductsView,
    ProductDetailView,
    ProductReviewsView,
    AddReviewView,
    CartItemListCreateView,
    CartItemRetrieveUpdateDestroyView
)

urlpatterns = [
    path('products/', ProductModelView.as_view(), name='products'),
    path('products/<int:id>/', ProductDetailView.as_view(), name='product_detail'),
    path('last-products/', LastProductsView.as_view(), name='last_products'),
    path('products/<int:product_id>/reviews/', ProductReviewsView.as_view(), name='product-reviews'),
    path('products/<int:product_id>/add-review/', AddReviewView.as_view(), name='add-review'),
    
    # URL-адреса для корзины
    path('cart/', CartItemListCreateView.as_view(), name='cart-list-create'),
    path('cart/<int:pk>/', CartItemRetrieveUpdateDestroyView.as_view(), name='cart-item-detail'),
]
