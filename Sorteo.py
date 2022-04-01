import random
bombo_1 = ["Qatar", "Belgica", "Brasil", "Francia", "Argentina", "Inglaterra", "España", "Portugal"]
bombo_2 = ["Dinamarca", "Paises Bajos", "Alemania", "Mexico", "USA", "Suiza", "Croacia", "Uruguay"]
bombo_3 = ["Senegal", "Iran", "Japon", "Marruecos", "Serbia", "Polonia", "Corea del sur", "Tunez"]
bombo_4 = ["Arabia Saudi", "Ecuador", "Ghana", "Camerun", "Canada", "Australia", "Emiratos Arabes", "Peru", "NZ", "Costa Rica", "Ucrania", "Escocia", "Gales"]

'''def equipos(x, n, n2, e, e2, bombo):
    if x[n] == e and x[n2] == e2:
        x[n2] = random.choice(bombo)
        print("Se repitio", e2)'''

#definicion de equipo para grupo
def bombo_a_eleg(b1, b2, b3, b4): #, eq_selec1, eq_selec2, bx
    random.shuffle(b1)
    random.shuffle(b2)
    random.shuffle(b3)
    random.shuffle(b4)
    equipo_selec1 = b1.pop()
    equipo_selec2 = b2.pop()
    equipo_selec3 = b3.pop()
    equipo_selec4 = b4.pop()
    #print(equipo_selec1, equipo_selec2, equipo_selec3, equipo_selec4)
    '''if eq_selec1 == e1 and eq_selec2 = e2:
        eq_selec2.add(e2)
        equipo_selec2 = bx.pop() '''
    return equipo_selec1, equipo_selec2, equipo_selec3, equipo_selec4
#for i in range (8):
#    bombo_a_eleg(bombo_1, bombo_2, bombo_3, bombo_4)
    
grupo = {
    "B" : bombo_a_eleg(bombo_1, bombo_2, bombo_3, bombo_4),
    "C" : bombo_a_eleg(bombo_1, bombo_2, bombo_3, bombo_4),
    "A" : bombo_a_eleg(bombo_1, bombo_2, bombo_3, bombo_4),
    "D" : bombo_a_eleg(bombo_1, bombo_2, bombo_3, bombo_4),
    "E" : bombo_a_eleg(bombo_1, bombo_2, bombo_3, bombo_4),
    "F" : bombo_a_eleg(bombo_1, bombo_2, bombo_3, bombo_4),
    "G" : bombo_a_eleg(bombo_1, bombo_2, bombo_3, bombo_4),
    "H" : bombo_a_eleg(bombo_1, bombo_2, bombo_3, bombo_4),
}
'''grupos = {

    "A" : [random.choice(bombo_1), random.choice(bombo_2), random.choice(bombo_3), random.choice(bombo_4)],
    "B" : [random.choice(bombo_1), random.choice(bombo_2), random.choice(bombo_3), random.choice(bombo_4)],
    "C" : [random.choice(bombo_1), random.choice(bombo_2), random.choice(bombo_3), random.choice(bombo_4)],
    "D" : [random.choice(bombo_1), random.choice(bombo_2), random.choice(bombo_3), random.choice(bombo_4)],
    "E" : [random.choice(bombo_1), random.choice(bombo_2), random.choice(bombo_3), random.choice(bombo_4)],
    "F" : [random.choice(bombo_1), random.choice(bombo_2), random.choice(bombo_3), random.choice(bombo_4)],
    "G" : [random.choice(bombo_1), random.choice(bombo_2), random.choice(bombo_3), random.choice(bombo_4)],
    "H" : [random.choice(bombo_1), random.choice(bombo_2), random.choice(bombo_3), random.choice(bombo_4)],
}'''

for key in grupo:
    print(key, "=", grupo[key])
