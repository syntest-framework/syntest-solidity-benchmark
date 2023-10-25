const QuickToken = artifacts.require("QuickToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('QuickToken', (accounts) => {
	it('test for QuickToken', async () => {
		const address8hIC9w = accounts[0]
		const addressL3Ea1s5 = accounts[1]
		const QuickTokeneHmUBfG = await QuickToken.new(address8hIC9w, addressL3Ea1s5, {from: accounts[2]});
		const addresshc7x159 = accounts[2]
		const addressEfR2MDB = accounts[1]
		const addressSotzgMm = accounts[3]
		const uintFvMtRap = BigInt("1268")
		const address5EUF4I = accounts[4]
		const uintDx4wXsR = BigInt("174")
		const addressSudhASR = "0x0000000000000000000000000000000000000001"
		const addressmpkKoFm = accounts[0]
		const uintNj8qGpt = await QuickTokeneHmUBfG.balanceOf.call(addresshc7x159, {from: accounts[2]});
		const uintjQjhyBb = await QuickTokeneHmUBfG.allowance.call(addressSotzgMm, addressEfR2MDB, {from: accounts[4]});
		const addressKuCgoH = await QuickTokeneHmUBfG.mint.call(address5EUF4I, uintFvMtRap, {from: accounts[3]});
		const boolMEpcLld = await QuickTokeneHmUBfG.approve.call(addressSudhASR, uintDx4wXsR, {from: accounts[4]});
		const addresslzu7MVI = await QuickTokeneHmUBfG.setMinter.call(addressmpkKoFm, {from: accounts[4]});

		assert.equal(uintNj8qGpt, BigInt("0"))
		assert.equal(uintjQjhyBb, BigInt("0"))
		await expect(QuickTokeneHmUBfG.mint.call(address5EUF4I, uintFvMtRap, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressijs03IW = accounts[5]
		const addressRYyM1Zy = accounts[3]
		const QuickTokengvmfOJ7 = await QuickToken.new(addressijs03IW, addressRYyM1Zy, {from: "0x0000000000000000000000000000000000000001"});
		const uintyq4ddpw = BigInt("741")
		const addressd9VZBzM = accounts[0]
		const addressqLdndWn = "0x0000000000000000000000000000000000000001"
		const uintAuqBJHH = BigInt("992")
		const addressAAyHNHJ = accounts[4]
		const addressaYMOCv4 = accounts[2]
		const uintvokYL2h = BigInt("1765")
		const addressK3AGfNM = accounts[5]
		const addresspufKcB4 = accounts[5]
		const addressvYiCLLw = await QuickTokengvmfOJ7.mint.call(addressd9VZBzM, uintyq4ddpw, {from: accounts[1]});
		const addressi9Xm4BR = await QuickTokengvmfOJ7.setMinter.call(addressqLdndWn, {from: accounts[2]});
		const bool8exSyC = await QuickTokengvmfOJ7.approve.call(addressAAyHNHJ, uintAuqBJHH, {from: accounts[2]});
		const addressFyLw3fm = await QuickTokengvmfOJ7.setMinter.call(addressaYMOCv4, {from: accounts[0]});
		const addressPmV3C1C = await QuickTokengvmfOJ7.mint.call(addressK3AGfNM, uintvokYL2h, {from: accounts[3]});
		const addressg8oXmMo = await QuickTokengvmfOJ7.setMinter.call(addresspufKcB4, {from: accounts[1]});
	});

	it('test for QuickToken', async () => {
		const addressydWBymh = accounts[2]
		const addressvBzyMFL = accounts[5]
		const QuickTokenHrXqxoy = await QuickToken.new(addressydWBymh, addressvBzyMFL, {from: accounts[5]});
		const addresszaxwPm7 = accounts[1]
		const addressFUIH7WU = accounts[4]
		const addressz1hdYQO = accounts[1]
		const uintaGPhxa4 = BigInt("1542")
		const addressZRnc7BR = accounts[0]
		const uintlErtzj = await QuickTokenHrXqxoy.balanceOf.call(addresszaxwPm7, {from: accounts[5]});
		const uintmgflYb = await QuickTokenHrXqxoy.allowance.call(addressz1hdYQO, addressFUIH7WU, {from: accounts[2]});
		const boolFDuS8N = await QuickTokenHrXqxoy.transfer.call(addressZRnc7BR, uintaGPhxa4, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintlErtzj, BigInt("0"))
		assert.equal(uintmgflYb, BigInt("0"))
		await expect(QuickTokenHrXqxoy.transfer.call(addressZRnc7BR, uintaGPhxa4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressoj9ncSW = accounts[2]
		const addressLstv2FH = accounts[2]
		const QuickTokenMLKLU2H = await QuickToken.new(addressoj9ncSW, addressLstv2FH, {from: accounts[5]});
		const uintnHHkCqu = BigInt("320")
		const addressynvehNX = accounts[4]
		const uintxLf6dzh = BigInt("1755")
		const addressbjNqCUy = accounts[1]
		const uintWfg27B3 = BigInt("676")
		const addressWmfX9L6 = accounts[2]
		const addressntsTElp = accounts[3]
		const boolIt1dwSE = await QuickTokenMLKLU2H.approve.call(addressynvehNX, uintnHHkCqu, {from: accounts[4]});
		const addressdAJShE = await QuickTokenMLKLU2H.mint.call(addressbjNqCUy, uintxLf6dzh, {from: accounts[0]});
		const boolEEJ1VA = await QuickTokenMLKLU2H.approve.call(addressWmfX9L6, uintWfg27B3, {from: accounts[4]});
		const uintqHqUMIj = await QuickTokenMLKLU2H.balanceOf.call(addressntsTElp, {from: accounts[4]});

		assert.equal(boolIt1dwSE, true)
		await expect(QuickTokenMLKLU2H.mint.call(addressbjNqCUy, uintxLf6dzh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressZ3NtTFU = accounts[0]
		const addressiOt8adv = accounts[4]
		const QuickTokensoi4TO = await QuickToken.new(addressZ3NtTFU, addressiOt8adv, {from: accounts[4]});
		const uintdKZNY3Z = BigInt("1807")
		const addressMLfEYLG = accounts[0]
		const addresshXBCmV9 = accounts[4]
		const addressYINMnPa = accounts[0]
		const uinttWbsfXz = BigInt("1667")
		const addressfso9uQn = accounts[5]
		const uintXklXCv = BigInt("28")
		const addressXfmIqYS = accounts[3]
		const uintxxYn2AB = BigInt("1215")
		const addressoNyXKFI = accounts[1]
		const uintnUxZrt8 = BigInt("1660")
		const addressWb3euIn = "0x0000000000000000000000000000000000000001"
		const boolbiV5fL = await QuickTokensoi4TO.transfer.call(addressMLfEYLG, uintdKZNY3Z, {from: accounts[0]});
		const uintoN97Wby = await QuickTokensoi4TO.allowance.call(addressYINMnPa, addresshXBCmV9, {from: accounts[0]});
		const addressaxCL5d = await QuickTokensoi4TO.mint.call(addressfso9uQn, uinttWbsfXz, {from: accounts[1]});
		const boolLjrkBta = await QuickTokensoi4TO.approve.call(addressXfmIqYS, uintXklXCv, {from: accounts[1]});
		const boolskh0E5s = await QuickTokensoi4TO.transfer.call(addressoNyXKFI, uintxxYn2AB, {from: "0x0000000000000000000000000000000000000001"});
		const boolnxQo0nz = await QuickTokensoi4TO.approve.call(addressWb3euIn, uintnUxZrt8, {from: accounts[2]});

		assert.equal(boolbiV5fL, true)
		assert.equal(uintoN97Wby, BigInt("0"))
		await expect(QuickTokensoi4TO.mint.call(addressfso9uQn, uinttWbsfXz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressuE9SNgk = accounts[2]
		const addressNyVg6vm = accounts[2]
		const QuickTokenygQs0fn = await QuickToken.new(addressuE9SNgk, addressNyVg6vm, {from: accounts[2]});
		const addressvtUBWer = accounts[2]
		const addressCnoXQfG = accounts[3]
		const addressKvDeyJS = accounts[2]
		const uintq8Z8p1a = BigInt("1207")
		const addressed9D4tL = accounts[5]
		const uintiaK5p62 = await QuickTokenygQs0fn.allowance.call(addressCnoXQfG, addressvtUBWer, {from: accounts[5]});
		const addressAUBWQdP = await QuickTokenygQs0fn.setMinter.call(addressKvDeyJS, {from: accounts[4]});
		const addressB4QJLtU = await QuickTokenygQs0fn.mint.call(addressed9D4tL, uintq8Z8p1a, {from: accounts[5]});

		assert.equal(uintiaK5p62, BigInt("0"))
		await expect(QuickTokenygQs0fn.setMinter.call(addressKvDeyJS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addresssFMS9W1 = accounts[2]
		const addresspECQ4tR = accounts[2]
		const QuickTokenygQs0fn = await QuickToken.new(addresssFMS9W1, addresspECQ4tR, {from: accounts[2]});
		const addressTme3CBU = accounts[2]
		const addressnIm1ouO = accounts[4]
		const uintZ3ryUjo = BigInt("149")
		const addressaG86ojH = accounts[1]
		const uintiaK5p62 = await QuickTokenygQs0fn.allowance.call(addressnIm1ouO, addressTme3CBU, {from: accounts[5]});
		const addresscaljqcp = await QuickTokenygQs0fn.mint.call(addressaG86ojH, uintZ3ryUjo, {from: accounts[2]});

		assert.equal(uintiaK5p62, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addresssGFgZwa = accounts[2]
		const addressuSlQhW = accounts[2]
		const QuickTokenygQs0fn = await QuickToken.new(addresssGFgZwa, addressuSlQhW, {from: accounts[2]});
		const uintjoMQGaS = BigInt("247")
		const addressjyQpvfa = accounts[4]
		const addresspqKNrLX = accounts[5]
		const uintAkhDO6q = BigInt("986")
		const address76HR2r = accounts[2]
		const addressXD9QcZb = accounts[2]
		const addresscZJ0n03 = accounts[5]
		const boolCqOBxev = await QuickTokenygQs0fn.transferFrom.call(addresspqKNrLX, addressjyQpvfa, uintjoMQGaS, {from: accounts[4]});
		const boolSc5bucQ = await QuickTokenygQs0fn.approve.call(address76HR2r, uintAkhDO6q, {from: accounts[2]});
		const uintiaK5p62 = await QuickTokenygQs0fn.allowance.call(addresscZJ0n03, addressXD9QcZb, {from: accounts[5]});

		await expect(QuickTokenygQs0fn.transferFrom.call(addresspqKNrLX, addressjyQpvfa, uintjoMQGaS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})