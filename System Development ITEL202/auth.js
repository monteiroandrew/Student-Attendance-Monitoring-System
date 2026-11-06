let currentAuthMode = 'signin';
let currentRole = 'student';

function handleLogin(e) {
  e.preventDefault();
  const emailInput = document.querySelector('input[type="email"]').value.trim();

  if (emailInput) {
    localStorage.setItem('currentUser', emailInput);
    localStorage.setItem('currentUserRole', currentRole);
    window.location.href = currentRole === 'teacher'
      ? '/teacher.html?from=signin'
      : '/studentDb.html?from=signin';
  }
}

function switchAuthTab(mode) {
  currentAuthMode = mode;

  const tabSignin = document.getElementById('tab-signin');
  const tabSignup = document.getElementById('tab-signup');
  const heading = document.getElementById('form-heading');
  const subheading = document.getElementById('form-subheading');
  const fullnameGroup = document.getElementById('fullname-group');
  const signinOptions = document.getElementById('signin-options');
  const submitBtn = document.getElementById('submit-btn');
  const formFooter = document.getElementById('form-footer');
  const passwordInput = document.getElementById('password-input');

  if (mode === 'signin') {
    tabSignin.classList.add('active');
    tabSignup.classList.remove('active');
    heading.innerText = 'Sign in to continue';
    subheading.innerText = 'Access your attendance dashboard and class records.';
    fullnameGroup.classList.add('hidden');
    signinOptions.classList.remove('hidden');
    submitBtn.querySelector('span').innerText = 'Sign in to Attendify';
    passwordInput.placeholder = 'Enter your password';
    formFooter.innerHTML = 'Don\'t have an account? <a href="#" onclick="switchAuthTab(\'signup\'); return false;">Create account</a>';
  } else {
    tabSignup.classList.add('active');
    tabSignin.classList.remove('active');
    heading.innerText = 'Create your account';
    subheading.innerText = 'Join your school community in just a few steps.';
    fullnameGroup.classList.remove('hidden');
    signinOptions.classList.add('hidden');
    submitBtn.querySelector('span').innerText = 'Create my account';
    passwordInput.placeholder = 'At least 6 characters';
    formFooter.innerHTML = 'Already have an account? <a href="#" onclick="switchAuthTab(\'signin\'); return false;">Sign in</a>';
  }
}

function selectRole(role) {
  currentRole = role;
  const studentBtn = document.getElementById('role-student');
  const teacherBtn = document.getElementById('role-teacher');
  const emailLabel = document.getElementById('email-label');

  if (role === 'student') {
    studentBtn.classList.add('active');
    teacherBtn.classList.remove('active');
    emailLabel.innerText = 'Student email';
  } else {
    teacherBtn.classList.add('active');
    studentBtn.classList.remove('active');
    emailLabel.innerText = 'Teacher email';
  }
}

function togglePasswordVisibility() {
  const passwordInput = document.getElementById('password-input');
  const eyeIcon = document.querySelector('.toggle-password');
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeIcon.classList.remove('fa-eye');
    eyeIcon.classList.add('fa-eye-slash');
  } else {
    passwordInput.type = 'password';
    eyeIcon.classList.remove('fa-eye-slash');
    eyeIcon.classList.add('fa-eye');
  }
}
