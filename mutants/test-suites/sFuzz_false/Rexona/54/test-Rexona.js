const Rexona = artifacts.require("Rexona");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rexona', (accounts) => {
	it('test for Rexona', async () => {
		const stringJICV1fo = "34ZERBSXaJFrxgjXt8ypAl84OfhdUd4Bl3m31GTJFMMFsDvlz9RrtlSgpuD3TwcSc31TYbk9NVTGC3qN1lbDNf0BuYnZ6j"
		const stringaJYcrJo = "Ysli5edbs0GwyCLoyWOxMu3MzGIfeCrU4TwUruqHOs83dyLJZX0Mi"
		const uintWkdbRie = BigInt("1869")
		const RexonayVZ05q = await Rexona.new(stringJICV1fo, stringaJYcrJo, uintWkdbRie, {from: accounts[0]});
		const uintT3OSfu = BigInt("1604")
		const addressUlJGWgp = accounts[3]
		const addressLqJsNz = accounts[4]
		const uinttgs4nLQ = BigInt("741")
		const addressjy1mie0 = "0x0000000000000000000000000000000000000001"
		const uintnHKiUR = BigInt("891")
		const addressumnjNzX = accounts[2]
		const addressXWKi39o = accounts[5]
		const uintKx06dgg = BigInt("111")
		const addressApCPLaY = accounts[4]
		const uintug8iU1i = BigInt("816")
		const addressful3cP = accounts[0]
//		const boolwa6PheK = await RexonayVZ05q.transferFrom.call(addressLqJsNz, addressUlJGWgp, uintT3OSfu, {from: accounts[2]});
//		const boolzekKSPy = await RexonayVZ05q.transfer.call(addressjy1mie0, uinttgs4nLQ, {from: accounts[2]});
//		const boolVtgme3P = await RexonayVZ05q.transferFrom.call(addressXWKi39o, addressumnjNzX, uintnHKiUR, {from: accounts[3]});
//		const bool1hPTtj = await RexonayVZ05q.transfer.call(addressApCPLaY, uintKx06dgg, {from: accounts[2]});
//		const boolM8q6mjN = await RexonayVZ05q.approveAndCall.call(addressful3cP, uintug8iU1i, {from: accounts[1]});

		await expect(RexonayVZ05q.transferFrom.call(addressLqJsNz, addressUlJGWgp, uintT3OSfu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringqslBZIi = "1y5kH5rpjnvqnhgMeVj5v6vVUv57u8epmQYleQD"
		const stringXqWISlu = "lGr1xkNsXv5UYa8aJuKNptn"
		const uintnjfvjwU = BigInt("467")
		const RexonahcZmoBd = await Rexona.new(stringqslBZIi, stringXqWISlu, uintnjfvjwU, {from: "0x0000000000000000000000000000000000000001"});
		const uintUQfx9zP = BigInt("112")
		const addresscpAtSP = accounts[1]
		const uintliJZgwA = BigInt("146")
		const addressFBiBYee = accounts[1]
		const addressT8QZTw = accounts[2]
		const uintB6KShmz = BigInt("748")
		const addresskqrXjKK = accounts[4]
		const uintQ3zaDAR = BigInt("1927")
		const addressrklkJbh = accounts[2]
		const uintt2tNizd = BigInt("67")
		const addressQG4m81N = accounts[1]
		const addresscY8RFfR = accounts[3]
		const booltXkV241 = await RexonahcZmoBd.approveAndCall.call(addresscpAtSP, uintUQfx9zP, {from: accounts[4]});
		const boolZQAmd0g = await RexonahcZmoBd.transferFrom.call(addressT8QZTw, addressFBiBYee, uintliJZgwA, {from: accounts[5]});
		const boolKcb5FU = await RexonahcZmoBd.approveAndCall.call(addresskqrXjKK, uintB6KShmz, {from: accounts[1]});
		const boolMB5SmqG = await RexonahcZmoBd.approve.call(addressrklkJbh, uintQ3zaDAR, {from: accounts[0]});
		const boolUaKbACO = await RexonahcZmoBd.transferFrom.call(addresscY8RFfR, addressQG4m81N, uintt2tNizd, {from: accounts[1]});
	});

	it('test for Rexona', async () => {
		const stringxoghRUj = "BOThiJyx8q8fik6jGsK6LEddNYFynjo4jAqdC8Wbg8WpnzExat42W9A1IgeOdgGbvXcJNRw6iJ02svzDH70"
		const stringgpdvtJG = "LUnJvkId3yPZA7OytNEA62Q"
		const uintVcaynlx = BigInt("1248")
		const Rexonanxw6swr = await Rexona.new(stringxoghRUj, stringgpdvtJG, uintVcaynlx, {from: accounts[3]});
		const uintrLqkQD = BigInt("1745")
		const addressi9D5p66 = accounts[2]
		const uintZfpSzLJ = BigInt("1461")
		const addressk7UfM3 = accounts[1]
		const uintE8SqSKI = BigInt("1946")
		const addressuRhSK9u = accounts[4]
		const uintHqGDKDz = BigInt("976")
		const address1CiCIu = accounts[4]
		const addressrXFhn8 = accounts[1]
		const boolNWriVo = await Rexonanxw6swr.approve.call(addressi9D5p66, uintrLqkQD, {from: accounts[4]});
//		const boolcvflngu = await Rexonanxw6swr.approveAndCall.call(addressk7UfM3, uintZfpSzLJ, {from: accounts[1]});
//		const boolu0Gd8x9 = await Rexonanxw6swr.approve.call(addressuRhSK9u, uintE8SqSKI, {from: accounts[4]});
//		const boolcmMOu4b = await Rexonanxw6swr.transferFrom.call(addressrXFhn8, address1CiCIu, uintHqGDKDz, {from: accounts[1]});

		assert.equal(boolNWriVo, true)
		await expect(Rexonanxw6swr.approveAndCall.call(addressk7UfM3, uintZfpSzLJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringqSLts3 = "qqvmn5maejVWBtdVDW74g746SsJ8YYKIeFKXvX85CDoUMkgkV7kxickP"
		const stringwmAn6G2 = "K2xeVStM614qn2VGMvAfgRQlYoVmRiYQFU"
		const uintnsOyqwj = BigInt("861")
		const RexonaGXuzDzQ = await Rexona.new(stringqSLts3, stringwmAn6G2, uintnsOyqwj, {from: accounts[2]});
		const addressp1DQTF9 = accounts[2]
		const uintJbO29aO = BigInt("1667")
		const addressJ7pHOuk = accounts[2]
		const addressntI1O29 = accounts[2]
		const uintQqMBc2 = BigInt("1054")
		const addressbqeLjkL = accounts[3]
		const addressjfOL7oX = accounts[3]
		const uintaHK73bJ = BigInt("1409")
		const addressveqZKon = accounts[3]
		const addressXhaU2Ny = accounts[3]
//		const booloPttNyw = await RexonaGXuzDzQ.transferownership.call(addressp1DQTF9, {from: accounts[5]});
//		const booldkH9zfx = await RexonaGXuzDzQ.transferFrom.call(addressntI1O29, addressJ7pHOuk, uintJbO29aO, {from: accounts[3]});
//		const boolkqtFxgr = await RexonaGXuzDzQ.transferFrom.call(addressjfOL7oX, addressbqeLjkL, uintQqMBc2, {from: accounts[1]});
//		const boolnVKAvES = await RexonaGXuzDzQ.transferFrom.call(addressXhaU2Ny, addressveqZKon, uintaHK73bJ, {from: accounts[4]});

		await expect(RexonaGXuzDzQ.transferownership.call(addressp1DQTF9, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringb0xx6ik = "m5c79jonFfTvUxRqK2XsdTWFiYLmf0UW1Nktc7AIVPK8rKhJyVmfnJ5ISP8duE0rejLyVT1TNIh7kM8"
		const stringjgvwSe = "eGYX2daBBfBwN6aNhuFJKdvMSgxZedP"
		const uint0SbnAd = BigInt("629")
		const Rexonah8h5RSM = await Rexona.new(stringb0xx6ik, stringjgvwSe, uint0SbnAd, {from: accounts[4]});
		const uint1EPxrh = BigInt("1507")
		const addressDYZCjG3 = accounts[0]
		const addressK2WaRd0 = accounts[0]
//		const booliQu7Auy = await Rexonah8h5RSM.transfer.call(addressDYZCjG3, uint1EPxrh, {from: accounts[3]});
//		const boolv1xGirS = await Rexonah8h5RSM.transferownership.call(addressK2WaRd0, {from: accounts[2]});

		await expect(Rexonah8h5RSM.transfer.call(addressDYZCjG3, uint1EPxrh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringrtmBDkg = "RImV9ohNOJV5IEkhb8Mz7O8cpbai0jQ5dJRZ7e3Rd5Y3RiepVvKRqXy85EE996jStkHN3h1cv3qWxgrvyn4tiL2qQs5a"
		const stringH58IDk = "Q4hRJ97JLDSLWfvuZ50"
		const uintTo6q9M9 = BigInt("921")
		const RexonasoAyDJ = await Rexona.new(stringrtmBDkg, stringH58IDk, uintTo6q9M9, {from: accounts[3]});
		const uintupeYYKZ = BigInt("2032")
		const addressCxVkAn = accounts[2]
		const uintSiZRjBW = BigInt("1250")
		const addressUvN6FLN = accounts[1]
		const addressZxJ4XXq = accounts[1]
		const uintAAouN1 = BigInt("608")
		const addressqBorZt = accounts[2]
		const addressXB8moQP = accounts[1]
		const boolI0F9ncl = await RexonasoAyDJ.approveAndCall.call(addressCxVkAn, uintupeYYKZ, {from: accounts[3]});
//		const boolIggaXv = await RexonasoAyDJ.transferFrom.call(addressZxJ4XXq, addressUvN6FLN, uintSiZRjBW, {from: accounts[3]});
//		const boolAl3KM4F = await RexonasoAyDJ.transferFrom.call(addressXB8moQP, addressqBorZt, uintAAouN1, {from: accounts[4]});

		assert.equal(boolI0F9ncl, true)
		await expect(RexonasoAyDJ.transferFrom.call(addressZxJ4XXq, addressUvN6FLN, uintSiZRjBW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringrtmBDkg = "RImV9ohNOJV5IEkhb8Mz7O8cpbai0jQ5dJRZ7e3Rd5Y3RiepVvKRqXy85EE996jStkHN3h1cv3qWxgrvyn4tiL2qQs5a"
		const stringH58IDk = "Q4hRJ97JLDSLWfvuZ50"
		const uintESggne3 = BigInt("921")
		const RexonasoAyDJ = await Rexona.new(stringrtmBDkg, stringH58IDk, uintESggne3, {from: accounts[3]});
		const uintOS2i7V = BigInt("2039")
		const addressl32gqW2 = accounts[2]
		const uintOMJFi1 = BigInt("1151")
		const addressvCrkid4 = accounts[3]
		const addressDquYegT = accounts[3]
		const uintJjB0hvu = BigInt("1404")
		const addresscntvXTK = accounts[3]
		const addressdEKP6uD = accounts[1]
		const uintNoUuuv9 = BigInt("1250")
		const addressL6wxiyK = accounts[1]
		const address9n8lue = accounts[1]
		const boolI0F9ncl = await RexonasoAyDJ.approveAndCall.call(addressl32gqW2, uintOS2i7V, {from: accounts[3]});
		const boole3UCDmX = await RexonasoAyDJ.transferFrom.call(addressDquYegT, addressvCrkid4, uintOMJFi1, {from: accounts[3]});
//		const boolydws16l = await RexonasoAyDJ.transferFrom.call(addressdEKP6uD, addresscntvXTK, uintJjB0hvu, {from: accounts[5]});
//		const boolIggaXv = await RexonasoAyDJ.transferFrom.call(address9n8lue, addressL6wxiyK, uintNoUuuv9, {from: accounts[3]});

		assert.equal(boolI0F9ncl, true)
		assert.equal(boole3UCDmX, true)
		await expect(RexonasoAyDJ.transferFrom.call(addressdEKP6uD, addresscntvXTK, uintJjB0hvu, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringHzEZG0v = "Qobh7dBxKntlmHuBwrvfxlsS7GLlTlNp2yPSIxejE9DIQ7U0pBp4PrFoS9X"
		const stringUpExtPB = "XnlbTbb6Hz9BedxqOtgYyvab4QtbJ2KXepqVVn7BCzy1yOtg6atWqTJGwtvaXuaT6RqM52scCAoloLsPe8RheSfqb1E"
		const uintCGTtrJ5 = BigInt("1170")
		const RexonaQlTgYIr = await Rexona.new(stringHzEZG0v, stringUpExtPB, uintCGTtrJ5, {from: accounts[0]});
		const uintv9Z1Zfz = BigInt("0")
		const addressmRoLoAS = accounts[5]
		const uintr2Vu2Gt = BigInt("1685")
		const addressv1b41vW = accounts[1]
		const uintWphUDPV = BigInt("809")
		const addressua7ZQoa = accounts[3]
		const bool69Kxrk = await RexonaQlTgYIr.approveAndCall.call(addressmRoLoAS, uintv9Z1Zfz, {from: accounts[0]});
//		const boolaiXIleT = await RexonaQlTgYIr.approveAndCall.call(addressv1b41vW, uintr2Vu2Gt, {from: accounts[2]});
//		const boolaFzrIoK = await RexonaQlTgYIr.approve.call(addressua7ZQoa, uintWphUDPV, {from: accounts[2]});

		assert.equal(bool69Kxrk, true)
		await expect(RexonaQlTgYIr.approveAndCall.call(addressv1b41vW, uintr2Vu2Gt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringHzEZG0v = "Qobh7dBxKntlmHuBwrvfxlsS7GLlTlNp2yPSIxejE9DIQ7U0pBp4PrFoS9X"
		const stringUpExtPB = "XnlbTbb6Hz9BedxqOtgYyvab4QtbJ2KXepqVVn7BCzy1yOtg6atWqTJGwtvaXuaT6RqM52scCAoloLsPe8RheSfqb1E"
		const uintkPZmWvd = BigInt("1170")
		const RexonaQlTgYIr = await Rexona.new(stringHzEZG0v, stringUpExtPB, uintkPZmWvd, {from: accounts[0]});
		const uintiDrpVq0 = BigInt("0")
		const addressDiVh55s = accounts[1]
		const boolU5s2fK1 = await RexonaQlTgYIr.transfer.call(addressDiVh55s, uintiDrpVq0, {from: accounts[0]});

		assert.equal(boolU5s2fK1, true)
	});
})