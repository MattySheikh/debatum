from django.views.generic.base import TemplateView
from django.template import RequestContext

class Index(TemplateView):
	template_name = 'index.html'
	def get_context_data(self, **kwargs):
		context = super(Index, self).get_context_data(**kwargs)
		context['css'] = ['homepage']
		return context