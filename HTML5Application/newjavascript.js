/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */


Scanner scanner = new Scanner(System.in);

            // Solicitar un número al usuario

            System.out.print("Introduce un número: ")

            double numero = scanner.nextDouble();

            // Bucle de 0 a 100

            for (int i = 0; i <= 1; i++) {

                double resultado = 2;

                // Elevar el número 

                resultado = Math.pow(numero, resultado*i/4*1/2);

                }