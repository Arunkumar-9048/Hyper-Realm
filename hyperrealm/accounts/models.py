from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.

class User(AbstractUser):
    ROLE_CHOICES = (
        ('Admin','admin'),
        ('User','user')
    )
    role= models.CharField(max_length=10, choices=ROLE_CHOICES, default='user')

class UserProfile(models.Model):
    user= models.OneToOneField('User', on_delete=models.CASCADE, related_name='user_profile')
    
    bio= models.TextField(blank=True)
    phone= models.CharField(max_length=15, blank=True)
    profileimage= models.ImageField(upload_to='uploads/Profiles', blank=True)

