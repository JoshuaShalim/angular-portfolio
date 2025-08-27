import { Component, signal, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,  // if you want this component to be standalone
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = signal(false);
  submitStatus = signal<'idle' | 'success' | 'error'>('idle');

  contactInfo = {
    email: 'Joshuashalim15@gmail.com',
    phone: '+92 (310) 2497 618',
    location: 'Karachi, Pakistan',
    availability: 'Available for freelance work'
  };

  socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/JoshuaShalim',
      icon: 'fab fa-github'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/joshua-shalim',
      icon: 'fab fa-linkedin'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/joshua.shalim',
      icon: 'fab fa-twitter'
    },
    {
      name: 'Email',
      url: 'mailto:joshuashalim15@gmail.com',
      icon: 'fas fa-envelope'
    }
  ];

  private fb = inject(FormBuilder);

  constructor() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting.set(true);
      this.submitStatus.set('idle');

      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting.set(false);
        this.submitStatus.set('success');
        this.contactForm.reset();

        // Reset success message after 5 seconds
        setTimeout(() => {
          this.submitStatus.set('idle');
        }, 5000);
      }, 1500);

      // In a real application, you would send the form data to your backend
      // const formData = this.contactForm.value;
      // this.contactService.sendMessage(formData).subscribe(...);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field?.hasError('required')) {
      return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
    }
    if (field?.hasError('email')) {
      return 'Please enter a valid email address';
    }
    if (field?.hasError('minlength')) {
      const minLength = field.errors?.['minlength'].requiredLength;
      return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} must be at least ${minLength} characters`;
    }
    return '';
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field?.invalid && (field?.touched || field?.dirty));
  }
}
