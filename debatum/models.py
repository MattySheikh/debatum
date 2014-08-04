from django.db import models
from django.utils import timezone
import datetime


class Topic(models.Model):
	def __unicode__(self):
		return self.topic_name
	topic_name = models.CharField(max_length=200)