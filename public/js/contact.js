(function() {
  const difsyForm = document.getElementById("difsy-form");
  if (difsyForm) {
    difsyForm.innerHTML = `<style>#difsy-form {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

#difsy-form * {
  box-sizing: border-box;
}

/* Success Message */
#difsy-form #success_message {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  min-height: 600px;
}

#difsy-form #success_message.show {
  display: flex;
}

#difsy-form #success_message svg {
  width: 96px;
  height: 96px;
  color: rgb(22, 163, 74);
  margin: 0 auto 24px;
}

#difsy-form #success_message h3 {
  font-size: 30px;
  font-weight: 700;
  color: rgb(31, 41, 55);
  margin-bottom: 16px;
}

#difsy-form #success_message p {
  font-size: 18px;
  color: rgb(55, 65, 81);
  margin-bottom: 8px;
}

/* Form */
#difsy-form #contactForm {
  display: block;
}

#difsy-form #contactForm.hidden {
  display: none;
}

/* Grid rows */
#difsy-form .grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-bottom: 24px;
}

@media (min-width: 768px) {
  #difsy-form .grid {
    grid-template-columns: 1fr 1fr;
  }
}

/* Two-column row layout */
#difsy-form .difsy-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-bottom: 24px;
}

#difsy-form .difsy-row-2 {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-bottom: 24px;
}

@media (min-width: 768px) {
  #difsy-form .difsy-row-2 {
    grid-template-columns: 1fr 1fr;
  }
}

/* Field containers */
#difsy-form .difsy-field {
  position: relative;
  display: flex;
  flex-direction: column;
}

/* Wrapper for input and indicator */
#difsy-form .difsy-field > div {
  position: relative;
  display: flex;
  flex-direction: column;
}

/* Field containers */
#difsy-form .relative {
  position: relative;
}

/* Labels */
#difsy-form label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: rgb(55, 65, 81);
  margin-bottom: 8px;
}

/* Flex label row for location */
#difsy-form .flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  gap: 12px;
}

#difsy-form .flex label {
  margin-bottom: 0;
}

/* Label row for location with IP display */
#difsy-form .difsy-label-row {
  display: flex !important;
  flex-direction: row !important;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
  width: 100%;
}

#difsy-form .difsy-label-row label {
  display: inline !important;
  margin-bottom: 0;
  flex: 0;
  white-space: nowrap;
}

#difsy-form .difsy-label-row .difsy-ip-display {
  flex: 1;
  text-align: right;
  display: inline-block !important;
}

/* Inputs */
#difsy-form input[type="text"],
#difsy-form input[type="email"],
#difsy-form input[type="tel"],
#difsy-form textarea {
  width: 100%;
  padding: 12px 16px;
  padding-right: 40px;
  border: 1px solid rgb(209, 213, 219);
  border-radius: 8px;
  background: white;
  color: rgb(17, 24, 39);
  font-size: 16px;
  font-family: inherit;
  transition: all 0.2s ease;
  display: block;
  appearance: none;
  position: relative;
}

#difsy-form input::placeholder,
#difsy-form textarea::placeholder {
  color: rgb(107, 114, 128);
}

#difsy-form input:focus,
#difsy-form textarea:focus {
  outline: none;
  border-color: transparent;
  box-shadow: 0 0 0 2px rgb(37, 99, 235);
}

/* Textarea specific */
#difsy-form textarea {
  resize: vertical;
  min-height: 120px;
  padding-top: 12px;
}

/* Indicators */
#difsy-form span.indicator,
#difsy-form #name_indicator,
#difsy-form #email_indicator,
#difsy-form #location_indicator,
#difsy-form #phone_indicator,
#difsy-form #comments_indicator {
  position: absolute;
  right: 12px;
  font-size: 20px;
  color: rgb(156, 163, 175);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease;
}

/* Show indicator after first input */
#difsy-form span.indicator.show,
#difsy-form #name_indicator.show,
#difsy-form #email_indicator.show,
#difsy-form #location_indicator.show,
#difsy-form #phone_indicator.show,
#difsy-form #comments_indicator.show {
  opacity: 1;
}

/* Position indicators inside input fields - centered on input height */
#difsy-form .difsy-field input ~ span {
  top: calc(50% + 4px);
  transform: translateY(-50%);
}

/* Position indicator inside textarea */
#difsy-form .difsy-field textarea ~ span {
  top: calc(50% + 4px);
  transform: none;
}

#difsy-form .valid {
  color: rgb(22, 163, 74) !important;
}

#difsy-form .invalid {
  color: rgb(220, 38, 38) !important;
}

/* Indicator styles for validation states */
#difsy-form span.indicator,
#difsy-form #name_indicator,
#difsy-form #email_indicator,
#difsy-form #location_indicator,
#difsy-form #phone_indicator,
#difsy-form #comments_indicator {
  font-size: 20px;
  color: rgb(156, 163, 175);
}

/* Status messages */
#difsy-form #email_status,
#difsy-form #phone_status {
  font-size: 12px;
  color: rgb(107, 114, 128);
  margin-top: 4px;
  min-height: 16px;
  display: block;
}

#difsy-form #email_status.error,
#difsy-form #phone_status.error {
  color: rgb(220, 38, 38);
}

#difsy-form #email_status.valid,
#difsy-form #phone_status.valid {
  color: rgb(22, 163, 74);
}

/* Label styling */
#difsy-form .difsy-label {
  font-size: 14px;
  font-weight: 600;
  color: rgb(55, 65, 81);
}

/* IP display */
#difsy-form .difsy-ip-display {
  font-size: 12px;
  color: rgb(75, 85, 99);
  display: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px;
}

#difsy-form .difsy-ip-display.show {
  display: block;
}

#difsy-form .difsy-ip-value {
  font-family: 'Courier New', monospace;
  font-weight: 600;
  color: rgb(107, 114, 128);
}

#difsy-form code {
  font-family: 'Courier New', monospace;
  font-weight: 600;
}

/* Button */
#difsy-form button {
  width: 100%;
  padding: 16px 32px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: not-allowed;
  transition: all 0.2s ease;
  background: rgb(156, 163, 175);
  color: rgb(209, 213, 219);
  margin-top: 24px;
  margin-bottom: 0;
  opacity: 0.6;
  font-family: inherit;
}

#difsy-form button:not(:disabled) {
  background: rgb(37, 99, 235);
  color: white;
  cursor: pointer;
  opacity: 1;
}

#difsy-form button:not(:disabled):hover {
  background: rgb(29, 78, 216);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

#difsy-form button:not(:disabled):active {
  background: rgb(30, 64, 175);
}

/* Disclaimer */
#difsy-form .disclaimer,
#difsy-form p {
  font-size: 14px;
  color: rgb(107, 114, 128);
  text-align: center;
  margin-top: 16px;
  margin-bottom: 0;
  line-height: 1.5;
}

/* Hide hidden inputs */
#difsy-form input[type="hidden"] {
  display: none;
}

/* Custom classes for status messages */
#difsy-form .difsy-status-default {
  font-size: 12px;
  color: rgb(107, 114, 128);
  margin-top: 4px;
  min-height: 16px;
  display: block;
}

#difsy-form .difsy-status-success {
  font-size: 12px;
  color: rgb(22, 163, 74);
  margin-top: 4px;
  min-height: 16px;
  display: block;
}

#difsy-form .difsy-status-error {
  font-size: 12px;
  color: rgb(220, 38, 38);
  margin-top: 4px;
  min-height: 16px;
  display: block;
}

#difsy-form .difsy-status-warning {
  font-size: 12px;
  color: rgb(249, 115, 22);
  margin-top: 4px;
  min-height: 16px;
  display: block;
}

/* Custom classes for submit button */
#difsy-form .difsy-btn-active {
  width: 100%;
  padding: 16px 32px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: rgb(37, 99, 235);
  color: white;
  transition: background 0.2s;
  margin-top: 24px;
  margin-bottom: 0;
}

#difsy-form .difsy-btn-active:hover {
  background: rgb(29, 78, 216);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

#difsy-form .difsy-btn-disabled {
  width: 100%;
  padding: 16px 32px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: not-allowed;
  background: #9ca3af;
  color: rgb(209, 213, 219);
  opacity: 0.6;
  margin-top: 24px;
  margin-bottom: 0;
}

#difsy-form .difsy-btn-error {
  width: 100%;
  padding: 16px 32px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: not-allowed;
  background: rgb(220, 38, 38);
  color: white;
  margin-top: 24px;
  margin-bottom: 0;
}

/* Container background for success state */
#difsy-form .difsy-container-success {
  background: white !important;
}

/* Utility classes */
#difsy-form .hidden {
  display: none;
}

#difsy-form .block {
  display: block;
}

#difsy-form .mb-6 {
  margin-bottom: 24px;
}

#difsy-form .mb-4 {
  margin-bottom: 16px;
}

#difsy-form .mb-2 {
  margin-bottom: 8px;
}

#difsy-form .mt-4 {
  margin-top: 16px;
}

@keyframes spin {
    from {
        transform: translateY(-50%) rotate(0deg);
    }
    to {
        transform: translateY(-50%) rotate(360deg);
    }
}

.spin {
    animation: spin 1s linear infinite;
}  

/* Responsive */
@media (max-width: 640px) {
  #difsy-form label {
    font-size: 14px;
  }

  #difsy-form .flex {
    flex-direction: column;
    align-items: flex-start;
  }

  #difsy-form .difsy-ip-display {
    max-width: none;
  }
}  
</style><div class="difsy-success" id="success_message">
    <svg class="difsy-success-icon" viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
    <h3 class="difsy-success-title">Message Sent Successfully!</h3>
    <p class="difsy-success-text">Thank you for contacting us.</p>
    <p class="difsy-success-text">We'll get back to you within 24 hours.</p>
</div>

<form id="contactForm" class="show">
    <input type="hidden" id="user_ip_address" name="user_ip_address" value="" />
    <input type="hidden" id="geolocation" name="geolocation" value="" />
    
    <div class="difsy-row difsy-row-2">
        <div class="difsy-field">
            <label for="name">Your Name *</label>
            <input type="text" id="name" name="name" value="Aaron" placeholder="John Doe" autocomplete="name" required />
            <span class="difsy-indicator" id="name_indicator">○</span>
        </div>

        <div class="difsy-field">
            <label for="email">Your Email *</label>
            <input type="email" id="email" name="email" value="aaronjaylev@gmail.com" placeholder="john@example.com" autocomplete="email" required />
            <span class="difsy-indicator" id="email_indicator">○</span>
            <div class="difsy-status" id="email_status"></div>
        </div>
    </div>
    
    <div class="difsy-row difsy-row-2">
        <div class="difsy-field">
            <div class="difsy-label-row">
                <label for="location" class="difsy-label">Your Location *</label>
                <div id="ip_display" class="difsy-ip-display"></div>
            </div>
            <input type="text" id="location" name="location" placeholder="City, State" autocomplete="address-level1" required />
            <span class="difsy-indicator" id="location_indicator">○</span>
        </div>

        <div class="difsy-field">
            <label for="phone">Your Mobile Phone *</label>
            <input type="tel" id="phone" name="phone" value="(561) 239-6941" placeholder="(555) 123-4567" autocomplete="tel" />
            <span class="difsy-indicator" id="phone_indicator">○</span>
            <div class="difsy-status" id="phone_status"></div>
        </div>
    </div>
    
    <div class="difsy-field">
        <label for="comments">Comments *</label>
        <textarea id="comments" name="comments" placeholder="How can we help you?" autocomplete="off" required></textarea>
        <span class="difsy-indicator" id="comments_indicator">○</span>
    </div>
    
    <button type="submit" disabled id="submitBtn">Send Message</button>
    
    <p class="difsy-disclaimer">
        By submitting this form, you agree to our Terms of Service and Privacy Policy.
    </p>
</form>`;
  }	
  const form_code = 41555582;
  let ipAddressFetched = false;
let userInteracted = false;
let phoneValidationResult = null;
let emailValidationResult = null;
let fieldFirstInput = {
    name: false,
    email: false,
    location: false,
    phone: false,
    comments: false
};
let emailDebounceTimer = null;

const loadingSpinnerSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 64 32" fill="none" aria-label="Loading" role="img" style="display:block;width:100%;height:100%">
<g fill="currentColor">
    <rect x="6"  y="14" width="8" height="12" rx="2">
    <animate attributeName="y" values="18;10;18" dur="0.9s" repeatCount="indefinite" begin="0s"/>
    <animate attributeName="height" values="8;16;8" dur="0.9s" repeatCount="indefinite" begin="0s"/>
    <animate attributeName="opacity" values="0.4;1;0.4" dur="0.9s" repeatCount="indefinite" begin="0s"/>
    </rect>
    <rect x="20" y="10" width="8" height="16" rx="2">
    <animate attributeName="y" values="18;6;18" dur="0.9s" repeatCount="indefinite" begin="0.15s"/>
    <animate attributeName="height" values="8;20;8" dur="0.9s" repeatCount="indefinite" begin="0.15s"/>
    <animate attributeName="opacity" values="0.4;1;0.4" dur="0.9s" repeatCount="indefinite" begin="0.15s"/>
    </rect>
    <rect x="34" y="6" width="8" height="20" rx="2">
    <animate attributeName="y" values="18;2;18" dur="0.9s" repeatCount="indefinite" begin="0.3s"/>
    <animate attributeName="height" values="8;24;8" dur="0.9s" repeatCount="indefinite" begin="0.3s"/>
    <animate attributeName="opacity" values="0.4;1;0.4" dur="0.9s" repeatCount="indefinite" begin="0.3s"/>
    </rect>
    <rect x="48" y="10" width="8" height="16" rx="2">
    <animate attributeName="y" values="18;6;18" dur="0.9s" repeatCount="indefinite" begin="0.45s"/>
    <animate attributeName="height" values="8;20;8" dur="0.9s" repeatCount="indefinite" begin="0.45s"/>
    <animate attributeName="opacity" values="0.4;1;0.4" dur="0.9s" repeatCount="indefinite" begin="0.45s"/>
    </rect>
</g>
</svg>`;


// Fetch and set IP address along with geolocation
async function fetchAndSetIPAddress() {
    if (ipAddressFetched) return;
    ipAddressFetched = true;

    // Call ip-lookup to get geolocation
    const locationIndicator = document.getElementById("location_indicator");
    const ipDisplay = document.getElementById("ip_display");

    try {
        // Show spinner while loading
        if (locationIndicator) {
            locationIndicator.classList.add('show')
            locationIndicator.innerHTML = loadingSpinnerSVG;
            locationIndicator.style.color = '#9ca3af';

            ipDisplay.classList.add('show');
            ipDisplay.innerHTML = 'Loading...';            
        }

        const response = await fetch('https://api.difsy.com/v1/ip-lookup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                form_code,
                source_url: window.location.href
            }),
        });

        if (response.ok) {
            const result = await response.json();
            if (result.success && result.data) {
                const ipAddress = result.data.ip_address || '';
                const locationData = result.data.location || '';
                const geolocationInput = document.getElementById("geolocation");
                const locationInput = document.getElementById("location");

                const ipInput = document.getElementById("user_ip_address");

                console.log("Aaron debug ipAddress ", ipAddress);
                console.log("Aaron debug ipDisplay ", ipDisplay);

                if (ipAddress) {
                    if (ipInput) {
                        ipInput.value = ipAddress;
                    }
                    if (ipDisplay) {
                        ipDisplay.innerHTML = "IP: " + ipAddress;
                    } else {
                        console.log("Aaron ip value not found");
                    }
                }
      
                // Set hidden geolocation field
                if (geolocationInput) {
                    geolocationInput.value = locationData;
                }

                // Set location input field if it's empty
                if (locationInput && !locationInput.value.trim() && locationData) {
                    locationInput.value = locationData;

                    // Update location indicator to show checkmark
                    if (locationIndicator) {
                        locationIndicator.innerHTML = '✓';
                        locationIndicator.style.color = 'rgb(22, 163, 74)';
                    }

                    // Trigger validation after setting location
                    validateForm(false);
                } else {
                    // Reset indicator to waiting state if location wasn't filled
                    if (locationIndicator) {
                        locationIndicator.innerHTML = '○';
                        locationIndicator.style.color = 'rgb(156, 163, 175)';
                    }
                }

                console.log('Geolocation set:', locationData);
            }
        } else {
            // Reset indicator to waiting state on error
            if (locationIndicator) {
                locationIndicator.innerHTML = '○';
                locationIndicator.style.color = 'rgb(156, 163, 175)';
            }
        }
    } catch (error) {
        console.error('Error fetching geolocation:', error);
        // Reset indicator even on error
        if (locationIndicator) {
            locationIndicator.innerHTML = '○';
            locationIndicator.style.color = 'rgb(156, 163, 175)';
        }
    }
}

// Handle form submission
async function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;

    // Disable button while submitting
    submitButton.disabled = true;
    submitButton.innerHTML = "Sending...";

    try {
        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const location = formData.get("location");
        const userIpAddress = formData.get("user_ip_address");
        const geolocation = formData.get("geolocation");
        const comments = formData.get("comments");

        // Parse name into first_name and last_name
        const nameParts = name.trim().split(' ');
        const firstName = nameParts[0];
        const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

        // Create lead object
        const lead = {
            form_code: "41555582",
            form_name: "simple_contact_v1",
            source_url: window.location.href,
            name: firstName,
            phone: phone || undefined,
            first_name: firstName,
            last_name: lastName,
            email: email,
            geolocation: geolocation,
            location: location,
            user_ip_address: userIpAddress,
            comments: comments
        };

        // Try to save to Supabase (optional - may not work without auth)
        console.log("Form data prepared:", lead);

        let formSuccess = 0;

        // Send SMS notification
        try {
            const formSubmitResponse = await fetch('https://api.difsy.com/v1/form-submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(lead)
            });

            formSuccess = !!formSubmitResponse.success;

            if (formSuccess) {
                console.log("Message sent successfully");
            } else {
                console.error("Message failed to send");
            }
        } catch (formError) {
            console.error("Error sending Form Submit:", formError);
        }

        if (formSuccess) {
            // Hide form and show success message
            difsyForm.style.display = 'none';
            const successMessage = document.getElementById("success_message");
            const container = successMessage?.parentElement;
            if (successMessage) {
                successMessage.style.display = 'flex';
            }
            if (container) {
                container.classList.add('difsy-container-success');
            }
        }
    } catch (error) {
        console.error("Error submitting form:", error);

        // Show error message
        submitButton.innerHTML = "❌ Error - Try Again";
        submitButton.className = "difsy-btn-error";

        // Reset button after 3 seconds
        setTimeout(() => {
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
            submitButton.className = "difsy-btn-active";
        }, 3000);
    }
}

// Format phone number
async function formatPhoneNumber(e) {
    const input = e.target;
    showIndicatorOnFirstInput('phone');

    const value = input.value.replace(/\D/g, '');
    const length = value.length;

    if (length === 0) {
        input.value = '';
        phoneValidationResult = null;
        updatePhoneStatus('');
    } else if (length <= 3) {
        input.value = `(${value}`;
    } else if (length <= 6) {
        input.value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
    } else {
        input.value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
    }

    // If exactly 10 digits, validate with Twilio
    if (length === 10) {
        await validatePhoneNumber(input.value);
    } else if (length < 10) {
        phoneValidationResult = null;
        updatePhoneStatus('');
    }

    validateForm(true);
}

// Validate phone number
async function validatePhoneNumber(phoneNumber) {
    const indicator = document.getElementById("phone_indicator");

    if (!indicator) return;

    // Show spinner
    indicator.innerHTML = loadingSpinnerSVG;
    indicator.style.color = '#9ca3af';

    updatePhoneStatus('Validating...');

    try {
        const response = await fetch('https://api.difsy.com/v1/verify-phone', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                form_code,
                source_url: window.location.href,
                phoneNumber
            }),
        });

        const result = await response.json();

        phoneValidationResult = {
            valid: result.valid,
            lineType: result.lineType,
        };

        // Update indicator based on result
        if (result.valid && result.lineType === 'mobile') {
            indicator.innerHTML = '✓';
            indicator.style.color = 'rgb(22, 163, 74)';
            updatePhoneStatus('✓ Valid mobile phone', 'success');
        } else if (result.lineType === 'landline') {
            indicator.innerHTML = '✗';
            indicator.style.color = 'rgb(220, 38, 38)';
            updatePhoneStatus('✗ Landline detected - Mobile phone required', 'error');
        } else if (result.lineType === 'voip') {
            indicator.innerHTML = '✗';
            indicator.style.color = 'rgb(220, 38, 38)';
            updatePhoneStatus('✗ VoIP number detected - Mobile phone required', 'error');
        } else {
            indicator.innerHTML = '✗';
            indicator.style.color = 'rgb(220, 38, 38)';
            updatePhoneStatus('✗ Invalid phone number', 'error');
        }

        validateForm(true);
    } catch (error) {
        console.error('Error validating phone:', error);
        indicator.innerHTML = '✗';
        indicator.style.color = 'rgb(249, 115, 22)';
        updatePhoneStatus('⚠ Unable to validate phone number', 'warning');
        phoneValidationResult = null;
    }
}

// Update phone status message
function updatePhoneStatus(message, type = '') {
    const statusElement = document.getElementById("phone_status");
    if (!statusElement) return;

    if (message === '') {
        statusElement.textContent = '\u00A0';
        statusElement.className = 'difsy-status-default';
    } else {
        statusElement.textContent = message;

        if (type === 'success') {
            statusElement.className = 'difsy-status-success';
        } else if (type === 'error') {
            statusElement.className = 'difsy-status-error';
        } else if (type === 'warning') {
            statusElement.className = 'difsy-status-warning';
        } else {
            statusElement.className = 'difsy-status-default';
        }
    }
}

// Get valid mobile phone
function getValidMobilePhone() {
    const phoneInput = document.getElementById("phone");
    const phoneValue = phoneInput?.value.trim() || '';
    const phoneDigits = phoneValue.replace(/\D/g, '');
    const phoneHas10Digits = phoneDigits.length === 10;
    const isValidMobilePhone = phoneHas10Digits && phoneValidationResult?.valid === true && phoneValidationResult?.lineType === 'mobile';
    return isValidMobilePhone;
}

// Validate email
async function validateEmail(email) {
    const indicator = document.getElementById("email_indicator");

    if (!indicator) return;

    // Show spinner
    indicator.innerHTML = loadingSpinnerSVG;
    indicator.style.color = '#9ca3af';
    updateEmailStatus('Validating...');

    try {
        const response = await fetch('https://api.difsy.com/v1/verify-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                form_code,
                source_url: window.location.href,
                email
            }),
        });

        const result = await response.json();
        console.log("Aaron email result = ", result);

        emailValidationResult = {
            valid: result.valid,
            result: result.result,
        };

        // Update indicator based on result
        if (result.valid && result.result === 'valid') {
            indicator.innerHTML = '✓';
            indicator.style.color = 'rgb(22, 163, 74)';
            updateEmailStatus('✓ Valid email address', 'success');
        } else if (result.result === 'invalid') {
            indicator.innerHTML = '✗';
            indicator.style.color = 'rgb(220, 38, 38)';
            updateEmailStatus('✗ Invalid email address', 'error');
        } else if (result.result === 'catch-all') {
            indicator.innerHTML = '⚠';
            indicator.style.color = 'rgb(249, 115, 22)';
            updateEmailStatus('⚠ Catch-all domain - Cannot verify', 'warning');
        } else if (result.result === 'spamtrap') {
            indicator.innerHTML = '✗';
            indicator.style.color = 'rgb(220, 38, 38)';
            updateEmailStatus('✗ Spam trap email', 'error');
        } else if (result.result === 'abuse') {
            indicator.innerHTML = '✗';
            indicator.style.color = 'rgb(220, 38, 38)';
            updateEmailStatus('✗ Abuse/complaint email', 'error');
        } else if (result.result === 'do_not_mail') {
            indicator.innerHTML = '✗';
            indicator.style.color = 'rgb(220, 38, 38)';
            updateEmailStatus('✗ Do not mail', 'error');
        } else {
            indicator.innerHTML = '✗';
            indicator.style.color = 'rgb(249, 115, 22)';
            updateEmailStatus('⚠ Unable to verify email', 'warning');
        }

        validateForm(true);
    } catch (error) {
        console.error('Error validating email:', error);
        indicator.innerHTML = '✗';
        indicator.style.color = 'rgb(249, 115, 22)';
        updateEmailStatus('⚠ Unable to validate email', 'warning');
        emailValidationResult = null;
    }
}

// Update email status message
function updateEmailStatus(message, type = '') {
    const statusElement = document.getElementById("email_status");
    if (!statusElement) return;

    if (message === '') {
        statusElement.textContent = '\u00A0';
        statusElement.className = 'difsy-status-default';
    } else {
        statusElement.textContent = message;

        if (type === 'success') {
            statusElement.className = 'difsy-status-success';
        } else if (type === 'error') {
            statusElement.className = 'difsy-status-error';
        } else if (type === 'warning') {
            statusElement.className = 'difsy-status-warning';
        } else {
            statusElement.className = 'difsy-status-default';
        }
    }
}

// Validate individual field
function validateField(fieldId) {
    const field = document.getElementById(fieldId);
    const indicator = document.getElementById(`${fieldId}_indicator`);

    if (!field || !indicator) return;

    const value = field.value.trim();
    let isValid = false;

    if (value === '') {
        if (fieldId === 'name' || fieldId === 'comments') { // required
            // Empty but required
            indicator.innerHTML = '✗';
            indicator.style.color = 'rgb(220, 38, 38)';
        } else {
            // Empty - waiting for input
            indicator.innerHTML = '○';
            indicator.style.color = 'rgb(156, 163, 175)';
        }
    } else if (fieldId === 'email') {
        // Email validation - stricter than HTML5 default
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = field.validity.valid && emailRegex.test(value);
        if (isValid) {
            // Show question mark if valid format but not yet validated
            if (!emailValidationResult || emailValidationResult.valid === false) {
                indicator.innerHTML = '?';
                indicator.style.color = 'rgb(249, 115, 22)';
            } else {
                // Show checkmark only after validation
                indicator.innerHTML = '✓';
                indicator.style.color = 'rgb(22, 163, 74)';
            }
        } else {
            indicator.innerHTML = '✗';
            indicator.style.color = 'rgb(220, 38, 38)';
        }
    } else if (fieldId === 'phone') {
        const isValidMobilePhone = getValidMobilePhone();
        if (isValidMobilePhone) {
            indicator.innerHTML = '✓';
            indicator.style.color = 'rgb(22, 163, 74)';
        } else {
            indicator.innerHTML = '✗';
            indicator.style.color = 'rgb(220, 38, 38)';
        }
    } else {
        // Text field validation (just check not empty)
        isValid = true;
        indicator.innerHTML = '✓';
        indicator.style.color = 'rgb(22, 163, 74)';
    }

    return isValid;
}

// Validate form
function validateForm(markInteraction = false) {
    // Mark that user has interacted with form
    if (markInteraction && !userInteracted) {
        userInteracted = true;
    }

    // Update visual indicators for all fields
    validateField('name');
    validateField('email');
    validateField('phone');
    validateField('location');
    validateField('comments');

    const submitButton = document.querySelector('button[type="submit"]');

    if (!submitButton) return;

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const locationInput = document.getElementById("location");
    const commentsInput = document.getElementById("comments");

    // Email validation
    const emailValue = emailInput?.value.trim() || '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailIsValid = emailInput?.validity.valid && emailRegex.test(emailValue);

    const isValidMobilePhone = getValidMobilePhone();

    const isValid = nameInput?.value.trim() !== '' &&
        emailValue !== '' &&
        emailIsValid &&
        isValidMobilePhone &&
        locationInput?.value.trim() !== '' &&
        commentsInput?.value.trim() !== '';

    submitButton.disabled = !isValid;

    if (isValid) {
        submitButton.className = "difsy-btn-active";
        submitButton.innerHTML = "Send Message";
    } else {
        submitButton.className = "difsy-btn-disabled";

        // Show specific error message after user has interacted
        if (userInteracted) {
            if (!nameInput?.value.trim()) {
                submitButton.innerHTML = "Your Name is required";
            } else if (!emailInput?.value.trim()) {
                submitButton.innerHTML = "Your Email is required";
            } else if (!emailInput?.validity.valid) {
                submitButton.innerHTML = "Email is not valid";
            } else if (!isValidMobilePhone) {
                submitButton.innerHTML = "Valid mobile phone required";
            } else if (!locationInput?.value.trim()) {
                submitButton.innerHTML = "Your Location is required";
            } else if (!commentsInput?.value.trim()) {
                submitButton.innerHTML = "Comments are required";
            } else {
                submitButton.innerHTML = "Send Message";
            }
        } else {
            submitButton.innerHTML = "Send Message";
        }
    }
}

// Show indicator when field receives input
function showIndicatorOnFirstInput(fieldId) {
    if (!fieldFirstInput[fieldId]) {
        fieldFirstInput[fieldId] = true;
        const indicator = document.getElementById(`${fieldId}_indicator`);
        if (indicator) {
            indicator.classList.add('show');
        }
    }
}

// Handle generic input
function handleInput(event) {
    const fieldId = event.target.id;
    if (fieldId) {
        showIndicatorOnFirstInput(fieldId);
    }
    validateForm(true);
}

// Handle email input
function handleEmailInput() {
    showIndicatorOnFirstInput('email');

    // Clear any existing debounce timer
    if (emailDebounceTimer) {
        clearTimeout(emailDebounceTimer);
    }

    // Reset email validation result when user types
    emailValidationResult = null;
    updateEmailStatus('');
    validateForm(true);

    // Set up debounce timer - validate after 0.5 seconds of inactivity
    emailDebounceTimer = setTimeout(async () => {
        const emailInput = document.getElementById("email");
        if (!emailInput) return;

        const email = emailInput.value.trim();

        // Only validate if email has valid format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email && emailRegex.test(email) && !emailValidationResult) {
            await validateEmail(email);
        }
    }, 500);
}

// Handle email blur
async function handleEmailBlur(e) {
    const input = e.target;
    const email = input.value.trim();

    // Clear debounce timer if still pending
    if (emailDebounceTimer) {
        clearTimeout(emailDebounceTimer);
        emailDebounceTimer = null;
    }

    // Only validate if email has valid format and hasn't been validated yet
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && emailRegex.test(email) && !emailValidationResult) {
        await validateEmail(email);
    }
}

// Initialize form
if (difsyForm) {
    difsyForm.addEventListener("submit", handleSubmit);

    // Add phone formatting to phone field
    const phoneInput = document.getElementById("phone");
    if (phoneInput) {
        phoneInput.addEventListener('input', formatPhoneNumber);
    }

    // Add validation to required fields
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const locationInput = document.getElementById("location");
    const commentsInput = document.getElementById("comments");

    if (nameInput) {
        nameInput.addEventListener('input', handleInput);
    }
    if (emailInput) {
        emailInput.addEventListener('input', handleEmailInput);
        emailInput.addEventListener('blur', handleEmailBlur);
    }
    if (locationInput) {
        locationInput.addEventListener('input', handleInput);
    }
    if (commentsInput) {
        commentsInput.addEventListener('input', handleInput);
    }

    // Set initial button state (disabled)
    validateForm(false);

    // Add event listeners to all form inputs to fetch IP on first interaction
    const formInputs = difsyForm.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', fetchAndSetIPAddress);
        input.addEventListener('click', fetchAndSetIPAddress);
    });
}	
})()