from django.shortcuts import render, redirect
from django.contrib import messages
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
import json
from .models import ContactMessage, Service, Project, Testimonial


def home(request):
    """Home page view with all sections"""
    context = {
        'services': Service.objects.filter(is_active=True),
        'featured_projects': Project.objects.filter(is_featured=True),
        'other_projects': Project.objects.filter(is_featured=False),
        'testimonials': Testimonial.objects.filter(is_active=True),
    }
    return render(request, 'website/home.html', context)


@csrf_exempt
@require_http_methods(["POST"])
def contact_submit(request):
    """Handle contact form submission"""
    try:
        data = json.loads(request.body)
        
        contact_message = ContactMessage.objects.create(
            name=data.get('name', ''),
            email=data.get('email', ''),
            company=data.get('company', ''),
            message=data.get('message', '')
        )
        
        return JsonResponse({
            'success': True,
            'message': 'Message sent successfully! We\'ll get back to you soon.'
        })
    
    except Exception as e:
        return JsonResponse({
            'success': False,
            'message': 'There was an error sending your message. Please try again.'
        }, status=400)