import { Coord } from './coord';
import { Weather } from './weather';
import { Main } from './main';
import { Wind } from './wind';
import { Clouds } from './clouds';
import { Sys } from './sys';

export interface City {
    coord?: Coord;
    weather?: Weather[];
    base?: string;
    main?: Main;
    visiblity?: number;
    wind?: Wind;
    clouds?: Clouds;
    dt?: number;
    sys?: Sys;
    timezone?: number;
    id?: number;
    name?: string;
    cod?: number;
}

/* FROM WEATHER DATABASE:
{ "coord": { 
            "lon":-116.2,
            "lat":43.62
        },
  "weather": [ 
      { 
        "id":804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon":"04d"
      }
    ],
  "base": "stations",
  "main": { 
            "temp":288.36,
            "pressure":1006,
            "humidity":55,
            "temp_min":284.82,
            "temp_max":290.93
            },
  "visibility":16093,
  "wind": { 
            "speed":2.1,
            "deg":340
        },
  "clouds": { 
               "all":90 
            },
  "dt":1558550544,
  "sys": { 
           "type":1,
           "id":4829,
           "message":0.007,
           "country":"US", 
           "sunrise":1558527202, 
           "sunset":1558580992
        },
  "timezone":-21600,
  "id":5586437,
  "name":"Boise",
  "cod":200 }
  */
