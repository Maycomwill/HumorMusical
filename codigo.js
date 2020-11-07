function enviar(){
    var humor = window.document.getElementById('humor');
    var value = humor.options[humor.selectedIndex].value;
    var mudar = window.document.getElementsByName('humorrad');
    var textmusica = window.document.getElementById('textmusica');
    var musica = window.document.getElementById('musica');
    var ouvir = window.document.createElement('a');
    ouvir.setAttribute('id', "ouvir")
    ouvir.setAttribute('target','_blank')
    var feliz = ['OutKast - Hey Ya!','Lou Bega - Mambo No. 5','Elvis Presley - Jailhouse Rock'];
    var bad = ['Seether - Broken ft. Amy Lee','Coldplay - The Scientist', 'Radiohead - Creep'];
    var puto = ['Slipknot - Solway Firth','Eminem - Venom', 'Linkin Park - Numb'];
    var suave = ['Charlie Brown Jr. - O Senhor Do Tempo','The Neighbourhood - Sweater Weather', 'Arctic Monkeys - Do I Wanna Know?'];
    var inspirado = ['MC POZE NOS ANOS 80 pt. III','AC/DC - Highway to Hell','The Weeknd - Blinding Lights'];
    var magoa = ['Tierry - RITA','Priscila Senna - Cachorro Combina Com Cadela','Pablo - Desculpe Aí'];

        if (mudar[1].checked){
            if(value=='feliz'){
            randomBad = bad[Math.floor(Math.random() * bad.length)];
            textmusica.innerHTML = 'Como você quer mudar seu humor atual, ouça:'
            musica.innerHTML = `${randomBad}`
        }   else if(value=='bad'){
            randomFeliz = feliz[Math.floor(Math.random() * feliz.length)];
            textmusica.innerHTML = 'Como você quer mudar seu humor atual, ouça:'
            musica.innerHTML = `${randomFeliz}`
        }   else if(value=='puto'){
            randomSuave = suave[Math.floor(Math.random() * suave.length)];
            textmusica.innerHTML = 'Como você quer mudar seu humor atual, ouça:'
            musica.innerHTML = `${randomSuave}`
        }   else if(value=='suave'){
            randomPuto = puto[Math.floor(Math.random() * puto.length)];
            textmusica.innerHTML = 'Como você quer mudar seu humor atual, ouça:'
            musica.innerHTML = `${randomPuto}`
        }   else if(value=='inspirado'){
            randomMagoa = magoa[Math.floor(Math.random() * magoa.length)];
            textmusica.innerHTML = 'Como você quer mudar seu humor atual, ouça:'
            musica.innerHTML = `${randomMagoa}`
        }   else if(value=='magoa'){
            randomInspirado = inspirado[Math.floor(Math.random() * inspirado.length)];
            textmusica.innerHTML = 'Como você quer mudar seu humor atual, ouça:'
            musica.innerHTML = `${randomInspirado}`
        }
    }   else if (mudar[0].checked){
        if(value=='feliz'){
            randomFeliz = feliz[Math.floor(Math.random() * feliz.length)];
            textmusica.innerHTML = 'Como você não quer mudar seu humor atual, ouça:'
            musica.innerHTML = `${randomFeliz}`
    }   else if(value=='bad'){
            randomBad = bad[Math.floor(Math.random() * bad.length)];
            textmusica.innerHTML = 'Como você não quer mudar seu humor atual, ouça:'
            musica.innerHTML = `${randomBad}`
    }   else if(value=='puto'){
            randomPuto = puto[Math.floor(Math.random() * puto.length)];
            textmusica.innerHTML = 'Como você não quer mudar seu humor atual, ouça:'
            musica.innerHTML = `${randomPuto}`
    }   else if(value=='suave'){
            randomSuave = suave[Math.floor(Math.random() * suave.length)];
            textmusica.innerHTML = 'Como você não quer mudar seu humor atual, ouça:'
            musica.innerHTML = `${randomSuave}`
    }   else if(value=='inspirado'){
            randomInspirado = inspirado[Math.floor(Math.random() * inspirado.length)];
            textmusica.innerHTML = 'Como você não quer mudar seu humor atual, ouça:'
            musica.innerHTML = `${randomInspirado}`
    }   else if(value=='magoa'){
            randomMagoa = magoa[Math.floor(Math.random() * magoa.length)];
            textmusica.innerHTML = 'Como você não quer mudar seu humor atual, ouça:'
            musica.innerHTML = `${randomMagoa}`
    }
}
}
function play(){
    var link = window.document.getElementById('musica').innerText
    console.log(link);
        if (link == 'OutKast - Hey Ya!'){
            window.open('https://www.youtube.com/watch?v=PWgvGjAhvIw&ab_channel=OutkastVEVO', '_blank')

        }else if (link == 'Lou Bega - Mambo No. 5'){
            window.open('https://www.youtube.com/watch?v=EK_LN3XEcnw&ab_channel=LouBegaVEVO', '_blank')

        }else if (link == 'Elvis Presley - Jailhouse Rock'){
            window.open('https://www.youtube.com/watch?v=PpsUOOfb-vE&ab_channel=ElvisPresleyVEVO', '_blank')

        }else if (link == 'Seether - Broken ft. Amy Lee'){
            window.open('https://www.youtube.com/watch?v=hPC2Fp7IT7o&ab_channel=SeetherVEVO', '_blank')

        }else if (link == 'Coldplay - The Scientist'){
            window.open('https://www.youtube.com/watch?v=RB-RcX5DS5A&ab_channel=Coldplay', '_blank')

        }else if (link == 'Radiohead - Creep'){
            window.open('https://www.youtube.com/watch?v=MHjd47Uye8Y&ab_channel=Sheridan%27sDynamos','_blank')

        }else if (link == 'Slipknot - Solway Firth'){
            window.open('https://www.youtube.com/watch?v=V3ADK6gsDGg&ab_channel=Slipknot','_blank')

        }else if (link == 'Eminem - Venom'){
            window.open('https://www.youtube.com/watch?v=8CdcCD5V-d8&ab_channel=EminemVEVO', '_blank')

        }else if (link == 'Linkin Park - Numb'){
            window.open('https://www.youtube.com/watch?v=kXYiU_JCYtU&ab_channel=LinkinPark','_blank')

        }else if (link == 'Charlie Brown Jr. - O Senhor Do Tempo'){
            window.open('https://www.youtube.com/watch?v=SytqxaFStHY&ab_channel=CharlieBrownJr.-Topic','_blank')

        }else if (link == 'The Neighbourhood - Sweater Weather'){
            window.open('https://www.youtube.com/watch?v=GCdwKhTtNNw&ab_channel=TheNeighbourhoodVEVO', '_blank')

        }else if (link == 'Arctic Monkeys - Do I Wanna Know?'){
            window.open('https://www.youtube.com/watch?v=bpOSxM0rNPM&ab_channel=OfficialArcticMonkeys','_blank')

        }else if (link == 'MC POZE NOS ANOS 80 pt. III'){
            window.open('https://www.youtube.com/watch?v=zgezo5I3waM&ab_channel=PMM','_blank')

        }else if (link == 'AC/DC - Highway to Hell'){
            window.open('https://www.youtube.com/watch?v=ikFFVfObwss&ab_channel=AC%2FDC-Topic', '_blank')

        }else if (link == 'The Weeknd - Blinding Lights'){
            window.open('https://www.youtube.com/watch?v=fHI8X4OXluQ&ab_channel=TheWeekndVEVO','_blank')

        }else if (link == 'Tierry - RITA'){
            window.open('https://www.youtube.com/watch?v=hAWym7xiw0k&ab_channel=TierryOficial','_blank')

        }else if (link == 'Priscila Senna - Cachorro Combina Com Cadela'){
            window.open('https://www.youtube.com/watch?v=4gmbe16hPHE&ab_channel=PriscilaSenna','_blank')

        }else if (link == 'Pablo - Desculpe Aí'){
            window.open('https://www.youtube.com/watch?v=QcxZkZ9PY0c&ab_channel=SomLivre','_blank')

        }




}