---
layout: Post
title: Open Weather API
description: Open Weather API
date: '2022-10-21'
tags:
  - api
  - react
  - openWeather
logo:
  src: /icons/react-2.svg
  alt: App
images:
  - src: /projects/project-5.png
    alt: Open Weather App
    overlay:
      src: /projects/project-5-mobile.png
      alt: overlay image
  - src: /projects/project-5.png
    alt: Open Weather App
attributes:
  - label: Features
    value: Live Weather Updates
  - label: Role
    value: Admin Panel Design
---


### About this project

- Live version of the site here: [Live Weather](https://weather.nelles.io/)
- [Github Source Code](https://github.com/mdnelles/WeatherAPI/)



---

### Tech Stack

 - [React](https://reactjs.org/)
 - [TypeScript](https://www.typescriptlang.org/)
 - [Open API](https://openweathermap.org/api)

## Real-Time Weather Updates App

Welcome to the Real-Time Weather Updates App! This application provides you with up-to-date weather information for various cities and states. Built using React, this app fetches weather data from an API and displays it in a user-friendly interface. Stay informed about the current weather conditions, forecasts, and more!

## Features

- **User-friendly Interface**: The app's frontend is developed using React, offering a clean and intuitive user interface. The design is aimed at providing a seamless experience while viewing weather updates.

- **Real-Time Weather Data**: The application fetches real-time weather data from a weather API. This ensures that the displayed information is accurate and up-to-date.

- **City and State Selection**: Users can search for weather updates by specifying the desired city and state. This allows for personalized weather information based on the user's preferences.

- **Current Conditions and Forecasts**: The app provides both current weather conditions and short-term forecasts, giving users a comprehensive overview of the weather.

## Installation and Setup


---

### Code-Block

An example of the NextJS API Route:
[Github Repo Source Code](https://github.com/mdnelles/AI_nextjs/)



  ```js  {21-36} showLineNumbers
  export default function Data() {
   const dis = useAppDispatch();

   const data: ForecastState | any = useAppSelector(
      (state) => state.forecast.value
   );
   const session: SessionState = useAppSelector((state) => state.session);
   const forecast: ForecastState = useAppSelector((state) => state.forecast);
   const [obj, setObj] = useState<any | ForecastArr>(undefined);
   const [city, setCity] = useState<string>("");

   const temp: number = parseInt(data.list[0].main.temp);
   const icon = data.list[0].weather[0].icon;
   const front = data.list[0].weather[0].description;
   const back = `Wind speed: ${data.list[0].wind.speed} mph`;
   const top = `Humidity ${data.list[0].main.humidity}%`;
   const bottom = `Pressure ${data.list[0].main.pressure / 10}kPa`;

   if (city !== session.city) setCity(session.city);

   if (!obj || !obj.city || data.city.name !== obj.city)
      setObj(build_forcast_obj(data));

   //console.log(build_forcast_obj(data));

   useEffect(() => {
      if (session.city !== forecast.value.city.name) {
         (async () => {
            try {
               const response = await fetch(
                  `${API_URL}?q=${city}&units=imperial&APPID=${API_KEY}`
               );
               if (response.status === 200) {
                  const data = await response.json();
                  dis(updateForecast(data));
               } else {
                  alert(`Could not find city: ` + city);
               }
            } catch (error) {
               console.log(error);
            }
         })();
      }
   }, [session.city]);
   useEffect(() => {
      console.log("UE forecast: " + session.city);
   }, [forecast]);
   useEffect(() => {
      console.log("UE forecast: " + session.unit);
   }, [session.unit]);

  ```