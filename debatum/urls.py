from django.conf.urls import patterns, include, url
from django.contrib import admin

from debatum import views

admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    url(r'^$', views.Index.as_view(), name='index'),
    url(r'^admin/', include(admin.site.urls)),
)