from django.db import models
from django.contrib.auth.models import User

class MenuItem(models.Model):
    name = models.CharField(max_length=255)
    category = models.CharField(max_length=100, default='default_category')
    image = models.CharField(max_length=100, default='https://media.istockphoto.com/id/890080686/vector/no-eating-or-drinking-sign-paper-cup-with-tubule-and-hamburger-icons-in-crossed-out-red.jpg?s=612x612&w=0&k=20&c=50abocAMrItzwS2Uxzd17E78JF8En9ccn8KfLXJVzxM=')
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)

class Order(models.Model):
    customer = models.ForeignKey(User, on_delete=models.CASCADE)
    menu_items = models.ManyToManyField(MenuItem)
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
