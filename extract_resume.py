from pypdf import PdfReader

try:
    reader = PdfReader("R.Nagaarunprasath_resume_1765459698650_NAGAARUN PRASATH R.pdf")
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    
    with open("resume_text.txt", "w", encoding="utf-8") as f:
        f.write(text)
    print("Success")
except Exception as e:
    print(f"Error: {e}")
