from django.db import models
from django.contrib.auth.models import User

class Quiz(models.Model):
    question = models.CharField(max_length=255)
    option1 = models.CharField(max_length=100)
    option2 = models.CharField(max_length=100)
    option3 = models.CharField(max_length=100)
    option4 = models.CharField(max_length=100)
    correct_answer = models.CharField(max_length=100)

    def __str__(self):
        return self.question

class Feedback(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    quiz = models.CharField(max_length=255)
    selected_answer = models.CharField(max_length=100)
    is_correct = models.BooleanField()

    def __str__(self):
        return f"{self.user.username} - {self.question}"
