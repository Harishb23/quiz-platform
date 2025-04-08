from django.contrib import admin
from django.urls import path, include
from quiz.views import home

urlpatterns = [
    path('', home),  # 👈 this handles the root URL
    path('admin/', admin.site.urls),
    path('api/', include('quiz.urls')),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken'))
]
   
