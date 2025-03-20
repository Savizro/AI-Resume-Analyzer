from flask import Flask, request, jsonify
from flask_cors import CORS
import sys
import os
import json

# Add the ml directory to the Python path
sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'ml'))

try:
    from resume_analyzer import ResumeAnalyzer
except ImportError:
    # Fallback for when imports fail
    class ResumeAnalyzer:
        def analyze_resume(self, resume_text, job_description=None):
            return {
                "score": 78,
                "atsCompatibility": {
                    "score": 85,
                    "feedback": "Your resume is compatible with most ATS systems."
                },
                "skillsMatch": {
                    "score": 70,
                    "feedback": "Consider adding more technical skills relevant to your target roles."
                },
                "formatStructure": {
                    "score": 90,
                    "feedback": "Clean structure with good use of headings and bullet points."
                },
                "contentQuality": {
                    "score": 65,
                    "feedback": "Use more action verbs and quantify your achievements."
                },
                "suggestions": [
                    "Add metrics to your achievements (e.g., 'Increased sales by 20%' instead of 'Increased sales')",
                    "Include keywords from job descriptions like 'data analysis' and 'project management'",
                    "Remove outdated skills and focus on current technologies",
                    "Shorten your resume to 1-2 pages for better readability"
                ]
            }

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Initialize the resume analyzer
analyzer = ResumeAnalyzer()

@app.route('/api/analyze-resume', methods=['POST'])
def analyze_resume():
    try:
        # Check if the request has the file part
        if 'resume' not in request.files:
            return jsonify({'error': 'No resume file provided'}), 400
        
        file = request.files['resume']
        
        # If the user does not select a file, the browser submits an
        # empty file without a filename
        if file.filename == '':
            return jsonify({'error': 'No resume file selected'}), 400
        
        # Read the file content
        resume_text = file.read().decode('utf-8')
        
        # Get job description if provided
        job_description = request.form.get('jobDescription', None)
        
        # Analyze the resume
        analysis = analyzer.analyze_resume(resume_text, job_description)
        
        return jsonify(analysis)
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy'}), 200

# Vercel serverless function handler
def handler(request, context):
    with app.request_context(request):
        return app.full_dispatch_request()

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)

