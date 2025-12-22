from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class Genres(models.Model):
    code= models.CharField(max_length=20, unique=True)
    name= models.CharField(max_length=40)

class User(AbstractUser):
    ROLE_CHOICES = (
        ('admin','Admin'),
        ('user','User')
    )
    role= models.CharField(max_length=10, choices=ROLE_CHOICES, default='user')
    PLATFORM= (
        ('mobile','Mobile'),
        ('pc','PC'),
        ('playstation','Playstation'),
        ('xbox','Xbox'),
        ('nintendo','Nintendo')
    )
    platform= models.CharField(max_length=30, choices= PLATFORM, default='mobile')
    genres= models.ManyToManyField(Genres, blank=True)
    timezone= models.CharField(max_length=30, blank=True, null=True)
    public_profile= models.BooleanField(default=True)
    bio= models.TextField(blank= True, null= True)