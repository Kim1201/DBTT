from django.urls import path
from . import views
import urllib.request
import json

urlpatterns = [
    path('members/', views.members, name='members'),
]
