const WOLF = artifacts.require("WOLF");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WOLF', (accounts) => {
	it('test for WOLF', async () => {
		const stringL3DS3h = "7HCz7cSpcOiQWAIIirGZsf"
		const stringQWyIxHB = "ZISFOjvMkMDkv9uMHKDl1DPNMVthdrlgDx"
		const uintzKuo72o = BigInt("1333")
		const WOLFlrcb3Tq = await WOLF.new(stringL3DS3h, stringQWyIxHB, uintzKuo72o, {from: accounts[0]});
		const uintqHaWOCd = BigInt("1509")
		const addressTe6jAAX = accounts[1]
		const uintmK2A94C = BigInt("339")
		const addressGfzLEvh = accounts[1]
		const addressOaGWsie = accounts[0]
		const uintyCfiDOP = BigInt("1674")
		const addresseldAybj = "0x0000000000000000000000000000000000000001"
		const uintvYqZkPE = BigInt("1459")
		const addressi3HSdgj = accounts[0]
		const addressBiTHB4q = accounts[2]
		const bool8CNagg = await WOLFlrcb3Tq.approve.call(addressTe6jAAX, uintqHaWOCd, {from: accounts[3]});
//		const boolYzqqNpa = await WOLFlrcb3Tq.transferFrom.call(addressOaGWsie, addressGfzLEvh, uintmK2A94C, {from: accounts[2]});
//		const booly8DkVG5 = await WOLFlrcb3Tq.approveAndCall.call(addresseldAybj, uintyCfiDOP, {from: accounts[2]});
//		const booly7WN1AB = await WOLFlrcb3Tq.transferFrom.call(addressBiTHB4q, addressi3HSdgj, uintvYqZkPE, {from: accounts[1]});

		assert.equal(bool8CNagg, true)
		await expect(WOLFlrcb3Tq.transferFrom.call(addressOaGWsie, addressGfzLEvh, uintmK2A94C, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringFpaZsX3 = "T5MVft"
		const stringJtDJGuv = "oPy9pFbSxdu6A6TNc33GCumIOpY3JFMyAl76dlW767ColiIeFFfifXYBurY73gToBDGy6ofVAZY97FMdwzb"
		const uintZWeRKG5 = BigInt("1343")
		const WOLFEBcJFpY = await WOLF.new(stringFpaZsX3, stringJtDJGuv, uintZWeRKG5, {from: accounts[0]});
		const uintk0ka7lB = BigInt("1958")
		const addressTVkVmHf = accounts[3]
		const uintzcDaGYd = BigInt("1786")
		const addressEr1YZrN = accounts[0]
		const address5Rf1Hu = accounts[5]
		const uintwnngMI0 = BigInt("222")
		const addressFjZ02D = accounts[4]
//		const boolSaukwvx = await WOLFEBcJFpY.approveAndCall.call(addressTVkVmHf, uintk0ka7lB, {from: accounts[1]});
//		const booluyPB7Nb = await WOLFEBcJFpY.transfer.call(addressEr1YZrN, uintzcDaGYd, {from: accounts[4]});
//		const boolJ7qUnhj = await WOLFEBcJFpY.transferownership.call(address5Rf1Hu, {from: accounts[2]});
//		const boolfJLkiD8 = await WOLFEBcJFpY.approve.call(addressFjZ02D, uintwnngMI0, {from: accounts[5]});

		await expect(WOLFEBcJFpY.approveAndCall.call(addressTVkVmHf, uintk0ka7lB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringWYVjazd = "o4xw0b4IwcsqGAkC5jFRwc4RPkOtydQduexGfinm8VUV9PY01vADfEIeH8c"
		const stringHtIugKW = "xdt4W22vFK8Qd9iP9QCBJUDShE8pyOR6T9MQxnHcGAL6GIEXA6nSmEpfO2vGV0MIgw7GQyTBstw15lbC1Z2eGM36pm5VU"
		const uintSbzqHqf = BigInt("779")
		const WOLFeimSmBK = await WOLF.new(stringWYVjazd, stringHtIugKW, uintSbzqHqf, {from: "0x0000000000000000000000000000000000000001"});
		const addresspGbAVWY = accounts[1]
		const uintVy3nHT0 = BigInt("1483")
		const addressNjol7CG = accounts[2]
		const uintdQWrUUm = BigInt("1275")
		const addresswGyrTRs = accounts[4]
		const uintmKmW0Xd = BigInt("632")
		const addresshEX4zHb = accounts[1]
		const uintUadijME = BigInt("843")
		const addressfMNCaJI = accounts[4]
		const boolq6N6hdc = await WOLFeimSmBK.transferownership.call(addresspGbAVWY, {from: "0x0000000000000000000000000000000000000001"});
		const boolI3xFW5B = await WOLFeimSmBK.approve.call(addressNjol7CG, uintVy3nHT0, {from: accounts[0]});
		const boolsnlJpQo = await WOLFeimSmBK.transfer.call(addresswGyrTRs, uintdQWrUUm, {from: accounts[3]});
		const boolIXefTYz = await WOLFeimSmBK.approveAndCall.call(addresshEX4zHb, uintmKmW0Xd, {from: accounts[3]});
		const boolCKKO4jo = await WOLFeimSmBK.approve.call(addressfMNCaJI, uintUadijME, {from: accounts[2]});
	});

	it('test for WOLF', async () => {
		const stringbIZxxav = "vFIA88Bf36UpXa"
		const stringeezxEjI = "qBOklcnN6jDYp5nAsSAoCdpAmmnt6LRW9zHaKnNgvezDRgYn6QEUV4Te9NBbMPt7"
		const uintZCMiS4y = BigInt("552")
		const WOLFqTCWCK2 = await WOLF.new(stringbIZxxav, stringeezxEjI, uintZCMiS4y, {from: accounts[2]});
		const uintsKDnBqc = BigInt("1457")
		const addressBjZLXzj = accounts[3]
		const uint1Lmp4V = BigInt("273")
		const addressXVaTgqH = accounts[1]
		const boolQBysTL7 = await WOLFqTCWCK2.approve.call(addressBjZLXzj, uintsKDnBqc, {from: accounts[0]});
//		const boolW9Nl3uo = await WOLFqTCWCK2.transfer.call(addressXVaTgqH, uint1Lmp4V, {from: accounts[3]});

		assert.equal(boolQBysTL7, true)
		await expect(WOLFqTCWCK2.transfer.call(addressXVaTgqH, uint1Lmp4V, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringFpaZsX3 = "T5MVft"
		const stringJtDJGuv = "oPy9pFbSxdu6A6TNc33GCumIOpY3JFMyAl76dlW767ColiIeFFfifXYBurY73gToBDGy6ofVAZY97FMdwzb"
		const uintFIB3Jo5 = BigInt("1343")
		const WOLFEBcJFpY = await WOLF.new(stringFpaZsX3, stringJtDJGuv, uintFIB3Jo5, {from: accounts[0]});
		const uintHvkWLQG = BigInt("50")
		const addressiG4F1Ei = accounts[0]
		const uintRUF3SIL = BigInt("1958")
		const addressL1Ieci4 = accounts[3]
		const uintwGQ5KqI = BigInt("1633")
		const addressgIiwIo2 = accounts[0]
		const uintdUAl7N = BigInt("1786")
		const addressIP5K198 = accounts[0]
		const addresslIMLeR = accounts[5]
		const uintUArHJaj = BigInt("847")
		const addressrTa7Dng = "0x0000000000000000000000000000000000000001"
		const uintT8bZQUH = BigInt("222")
		const addressjaWbib5 = accounts[4]
//		const boolDiikHtg = await WOLFEBcJFpY.transfer.call(addressiG4F1Ei, uintHvkWLQG, {from: accounts[2]});
//		const boolSaukwvx = await WOLFEBcJFpY.approveAndCall.call(addressL1Ieci4, uintRUF3SIL, {from: accounts[1]});
//		const boolt3UYiF9 = await WOLFEBcJFpY.transfer.call(addressgIiwIo2, uintwGQ5KqI, {from: accounts[4]});
//		const booluyPB7Nb = await WOLFEBcJFpY.transfer.call(addressIP5K198, uintdUAl7N, {from: accounts[4]});
//		const boolJ7qUnhj = await WOLFEBcJFpY.transferownership.call(addresslIMLeR, {from: accounts[2]});
//		const boolh2xFdm1 = await WOLFEBcJFpY.approveAndCall.call(addressrTa7Dng, uintUArHJaj, {from: "0x0000000000000000000000000000000000000001"});
//		const boolfJLkiD8 = await WOLFEBcJFpY.approve.call(addressjaWbib5, uintT8bZQUH, {from: accounts[5]});

		await expect(WOLFEBcJFpY.transfer.call(addressiG4F1Ei, uintHvkWLQG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringybOOndc = "M4"
		const stringmOuKm9G = "MpbkTBbxnxBDsOzOucCy3Oy3MImJVPELHYVkHtRpGkH6UrRs9CMO1kbdp"
		const uintVQ6AIR = BigInt("1439")
		const WOLFKJJK0Za = await WOLF.new(stringybOOndc, stringmOuKm9G, uintVQ6AIR, {from: accounts[2]});
		const uintNDBrTMj = BigInt("1710")
		const addressisdyBJI = accounts[4]
		const addressAGIQJsf = accounts[3]
		const uintQHWOsIp = BigInt("1402")
		const address36e9j6 = accounts[5]
		const boolAbFNsTK = await WOLFKJJK0Za.transfer.call(addressisdyBJI, uintNDBrTMj, {from: accounts[2]});
//		const boolQSWfMYC = await WOLFKJJK0Za.transferownership.call(addressAGIQJsf, {from: accounts[0]});
//		const boolIuE8huH = await WOLFKJJK0Za.approve.call(address36e9j6, uintQHWOsIp, {from: accounts[4]});

		assert.equal(boolAbFNsTK, true)
		await expect(WOLFKJJK0Za.transferownership.call(addressAGIQJsf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringL3DS3h = "7HCz7cSpcOiQWAIIirGZsf"
		const stringQWyIxHB = "ZISFOjvMkMDkv9uMHKDl1DPNMVthdrlgDx"
		const uintaSrvNiV = BigInt("1333")
		const WOLFlrcb3Tq = await WOLF.new(stringL3DS3h, stringQWyIxHB, uintaSrvNiV, {from: accounts[0]});
		const uintFSenqKj = BigInt("880")
		const addressu1jn07A = accounts[0]
		const boolOF7vMaD = await WOLFlrcb3Tq.approveAndCall.call(addressu1jn07A, uintFSenqKj, {from: accounts[0]});

		assert.equal(boolOF7vMaD, true)
	});

	it('test for WOLF', async () => {
		const stringL3DS3h = "7HCz7cSpcOiQWAIIirGZsf"
		const stringQWyIxHB = "ZISFOjvMkMDkv9uMHKDl1DPNMVthdrlgDx"
		const uintkmep2hb = BigInt("1333")
		const WOLFlrcb3Tq = await WOLF.new(stringL3DS3h, stringQWyIxHB, uintkmep2hb, {from: accounts[0]});
		const uinttKo0BNZ = BigInt("0")
		const addressLiv5cLs = accounts[3]
		const uintpSwbyL1 = BigInt("129")
		const addressig4Y6zC = accounts[3]
		const boolU2XK6q8 = await WOLFlrcb3Tq.transfer.call(addressLiv5cLs, uinttKo0BNZ, {from: "0x0000000000000000000000000000000000000001"});
		const boolOmT5k1b = await WOLFlrcb3Tq.approve.call(addressig4Y6zC, uintpSwbyL1, {from: accounts[2]});

		assert.equal(boolOmT5k1b, true)
		assert.equal(boolU2XK6q8, true)
	});

	it('test for WOLF', async () => {
		const stringL3DS3h = "7HCz7cSpcOiQWAIIirGZsf"
		const stringQWyIxHB = "ZISFOjvMkMDkv9uMHKDl1DPNMVthdrlgDx"
		const uintGkxtD9m = BigInt("1333")
		const WOLFlrcb3Tq = await WOLF.new(stringL3DS3h, stringQWyIxHB, uintGkxtD9m, {from: accounts[0]});
		const uintiyshK80 = BigInt("0")
		const addresshW6Rgju = accounts[2]
		const uintiTaFJeD = BigInt("565")
		const addressMT3ERY1 = accounts[4]
		const addresstD6AepW = "0x0000000000000000000000000000000000000001"
		const boolOF7vMaD = await WOLFlrcb3Tq.approveAndCall.call(addresshW6Rgju, uintiyshK80, {from: accounts[0]});
//		const booljSMZpE = await WOLFlrcb3Tq.transferFrom.call(addresstD6AepW, addressMT3ERY1, uintiTaFJeD, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolOF7vMaD, true)
		await expect(WOLFlrcb3Tq.transferFrom.call(addresstD6AepW, addressMT3ERY1, uintiTaFJeD, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})