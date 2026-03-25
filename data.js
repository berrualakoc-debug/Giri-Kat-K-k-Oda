var APP_DATA = {
  "scenes": [
    {
      "id": "0-yatak-odasi",
      "name": "YATAK ODASI",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.26314540441046397,
        "pitch": 0.26128619892064364,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.44289238341900905,
          "pitch": 0.5742524728940683,
          "rotation": 4.71238898038469,
          "target": "1-banyo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-banyo",
      "name": "BANYO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.012083048667653529,
        "pitch": 0.3026408491095225,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.5645053392996271,
          "pitch": 0.9032667887897681,
          "rotation": 5.497787143782138,
          "target": "0-yatak-odasi"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
