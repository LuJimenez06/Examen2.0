// Esta función muestra el contenido del examen
export function verExamen() {
    document.getElementById('exam-preview').style.display = 'block';
    document.getElementById('results-container').style.display = 'none';
}

// Función para imprimir el examen
export function imprimirExamen() {
    alert('Funcionalidad de impresión en desarrollo...');
    // Aquí puedes implementar la lógica para generar un PDF del examen
}

// Función para calificar el examen
export function calificarExamen() {
    alert('Funcionalidad de calificación en desarrollo...');
    // Aquí puedes implementar la lógica para calificar los exámenes
}

// Función para ver resultados
export function verResultados() {
    document.getElementById('results-container').style.display = 'block';
    document.getElementById('exam-preview').style.display = 'none';
    cargarResultados(); // Llamar a la función para cargar los resultados
}

// Función para cargar resultados en un gráfico
function cargarResultados() {
    const ctx = document.getElementById('resultsChart').getContext('2d');
    const resultsChart = new Chart(ctx, {
        type: 'bar', // Tipo de gráfico
        data: {
            labels: ['Estudiante 1', 'Estudiante 2', 'Estudiante 3'], // Nombres de los estudiantes
            datasets: [{
                label: 'Calificaciones',
                data: [85, 90, 78], // Calificaciones de los estudiantes
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
