from django.views import generic
from django.template import RequestContext

class Index(generic.TemplateView):
	template_name = 'index.html'
