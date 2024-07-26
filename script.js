document.getElementById('spinButton').addEventListener('click', function() {
    const wheel = document.getElementById('wheel');
    const segments = document.querySelectorAll('.segment');
    const resultImage = document.getElementById('resultImage');
    const resultName = document.getElementById('resultName');
    const resultDiv = document.getElementById('result');
    const resetButton = document.getElementById('resetButton');
    
    const segmentCount = segments.length;
    const randomDegree = Math.floor(Math.random() * 360);
    const spinDegree = 3600 + randomDegree; // Spin multiple times plus random degree
    
    wheel.style.transform = `rotate(${spinDegree}deg)`;

    // Hide the result div and reset button initially
    resultDiv.classList.add('hidden');
    resetButton.classList.add('hidden');
    
    // Wait for the animation to complete (5 seconds)
    setTimeout(() => {
        // Find the segment that is now at the top
        const segmentDegree = 360 / segmentCount;
        const rotatedDegree = spinDegree % 360;
        const index = Math.floor((rotatedDegree + (segmentDegree / 2)) / segmentDegree) % segmentCount;
        
        const selectedSegment = segments[index];
        resultImage.src = selectedSegment.dataset.image;
        resultName.textContent = selectedSegment.dataset.name;

        // Show the result and reset button
        resultDiv.classList.remove('hidden');
        resetButton.classList.remove('hidden');
    }, 5000); // Must match the duration of the CSS transition
});

document.getElementById('resetButton').addEventListener('click', function() {
    // Reset the wheel's rotation
    const wheel = document.getElementById('wheel');
    wheel.style.transform = 'rotate(0deg)';
    
    // Hide the result and reset button
    document.getElementById('result').classList.add('hidden');
    document.getElementById('resetButton').classList.add('hidden');
});
