/**
 * Calcular el área y el volumen de la esfera cuyo radio se pide al usuario.
 */

function calcular() {
    const radio = parseFloat(document.getElementById('radio').value);

    if (!radio || radio <= 0) {
        document.getElementById('resultado').textContent = 'Por favor, ingresa un radio válido.';
        return;
    }

    const area = 4 * Math.PI * radio ** 2;
    const volumen = (4 / 3) * Math.PI * radio ** 3;

    document.getElementById('resultado').textContent = `El área es = ${area.toFixed(2)} y el volumen es = ${volumen.toFixed(2)}`;
}
