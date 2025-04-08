from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import QuizViewSet, FeedbackViewSet  # make sure these exist
from django.urls import path
from .views import signup_view


router = DefaultRouter()
router.register(r'quizzes', QuizViewSet)
router.register(r'feedback', FeedbackViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
