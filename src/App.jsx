export default function App() {
  return(
    <div className="bg-black min-h-screen w-full  text-white  justify-center">



    <div className=" m-auto bg-black h-24 w-250 sticky top-0 flex mt-2 justify-between rounded-4xl p-4  shadow-red-900 shadow-lg">

     <div className="p-4">
      <img className="w-auto h-12" src="https://item7go.com/assets/img/item7_navbar_logo-DKP1Difx.png" alt="item7 logo" />
     </div>

     <div className=" border p-3 border-white rounded-3xl flex items-center gap-2">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJSSURBVHgB5VZdchJBEO4eZklVfOEGbkqxfAnCCYQTiCeQKiv4SG6AnMA8WqgV9gTmBuEGuyRvouXmBrHKJ3aZtoe4u+wvC8QX81VROz3TPd90T/c0AP8rcBtl0+7VDMMwyaMaGnjreZ7rtia3Ze03kmmCqqwOCKELBM2MHRwkuFj4C4uJ3Z3Jnl33hwR0ymo1KAHe7P234/GoYD2NVbik8ZWX27At2FPPW7zO8hIziYyqzSEzYVcguEzYSt6nSOoZxsGHvYg02J7v+Tx9hjXUr056gHgO9wTyVed76/M0kOOeIQ4yjRSM5sdjrPjiiKXyqS5xGJODQd0+aYJEO8tIE4V6s/6Ej/gGSmLdu9AzEtSGfwEhwtqMwigqL/P0dYaGQgVy9bKAiC9SZByn3MKVIFene3L1trttphIqM0VWaCCxq78/Gl8u+OPAjojIFN3kK+GAQ2nqsecvOuydxSlqeZyd+keg9JybaUvwKxjLYMAGDoLIzTJ+VS6ZsPP3Geollt2ns76FCMOknSKcRoeORsXh4bvShKvCzwBW8HHmvKJpOF5fqF+/u+Rd27AJ/PZxW3GUgllIRNSD9AHdeWN8FIgyvrYccSjbsAnsJXFFoIDunUx5irF2UyobdwLiZN74NCkgqwzgPkC6xWCqiYZ39pxTeymrP2F/OFwO3Dw/usmF0LOlcTCEPcE3N/L8w04WkUZUZwS10E3ONpYdArwRpByFoimIXvG8mdrhTtfy/cMzt3VW2H7iqc9txoNHbp6RaZ/WpPy9eifR579yBboPC38Aez/jhEcSw6wAAAAASUVORK5CYII=" alt="whatsapp icon" />
      <h1 className="text-xl font-bold ">Contact us on Whatsapp</h1>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAGBJREFUSA3tkMENQBEQBZWgBCXovxklKGF+HFwQsfud5O1FbJhJJgSNCqjAVADIQMU3eQKOCyACxcFvf9LIW97bQ6PkHN6NBokdbpD44QeS//CN5B58IbkP7xKdKvBogQ/E6UcIMz+ejwAAAABJRU5ErkJggg=="/>
     </div>

    </div>


{/* 
// Hero section */}

    <div className="flex justify-center p-14 flex-col items-center gap-4">

      <div className="flex justify-center items-center gap-1">
        <h1 className="text-5xl font-bold ">Your </h1>
      <img className="w-auto h-13 " src="https://item7go.com/assets/img/item7_navbar_logo-DKP1Difx.png" alt="" />
      </div>

    <div className=" flex justify-center items-center text-center gap-4 w-94 flex-col">
      <h1 className="text-5xl font-bold ">Ready on Arrival</h1>
      <p className="text-lg ">Feel the Item7GO experience without the wait. 
Order through our mobile app today!</p>
    </div>


    <div className="flex gap-4 pt-4">
      <div className="flex gap-2 rounded-4xl bg-white px-8 py-4">
        <img className="w-auto h-7" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAA6CAYAAAAZW7HfAAAAAXNSR0IArs4c6QAAAotJREFUaAXtmQ1NBDEQhUcCDkACEpCAA3AADsABOAAHSEACEpCABMiX7CRLr9PObtu7KWGSS+/Y7fS9+W2LSAy5EpEHEXkXka8YkPwoAA/w7+Tj13DiN58S4EpkCk+cGdZXEngmvLwZHlASz9EZkLwK1hovI5O4cBAIH0ovDhIQDSseLzyGRb8Au694IXwYwaNUkSBA2Q0vH4YnwpfTtWU/ExJYny1HCCFhPaFAOPHB8hZ4dPGMz7BeAdhbEaFUppblNyB57i2TvEfC4xX2S7nmRxiyx2omBXg6rbVQbnEllIYLuhR4bl7pb5D1GujXujcbwacgIA4hrAmI9Pme3xjULZ59zh4QPeZgmGouRiagRiA3Tbnr5HZdbOSYrXQkzpYEHgmwpJtqmCWAazw7zZLyYzyDgFmleHAMEC1rFAnM4gUzhDTDYdlipdFzi9UIEjAcDaJVv5kH6gVOVa2LjJxPt68KHXAkiFbd7LeqYh1aWhfvNb+a0DCM3uDOq24IHkp4859Er5hu1eM62UXPCVd1it6t/0SfIFKqJzmuUlrjdvT86l0tVy2jQbTqxxvF/dMMZwmMUM2N6BVKPcn1jymvE4RUlcgMZwolwZg9qlLCZgmpNZmDE98MpXZNgO8HJGYLKUhkzxq9Ln5Ti434TV5kZSZv0KRNmcEbpheUFR08eqUqekGJRL7GqXpBSdA3eHlEQrbqLG4ElYCOHAujhdWu/31zNGy1XK/57jBSL6zHCJ0cApvCaE1Av5+y7BLSrhsPBWuNJPrW604WZw77G+57McTWHOtGQIlBpHbuYFHCL7unWRRhVUp4rfp1CSEFn440mrVVWQxLUwQgukWuF8PgMQyALnS77ppY6AdHEulJCo9BQAAAAABJRU5ErkJggg==" alt="" />

        <h1 className="text-lg text-black font-semibold ">App Store</h1>
      </div>


<div className="flex gap-2 rounded-4xl bg-white px-8 py-4">
        <img className="w-auto h-7" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAA2CAYAAABumXGkAAAAAXNSR0IArs4c6QAAAzFJREFUaAXN2c+K00AYAPBC4sWD9BF8Ai3upHiMTUFFyoaGRRQEH8CDPoBsPYjXfYMiom0V6VF2u0seYMGexIsQ8NI/KrkI0j8wMmmnpN1kMjP5vm4XurNk2uX75fvmyyQtFGI/paZbJJ36IWl7Pml7NHp1vP6tVv1p7G27+2ep5V632vVgFTxHLEer7QU7jxEB1mAdr8vAO5cOdobXAt3IQtLcXttr7hSm/O5ZPynQrGM7VWJ33oxp+e2LxUKWyMImjmGs927pUkus8vovzQthsEstMYaAgkRZ6tQPt54VjoCEbH29xBGQkOXa8bfSxTYRCBD89ZKEwICgllgaAgPCSoxhSMu1QRe/CIEFAW/JWQhMCFhLlkFgQ9yP94LpiaG/5ZdFYEFqn+7Tn8fX6OzUZC//35eC+i5ZBQEN2QBwCJ2fGU0ljCoCCpIGWGaEzk8N+RLTQeSFZAE4hI0MMzk2XGFL1kXoQlQAaxhRieVBqEJ0AXHM7My8uEvOi5CFgAAWHSwqsbWFD4HIgkACeFbYWqF+oRitFShEGgQDwCGTntkAR2xCMAFLiI+C4JD9D0/iV+LVhYyfRagRDfHw5Q/6/fFdOvl8FS14fhJQEAzw7UGNjh2L/q7fxIb0wRFxAENgQ1Y7X6julATAhLAWG2WB/YJAiAAYEAYAvdjJAOAgRjjrmQ3aXV7keCryZEIFAABJv2HSRegAtCA9sz/rmeKnIzqIPAB5iBFOe1ee84oRjqoICIAE5OhC3YsUKghIQArEn54U1L/rkEVgADjkz8GNYJ51C5o3E2iAihWOqqQR2PbivkAUqGguKxNoAMdq5g6ew0QIHADxB1Uibpk8ONkxDQENGFXKwaBi6T+qFIGSEKAAqLpXQYACHOIP7Nvqz1ZFASfNxTMBByj3wes+KXh+jCNAABUrHFaJ3FaBBwAxMgQEYOhYR2AtUxVWezUMz/cfRbeS/AqqNhJ/bFvqWwXVQEXv/1o78NWCXtw7Ry0Tut+LAhXNsd6thNhGyxQFnDY3dohsNuC2CmnB6B4P7VJRDEHYKugGm/W5RWlFWQnGjhX8ckh35OyJv6XJ+qfI8/8Bxyk3mVRCAOAAAAAASUVORK5CYII=" alt="" />

        <h1 className="text-lg text-black font-semibold ">Playstore</h1>
      </div>



      <div className="flex gap-2 rounded-4xl bg-white px-8 py-4">
        <img className="w-auto h-7" src="https://item7go.com/assets/img/Item7%20favicon-C3VyJ8_S.png" alt="" />

        <h1 className="text-lg text-black font-semibold ">Web App</h1>
      </div>

    </div>



    {/* Next Page */}

    <div className="bg-red-600/10 rounded-full ">
      <img className="p-10 h-270" src="https://item7go.com/assets/img/iphone%20mockup-C2M2vroD.png" alt="" />
    </div>


    </div>


    {/* NEXT PAGE */}


    <div>

      <div className="flex justify-center items-center gap-1">
        <h1 className="text-5xl font-bold ">How it works</h1>
     
      </div>

     <div className="flex gap-4 justify-around w-250 py-8 mt-8 m-auto">
       <div className="w-72 h-70 flex flex-col items-center justify-center text-center p-4 ">
        <img className="w-60  p-2" src="https://item7go.com/assets/img/ready-BFU_RXyQ.svg" alt="" />
        <h1 className="text-2xl p-4">Download The App</h1>
        <h1>Download and install the app by clicking the button on this page.</h1>
      </div>

      <div className="w-80 h-86 flex flex-col items-center justify-center text-center p-4 ">
        <img className="w-40  p-2" src="https://item7go.com/assets/img/set-Bo1TLyPk.svg" alt="" />
        <h1 className="text-2xl p-4">Make Your Order</h1>
        <h1>Pick your favourite item 7 through the app, customize the order to your heart's content, and pick the closest pick-up location to you.</h1>
      </div>

      <div className="w-72 h-70 flex flex-col items-center justify-center text-center p-4 ">
        <img className="w-35  p-2" src="data:image/svg+xml,%3csvg%20width='79'%20height='48'%20viewBox='0%200%2079%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M30.7516%2022.9779L31.2338%2012.8516C30.3911%2012.7831%2029.1589%2012.6978%2027.5372%2012.5959C24.7482%2012.4115%2022.5758%2013.0177%2021.02%2014.4147C19.4656%2015.7791%2018.6446%2017.4839%2018.5571%2019.5291C18.4626%2021.7365%2018.8752%2023.4941%2019.7949%2024.8018C20.7146%2026.1095%2022.0009%2026.8313%2023.6537%2026.9671C27.4138%2027.2581%2029.7798%2025.9283%2030.7516%2022.9779ZM37.195%209.2041L36.1531%2034.2442C36.0267%2037.1983%2034.7543%2040.0737%2032.3928%2041.0903C30.0312%2042.1068%2026.3848%2042.6945%2021.3313%2042.4783C19.6432%2042.406%2018.5725%2042.1594%2017.0945%2041.7384C15.649%2041.3188%2014.6093%2040.9166%2013.9753%2040.5317L13.0751%2039.9078L13.3064%2034.5028C13.6213%2034.7439%2014.0315%2035.0379%2014.537%2035.3847C15.075%2035.733%2015.6152%2036.2171%2017.1822%2036.837C18.7479%2037.4894%2020.2442%2037.8624%2021.6712%2037.956C24.5914%2038.1135%2026.7406%2037.6689%2028.1188%2036.6221C29.5281%2035.6092%2030.2834%2033.9178%2030.3849%2031.548L30.5182%2028.4316C29.5648%2029.4315%2028.4426%2030.1966%2027.1515%2030.7267C25.8619%2031.2244%2023.9976%2031.4698%2021.5588%2031.463C18.7614%2031.4734%2016.5328%2030.3536%2014.8729%2028.1036C13.213%2025.8536%2012.449%2023.1866%2012.581%2020.1026C12.7491%2016.1746%2014.1267%2013.2416%2016.7138%2011.3034C19.3348%209.33414%2022.7737%208.39182%2027.0305%208.47642C28.1681%208.49258%2029.5795%208.56924%2031.2648%208.70641C32.9839%208.8125%2034.394%208.92162%2035.4949%209.03378L37.195%209.2041Z'%20fill='white'/%3e%3cpath%20d='M60.6846%2021.4295C60.7749%2019.3194%2060.2494%2017.5407%2059.108%2016.0934C57.9991%2014.6475%2056.4545%2013.8822%2054.4743%2013.7974C52.4616%2013.7113%2050.8234%2014.3729%2049.5598%2015.7824C48.2975%2017.1593%2047.6213%2018.9028%2047.531%2021.0129C47.4393%2023.1554%2047.9641%2024.9503%2049.1055%2026.3976C50.2469%2027.8449%2051.8239%2028.6117%2053.8366%2028.6978C55.8168%2028.7825%2057.4218%2028.1357%2058.6516%2026.7574C59.9152%2025.348%2060.5929%2023.572%2060.6846%2021.4295ZM63.7824%2012.8786C66.3229%2015.0688%2067.4795%2018.0615%2067.252%2021.8569C67.0246%2025.6522%2065.5686%2028.5169%2062.884%2030.4509C60.2334%2032.3538%2057.1226%2033.2289%2053.5517%2033.0761C50.0782%2032.9274%2047.1368%2031.7446%2044.7274%2029.5275C42.352%2027.2794%2041.2413%2024.3537%2041.3955%2020.7503C41.5567%2016.9847%2042.916%2014.0996%2045.4734%2012.0951C48.0309%2010.0906%2051.0626%209.16338%2054.5686%209.31342C58.1719%209.46762%2061.2432%2010.656%2063.7824%2012.8786Z'%20fill='white'/%3e%3cpath%20d='M45.1564%2048.0001C65.6079%2035.4982%2070.6441%2024.6275%2069.2268%200.462939C81.874%2030.3251%2079.5778%2041.8037%2045.1564%2048.0001Z'%20fill='%23FF011A'/%3e%3cpath%20d='M33.6794%200C12.0779%2010.3892%205.97748%2020.7004%204.96576%2044.8853C-4.62477%2013.906%20-1.1897%202.71528%2033.6794%200Z'%20fill='%23FF011A'/%3e%3c/svg%3e" alt="" />
        <h1 className="text-2xl p-4">Pick It Up</h1>
        <h1>When your order is ready, you'll get notified and you can pick it up!</h1>
      </div>
     </div>


    </div>




    {/* NEXT PAGE 2 */}

<div className="w-250 flex flex-col m-auto justify-center items-center gap-4 py-8 mt-8">

  
    <div className="flex flex-col justify-center items-center py-8 mt-8">
      <h1 className="text-5xl font-semibold py-4">FAQ and Walkthrough</h1>
      <h1 className="text-lg pt-2">Got questions? We've got answers!</h1>
    </div>

    <div className="flex flex-col gap-4 justify-center  items-center py-8 mt-8">
      <h1 className="text-xl font-semibold py-5 px-4 border w-200 rounded-tl-2xl rounded-tr-2xl border-white">Do you have a customer support line?</h1>
       <h1 className="text-xl font-semibold py-5 px-4 border w-200  border-white">Can I order for someone else?</h1>
        <h1 className="text-xl font-semibold py-5 px-4 border w-200  border-white">What if I am running late to pick up my order?</h1>
         <h1 className="text-xl font-semibold py-5 px-4 border w-200 rounded-b-2xl  border-white">What are the operating hours of the pick up station?  </h1>
         
    </div> 


</div>




<div className="mt-8">

<div className="  flex justify-between w-280 rounded-4xl  border-4 m-auto p-8 items-center ">
   <div className="flex flex-col justify-center items-center gap-4 px-8 mt-8 w-120">
    <h1 className="text-6xl font-bold"> Download the App today! </h1>
   <div className="flex justify-between gap-4">
    <div className="flex gap-2 rounded-4xl w-48 bg-white px-8 py-4">
        <img className="w-auto h-7" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAA6CAYAAAAZW7HfAAAAAXNSR0IArs4c6QAAAotJREFUaAXtmQ1NBDEQhUcCDkACEpCAA3AADsABOAAHSEACEpCABMiX7CRLr9PObtu7KWGSS+/Y7fS9+W2LSAy5EpEHEXkXka8YkPwoAA/w7+Tj13DiN58S4EpkCk+cGdZXEngmvLwZHlASz9EZkLwK1hovI5O4cBAIH0ovDhIQDSseLzyGRb8Au694IXwYwaNUkSBA2Q0vH4YnwpfTtWU/ExJYny1HCCFhPaFAOPHB8hZ4dPGMz7BeAdhbEaFUppblNyB57i2TvEfC4xX2S7nmRxiyx2omBXg6rbVQbnEllIYLuhR4bl7pb5D1GujXujcbwacgIA4hrAmI9Pme3xjULZ59zh4QPeZgmGouRiagRiA3Tbnr5HZdbOSYrXQkzpYEHgmwpJtqmCWAazw7zZLyYzyDgFmleHAMEC1rFAnM4gUzhDTDYdlipdFzi9UIEjAcDaJVv5kH6gVOVa2LjJxPt68KHXAkiFbd7LeqYh1aWhfvNb+a0DCM3uDOq24IHkp4859Er5hu1eM62UXPCVd1it6t/0SfIFKqJzmuUlrjdvT86l0tVy2jQbTqxxvF/dMMZwmMUM2N6BVKPcn1jymvE4RUlcgMZwolwZg9qlLCZgmpNZmDE98MpXZNgO8HJGYLKUhkzxq9Ln5Ti434TV5kZSZv0KRNmcEbpheUFR08eqUqekGJRL7GqXpBSdA3eHlEQrbqLG4ElYCOHAujhdWu/31zNGy1XK/57jBSL6zHCJ0cApvCaE1Av5+y7BLSrhsPBWuNJPrW604WZw77G+57McTWHOtGQIlBpHbuYFHCL7unWRRhVUp4rfp1CSEFn440mrVVWQxLUwQgukWuF8PgMQyALnS77ppY6AdHEulJCo9BQAAAAABJRU5ErkJggg==" alt="" />

        <h1 className="text-lg text-black font-semibold ">App store</h1>
      </div>
      <div className="flex gap-2 rounded-4xl w-48 bg-white px-8 py-4">
        <img className="w-auto h-7" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAA2CAYAAABumXGkAAAAAXNSR0IArs4c6QAAAzFJREFUaAXN2c+K00AYAPBC4sWD9BF8Ai3upHiMTUFFyoaGRRQEH8CDPoBsPYjXfYMiom0V6VF2u0seYMGexIsQ8NI/KrkI0j8wMmmnpN1kMjP5vm4XurNk2uX75fvmyyQtFGI/paZbJJ36IWl7Pml7NHp1vP6tVv1p7G27+2ep5V632vVgFTxHLEer7QU7jxEB1mAdr8vAO5cOdobXAt3IQtLcXttr7hSm/O5ZPynQrGM7VWJ33oxp+e2LxUKWyMImjmGs927pUkus8vovzQthsEstMYaAgkRZ6tQPt54VjoCEbH29xBGQkOXa8bfSxTYRCBD89ZKEwICgllgaAgPCSoxhSMu1QRe/CIEFAW/JWQhMCFhLlkFgQ9yP94LpiaG/5ZdFYEFqn+7Tn8fX6OzUZC//35eC+i5ZBQEN2QBwCJ2fGU0ljCoCCpIGWGaEzk8N+RLTQeSFZAE4hI0MMzk2XGFL1kXoQlQAaxhRieVBqEJ0AXHM7My8uEvOi5CFgAAWHSwqsbWFD4HIgkACeFbYWqF+oRitFShEGgQDwCGTntkAR2xCMAFLiI+C4JD9D0/iV+LVhYyfRagRDfHw5Q/6/fFdOvl8FS14fhJQEAzw7UGNjh2L/q7fxIb0wRFxAENgQ1Y7X6julATAhLAWG2WB/YJAiAAYEAYAvdjJAOAgRjjrmQ3aXV7keCryZEIFAABJv2HSRegAtCA9sz/rmeKnIzqIPAB5iBFOe1ee84oRjqoICIAE5OhC3YsUKghIQArEn54U1L/rkEVgADjkz8GNYJ51C5o3E2iAihWOqqQR2PbivkAUqGguKxNoAMdq5g6ew0QIHADxB1Uibpk8ONkxDQENGFXKwaBi6T+qFIGSEKAAqLpXQYACHOIP7Nvqz1ZFASfNxTMBByj3wes+KXh+jCNAABUrHFaJ3FaBBwAxMgQEYOhYR2AtUxVWezUMz/cfRbeS/AqqNhJ/bFvqWwXVQEXv/1o78NWCXtw7Ry0Tut+LAhXNsd6thNhGyxQFnDY3dohsNuC2CmnB6B4P7VJRDEHYKugGm/W5RWlFWQnGjhX8ckh35OyJv6XJ+qfI8/8Bxyk3mVRCAOAAAAAASUVORK5CYII=" alt="" />

        <h1 className="text-lg text-black font-semibold ">Play store</h1>
      </div>
   </div>
   <div className="flex gap-2 w-100 rounded-4xl justify-center   bg-white px-8 py-4">
        <img className="w-auto h-7" src="https://item7go.com/assets/img/Item7%20favicon-C3VyJ8_S.png" alt="" />

        <h1 className="text-lg text-black font-semibold ">Web App</h1>
      </div>

   </div>

      <div>
              
        <img className="w-auto h-140" src="https://item7go.com/assets/img/iphone%20mockup-C2M2vroD.png" alt="" />
      </div>
  
</div>

</div>



{/* FOOTER SECTION */}


<div className="flex flex-col justify-center items-center mt-14">
  <h1>2026 Item7go</h1>
  <ul className=" flex gap-8 m-4">
    <li>Contact Us</li>
    <li>Terms and Conditions</li>
    <li>Privacy Policy</li>
  </ul>
</div>

    </div>
  )
}




