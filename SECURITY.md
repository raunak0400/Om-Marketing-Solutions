# Security Policy

## Supported Versions

We release patches for security vulnerabilities for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of OM Marketing Solutions website seriously. If you believe you have found a security vulnerability, please report it to us as described below.

### Where to Report

**Please DO NOT report security vulnerabilities through public GitHub issues.**

Instead, please report them via email to:

**security@ommarketing.com**

### What to Include

Please include the following information in your report:

- **Type of issue** (e.g., SQL injection, XSS, authentication bypass, etc.)
- **Full paths** of source file(s) related to the issue
- **Location** of the affected source code (tag/branch/commit or direct URL)
- **Step-by-step instructions** to reproduce the issue
- **Proof-of-concept or exploit code** (if possible)
- **Impact** of the issue, including how an attacker might exploit it

### What to Expect

- **Initial Response**: We will acknowledge your email within 48 hours
- **Updates**: We will send you regular updates about our progress
- **Timeline**: We aim to provide a resolution within 90 days
- **Credit**: We will credit you in our security advisory (unless you prefer to remain anonymous)

## Security Best Practices for Developers

If you're contributing to this project, please follow these security best practices:

### Code Security

1. **Input Validation**: Always validate and sanitize user inputs
2. **XSS Prevention**: Use React's built-in XSS protection, avoid `dangerouslySetInnerHTML`
3. **Authentication**: Implement proper authentication and authorization
4. **Secrets**: Never commit sensitive data (API keys, passwords) to the repository
5. **Dependencies**: Regularly update dependencies to patch known vulnerabilities

### Environment Variables

- Store sensitive configuration in environment variables
- Use `.env.local` for local development (never commit this file)
- Use `.env.example` as a template (safe to commit)

### Running Security Checks

```bash
# Check for vulnerable dependencies
npm audit

# Fix automatically if possible
npm audit fix

# Check for outdated packages
npm outdated
```

## Security Features Implemented

### Content Security

- ✅ **XSS Protection**: React's built-in escaping
- ✅ **CSRF Protection**: SameSite cookies
- ✅ **Input Validation**: Zod schema validation on all forms
- ✅ **Secure Headers**: Next.js security headers configured

### Data Protection

- ✅ **No Sensitive Data in URLs**: All form data sent via POST
- ✅ **Client-Side Validation**: Immediate feedback with React Hook Form
- ✅ **Server-Side Validation**: Always validate on the server (when backend is added)

### Infrastructure

- ✅ **HTTPS Only**: All production deployments use HTTPS
- ✅ **Dependency Scanning**: Regular updates via Dependabot
- ✅ **Environment Separation**: Development, staging, and production environments

## Vulnerability Disclosure Policy

We follow a coordinated disclosure policy:

1. **Private Disclosure**: Report security issues privately
2. **Investigation**: We investigate and develop a fix
3. **Patch Release**: We release a patched version
4. **Public Disclosure**: After patch is released, we publish a security advisory

## Compliance

This project adheres to:

- **OWASP Top 10**: Protection against common web vulnerabilities
- **GDPR**: Privacy-focused data handling (when collecting user data)
- **Web Security Best Practices**: Following industry standards

## Security Updates

Subscribe to security updates:

- Watch this repository for security advisories
- Follow our [Security Advisories](https://github.com/yourusername/om-marketing-solutions/security/advisories)

## Additional Resources

- [OWASP Top Ten](https://owasp.org/www-project-top-ten/)
- [Next.js Security Best Practices](https://nextjs.org/docs/app/building-your-application/configuring/security)
- [React Security Best Practices](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml)

## Contact

For general security questions (not vulnerabilities), please contact:

**Email**: security@ommarketing.com  
**Website**: https://www.ommarketing.co.in/

---

**Last Updated**: January 2026
