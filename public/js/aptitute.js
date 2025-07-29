document.getElementById('testForm').addEventListener('submit', function (e) {
  e.preventDefault();

  let score = 0;
  const answers = {
    q1: '8',
    q2: 'Delhi',
    q3: 'Russia'
  };

  for (const key in answers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === answers[key]) {
      score++;
    }
  }

  localStorage.setItem('testScore', score);
  alert(`You scored ${score}/3`);
  window.location.href = 'test-result.html';
});
