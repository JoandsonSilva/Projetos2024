const tf = require('@tensorflow/tfjs');


    async function evaluate(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Carregue o modelo TensorFlow.js
        const model = await tf.loadLayersModel('path/to/your/model.json'); // Substitua 'path/to/your/model.json' pelo caminho correto para o seu modelo

        // Obtenha os dados do formulário
        const formData = new FormData(document.getElementById('evaluationForm'));

        // Extraia as respostas do formulário
        const responses = [];
        for (let i = 1; i <= 10; i++) {
            const questionId = 'question' + i;
            responses.push(formData.get(questionId));
        }

        // Faça a avaliação usando o modelo TensorFlow.js
        const tensorData = tf.tensor2d([responses]); // Converta as respostas em um tensor
        const prediction = model.predict(tensorData); // Faça uma previsão usando o modelo

        // Obtenha a classe prevista
        const predictedClass = tf.argMax(prediction, axis=-1).dataSync()[0];

        // Exiba o resultado da avaliação na página
        document.getElementById('evaluationResult').innerText = 'Resultado da Avaliação: ' + predictedClass;
    }

    document.getElementById('evaluationForm').addEventListener('submit', evaluate);



