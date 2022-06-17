import io
import base64
import asyncio
import websockets

from PIL import Image


stream = io.BytesIO()
test_image = Image.open(
    "C:\\Users\\lukas\\Code\\voroscope-beta\\client\\public\\images\\cells.jpg"
)

with open(
    "C:\\Users\\lukas\\Code\\voroscope-beta\\client\\public\\images\\cells.jpg", "rb"
) as image:
    encoded_string = base64.b64encode(image.read())
    # print(encoded_string.encode("utf-8"), type(encoded_string))


async def echo(websocket):
    async for message in websocket:
        test_image.save(stream, "jpeg")
        await websocket.send(stream.getvalue())
        # await websocket.send(encoded_string.decode("utf-8"))

    # print("connected")
    # while True:
    #    data = await websocket.recv()
    #    print(f"< {data}")
    #    await websocket.send(data)


async def main():
    async with websockets.serve(echo, "localhost", 8765):
        await asyncio.Future()  # run forever


asyncio.run(main())
