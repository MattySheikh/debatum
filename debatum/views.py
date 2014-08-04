from django.views.generic.base import TemplateView
from django.template import RequestContext
from debatum.models import Topic
import pprint

class Home(TemplateView):
	model = Topic
	template_name = 'homepage.html'
	def get_context_data(self, **kwargs):
		context = super(Home, self).get_context_data(**kwargs)
		context['css'] = ['homepage']
		context['js'] = ['homepage']
		context['topic_list'] = Topic.objects.all()

		return context