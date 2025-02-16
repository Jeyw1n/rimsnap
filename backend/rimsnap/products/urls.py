from django.urls import path
from .views import ProductModelView, LastProductsView

urlpatterns = [
    path('products/', ProductModelView.as_view(), name='products'),
    path('last-products/', LastProductsView.as_view(), name='last_products')
]
