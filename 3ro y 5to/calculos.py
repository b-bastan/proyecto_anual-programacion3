import math
# import matplotlib.pyplot as plt

print ("CALCULADORA FÍSICA PARA TIROS")
TipoTiro = int(input(
    '''¿Qué tipo de tiro va a querer calcular?
     1. TIRO VERTICAL
     2. CAÍDA LIBRE
     3. TIRO OBLICUO
     4. TIRO HORIZONTAL
     Seleccione un número del 1 al 4: '''))

print ("*La gravedad en todos los casos será de 9,8 m/s2*") 
GRAVEDAD = (-9.8)   

if TipoTiro == 1:
    def pedirdatosV():
        global velinicialV, graficarV, altinicialV
        velinicialV = float(input("Ingrese la velocidad inicial del objeto (m/s): "))
        altinicialV = float(input("Ingrese la altura inicial (m): "))

    pedirdatosV()
    def calculosV():
        global tiempomaxV, alturamaxV
        tiempomaxV = velinicialV / (-GRAVEDAD)
        alturamaxV = altinicialV + velinicialV * tiempomaxV + 1/2 * GRAVEDAD * tiempomaxV**2
    calculosV()

    if input("Desea graficar? s/n: ").lower() == "s":
        print ("La altura máxima fué de: ", round(alturamaxV, 2), "m \nEl tiempo que tardó el objeto en llegar a la altura máxima fué de: ", round(tiempomaxV, 2), "s")
        tv = int(tiempomaxV)*2
        hv = lambda tiempo : velinicialV * tiempo + ((1/2)* GRAVEDAD) * tiempo **2
        x, y = [], []
        for i in range(tv + 1):
            x.append(i)
            y.append(hv(i))

        x.append(tiempomaxV*2)
        y.append(0)
        plt.xlabel("Tiempo (s)")
        plt.ylabel("Altura (m)")
        plt.plot(x, y)
        plt.grid()
        plt.title("ALTURA RESPECTO AL TIEMPO TIRO VERTICAL")
        plt.show()
    else:
        print ("La altura máxima fué de: ", round(alturamaxV, 2), "m \nEl tiempo que tardó el objeto en llegar a la altura máxima fué de: ", round(tiempomaxV, 2), "s")


elif TipoTiro == 2:
    def pedirdatosL():
        global alturaL, velinicialL
        alturaL = float(input("Ingrese la altura de la que cae el objeto (m): "))
        velinicialL = float(input("Ingrese la velocidad inicial del objeto (m/s): "))

    pedirdatosL()
    def calculosL():
        global tiempoL, velfinalL
        tiempoL = (-velinicialL - ((velinicialL)**2 - 4 * (-4.9) * alturaL)**(1/2))/(2 * (-4.9))
        velfinalL = velinicialL + GRAVEDAD + tiempoL
    
    calculosL()
    print ("El tiempo que tardó el objeto en caer fué de: ", round(tiempoL, 2), "s \nLa velocidad máxima que alcanzó fué de: ", round(velfinalL, 2), "m/s")


elif TipoTiro == 3:
    def pedirdatosO():
        global velinicialO , anguloO
        velinicialO = float(input("Ingrese la velocidad inicial del objeto (m/s): "))
        anguloO = float(input("Ingrese el ángulo de la rampa: "))

    pedirdatosO()
    def calculosO():
        global velxO, velyO, tiempomaxO, tiempototO, distanciaxO, alturamaxyO
        velxO = velinicialO * math.cos(math.radians(anguloO))
        velyO = velinicialO * math.sin(math.radians(anguloO))
        tiempomaxO = velyO / (-GRAVEDAD)
        tiempototO = tiempomaxO * 2
        distanciaxO = velxO * tiempototO
        alturamaxyO = velyO * tiempomaxO + (1/2) * (GRAVEDAD) * tiempomaxO** 2

        # let velX = speed * Math.cos(Math.radians(heightOrAngle));
        # let velY = speed * Math.sin(Math.radians(heightOrAngle));
        # let tiempoMax = velY / 9.8;
        # let tiempoTot = tiempoMax * 2;
        # distanciaX = velX * tiempoTot;
        # altMax = velY * tiempoMax + (1/2) * (-9.8) * tiempoMax**2

    calculosO()
    if input("Desea graficar? s/n: ").lower() == "s":
        print ("El tiempo que tarda el objeto en llegar a la altura máx es de: ", round(tiempomaxO, 2), "s \nEl tiempo que tarda el objeto en caer es de: ", round(tiempototO, 2), "s")
        print ("La distancia recorrida por el objeto fué de: ", round(distanciaxO, 2), "m \nLa altura máxima alcanzada por el objeto fué de: ", round(alturamaxyO, 2), "m")
        to = int(tiempomaxO)*2
        ho = lambda tiempoO : velyO * tiempoO + (1/2) * (GRAVEDAD) * tiempoO** 2
        x, y = [], []
        for i in range(to + 1):
            x.append(i)
            y.append(ho(i))

        x.append(tiempomaxO*2)
        y.append(0)
        plt.xlabel("Tiempo (s)")
        plt.ylabel("Altura (m)")
        plt.plot(x, y)
        plt.grid()
        plt.title("ALTURA RESPECTO AL TIEMPO TIRO OBLICUO")
        plt.show()
    else:
        print ("El tiempo que tarda el objeto en llegar a la altura máx es de: ", round(tiempomaxO, 2), "s \nEl tiempo que tarda el objeto en caer es de: ", round(tiempototO, 2), "s")
        print ("La distancia recorrida por el objeto fué de: ", round(distanciaxO, 2), "m \nLa altura máxima alcanzada por el objeto fué de: ", round(alturamaxyO, 2), "m")

elif TipoTiro == 4:
    def pedirdatosH():
        global velinicialxH, alturainicialH
        velinicialxH = float(input("Ingrese la velocidad inicial del objeto (m/s): "))
        alturainicialH = float(input("Ingrese la altura desde la que se lanza el objeto (m): "))

    pedirdatosH()
    def calculosH():
        global tiempocaidaH, distanciaxH
        tiempocaidaH = (alturainicialH / 4.9)**(1/2)
        distanciaxH = velinicialxH * tiempocaidaH

    calculosH()
    print ("El tiempo que tardó el objeto en caer fué de: ", round(tiempocaidaH, 2), "s \nLa distancia recorrida por el objeto fué de: ", round(distanciaxH, 2), "m")

input("Hola")