var canvas = document.getElementById("canvas"), 
                context = canvas.getContext("2d");
                 
            var img = new Image();
            /*img.src = "https://st.depositphotos.com/1757583/2169/i/450/depositphotos_21696885-stock-photo-yin-yang-symbol.jpg";
            img.onload = function() {
                 
                context.drawImage(img, 0, 0);
                var imageData = context.getImageData(0,0, img.width, img.height);
                var red, green, blue, greyscale;
                 
                for (var i = 0; i < imageData.data.length; i += 4) {
                    red = imageData.data[i]; // получаем компоненту красного цвета
                    green = imageData.data[i + 1];  // получаем компоненту зеленого цвета
                    blue = imageData.data[i + 2];   // получаем компоненту синего цвета
                    grayscale = red * 0.3 + green * 0.59 + blue * 0.11; // получаем серый фон
                    imageData.data[i] = grayscale;  // установка серого цвета
                    imageData.data[i + 1] = grayscale;
                    imageData.data[i + 2] = grayscale;
                }
                 
                context.putImageData(imageData, img.width + 10, 0);
            };*/


let input = document.getElementById('input');

input.onchange = () => { 
  img.src =  window.URL.createObjectURL(input.files[0]); img.onload = () => { 
    context.drawImage(img, 0, 0); 
    alert(context.getImageData(0,0, img.width, img.height).data[0] +';' + context.getImageData(0,0, img.width, img.height).data[1] + ';' +{context.getImageData(0,0, img.width, img.height).data[2]); 
  }
}
