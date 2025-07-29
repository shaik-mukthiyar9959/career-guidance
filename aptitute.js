// js/aptitude.js
document.getElementById('testForm').addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;
  
    if (document.querySelector('input[name="q1"]:checked')?.value === '8') score++;
    if (document.querySelector('input[name="q2"]:checked')?.value === 'Delhi') score++;
    if (document.querySelector('input[name="q3"]:checked')?.value === 'Large') score++;
  
    localStorage.setItem('testScore', score);
    logAction('Aptitude Test Completed', `Score: ${score}`);
    window.location.href = 'test-result.html';
  });
  