import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger:true});
server.register(cors, {
    origin:"*",

});

const teams = [
    {
      "id": 1,
      "teamName": "Ferrari",
      "teamBase": "Maranello, Italy"
    },
    {
      "id": 2,
      "teamName": "Mercedes-AMG",
      "teamBase": "Brackley & Brixworth, United Kingdom"
    },
    {
      "id": 3,
      "teamName": "McLaren",
      "teamBase": "Woking, United Kingdom"
    },
    {
      "id": 4,
      "teamName": "Williams",
      "teamBase": "Grove, United Kingdom"
    },
    {
      "id": 5,
      "teamName": "Red Bull Racing",
      "teamBase": "Milton Keynes, United Kingdom"
    },
    {
      "id": 6,
      "teamName": "Racing Bulls",
      "teamBase": "Faenza, Italy"
    },
    {
      "id": 7,
      "teamName": "Alpine",
      "teamBase": "Enstone, United Kingdom / Viry-Chatillon, France"
    },
    {
      "id": 8,
      "teamName": "Aston Martin",
      "teamBase": "Silverstone, United Kingdom"
    },
    {
      "id": 9,
      "teamName": "Sauber",
      "teamBase": "Hinwil, Switzerland"
    },
    {
      "id": 10,
      "teamName": "Haas",
      "teamBase": "Kannapolis, USA / Banbury, United Kingdom / Maranello, Italy"
    }
  ]

  const drivers = [
    {
      "id": 1,
      "driverName": "Charles Leclerc",
      "teamName": "Ferrari"
    },
    {
      "id": 2,
      "driverName": "Lewis Hamilton",
      "teamName": "Ferrari"
    },
    {
      "id": 3,
      "driverName": "George Russell",
      "teamName": "Mercedes-AMG"
    },
    {
      "id": 4,
      "driverName": "Andrea Kimi Antonelli",
      "teamName": "Mercedes-AMG"
    },
    {
      "id": 5,
      "driverName": "Lando Norris",
      "teamName": "McLaren"
    },
    {
      "id": 6,
      "driverName": "Oscar Piastri",
      "teamName": "McLaren"
    },
    {
      "id": 7,
      "driverName": "Alexander Albon",
      "teamName": "Williams"
    },
    {
      "id": 8,
      "driverName": "Carlos Sainz",
      "teamName": "Williams"
    },
    {
      "id": 9,
      "driverName": "Max Verstappen",
      "teamName": "Red Bull Racing"
    },
    {
      "id": 10,
      "driverName": "Liam Lawson",
      "teamName": "Red Bull Racing"
    },
    {
      "id": 11,
      "driverName": "Yuki Tsunoda",
      "teamName": "Racing Bulls"
    },
    {
      "id": 12,
      "driverName": "Isack Hadjar",
      "teamName": "Racing Bulls"
    },
    {
      "id": 13,
      "driverName": "Pierre Gasly",
      "teamName": "Alpine"
    },
    {
      "id": 14,
      "driverName": "Jack Doohan",
      "teamName": "Alpine"
    },
    {
      "id": 15,
      "driverName": "Fernando Alonso",
      "teamName": "Aston Martin"
    },
    {
      "id": 16,
      "driverName": "Lance Stroll",
      "teamName": "Aston Martin"
    },
    {
      "id": 17,
      "driverName": "Nico H\u00fclkenberg",
      "teamName": "Sauber"
    },
    {
      "id": 18,
      "driverName": "Gabriel Bortoleto",
      "teamName": "Sauber"
    },
    {
      "id": 19,
      "driverName": "Esteban Ocon",
      "teamName": "Haas"
    },
    {
      "id": 20,
      "driverName": "Oliver Bearman",
      "teamName": "Haas"
    }
  ]

server.get("/teams", async(request, response) => {
    response.type("application/json").code(200);
    return {teams}
});

server.get("/drivers", async(request, response) => {
    response.type("application/json").code(200);
    return [
        { drivers }
    ]
});

interface DriverParams{
    id:string,
}

server.get<{ Params: DriverParams}>(
    "/drivers/:id",
    async(request, response) => {
        const id = parseInt(request.params.id);
        const driver = drivers.find((d) => d.id === id );
        if(!driver){
            response.type("application/json").code(404);
            return { message: "Driver not found!"}
        }else{
            response.type("application/json").code(200);
            return { driver };
        }
    }
);

server.listen({ port:3636 }, () => {
    console.log("Server init");
});
