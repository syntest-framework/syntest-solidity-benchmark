const Dipex = artifacts.require("Dipex");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dipex', (accounts) => {
	it('test for Dipex', async () => {
		const stringQwV7n4N = "Mr"
		const stringayUmJ7k = "ZqsAvV7hyEEVXJtMSw1qVykTKEMdglgnCv7G23DOtmPqpm8ETjCxRD4PBXQi"
		const uinteDLwirD = BigInt("51")
		const DipexHMuzBr0 = await Dipex.new(stringQwV7n4N, stringayUmJ7k, uinteDLwirD, {from: "0x0000000000000000000000000000000000000001"});
		const uintptGqaJS = BigInt("1467")
		const addressjJEBjq = accounts[4]
		const uintOAIW3eW = BigInt("1474")
		const addressR12J9qi = accounts[1]
		const uintNrD9sX = BigInt("1469")
		const addresshvmegO = accounts[4]
		const uintbPMI2Bl = BigInt("44")
		const addressV8ffW3Y = accounts[1]
		const uintTnMH2Vp = BigInt("179")
		const addressMCuAEhJ = accounts[4]
		const address9mwjox = accounts[2]
		const boolFyU1goy = await DipexHMuzBr0.approve.call(addressjJEBjq, uintptGqaJS, {from: accounts[1]});
		const boolTY5mdzC = await DipexHMuzBr0.approve.call(addressR12J9qi, uintOAIW3eW, {from: accounts[1]});
		const boolpNJi0Uo = await DipexHMuzBr0.approve.call(addresshvmegO, uintNrD9sX, {from: accounts[2]});
		const boolwreJ0r8 = await DipexHMuzBr0.approve.call(addressV8ffW3Y, uintbPMI2Bl, {from: accounts[5]});
		const boolkZF4ZAk = await DipexHMuzBr0.transferFrom.call(address9mwjox, addressMCuAEhJ, uintTnMH2Vp, {from: accounts[2]});
	});

	it('test for Dipex', async () => {
		const stringq0VK0v = "mf3sS6opTdGQocZhgLXX9tVKP"
		const strings2RgE29 = "kjX8m14Nz2BHyEYwBHLQWj7xGfFlxIqzi97395jlImBe8LEdGRoMDSI27MPaXkqzAsptrrI6qV0wcDqEOq2XEKz6IEzAeUah"
		const uintUOJYJd = BigInt("786")
		const Dipexbsv7q7w = await Dipex.new(stringq0VK0v, strings2RgE29, uintUOJYJd, {from: accounts[1]});
		const addressZJsXmbw = accounts[0]
		const uintxIlg8rA = BigInt("431")
		const addressYZANwJ4 = accounts[3]
		const uintBHEGEQ4 = BigInt("738")
		const addressyFOpHT3 = accounts[3]
//		const booliLteIE = await Dipexbsv7q7w.transferownership.call(addressZJsXmbw, {from: accounts[3]});
//		const boolz4fonD = await Dipexbsv7q7w.approve.call(addressYZANwJ4, uintxIlg8rA, {from: accounts[1]});
//		const boolGAZZiZ4 = await Dipexbsv7q7w.approveAndCall.call(addressyFOpHT3, uintBHEGEQ4, {from: accounts[2]});

		await expect(Dipexbsv7q7w.transferownership.call(addressZJsXmbw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringxmBCREz = "WItuPc4OMbRWmj4zelQ4VzeoDXl4xSeAtNQoANw4MMj"
		const stringKPjO656 = "cHR7YGR7nhBforeRSMl3oe7zS2ADgmPy81gYn7BjmLQVdFEJFwTSBayGNnXRtt1AM"
		const uintBXr0tGf = BigInt("459")
		const DipexxxsFlE6 = await Dipex.new(stringxmBCREz, stringKPjO656, uintBXr0tGf, {from: accounts[2]});
		const uintJ7yp0jA = BigInt("176")
		const addresstaD0hD6 = accounts[1]
		const addressf2laKgU = accounts[1]
		const addressaKyEPGS = accounts[4]
		const uinto7sFp1 = BigInt("1412")
		const address3zq0SK = accounts[5]
		const addressqTQ0sVg = accounts[1]
		const uintIqaXzMg = BigInt("1453")
		const addressBHyxZxV = accounts[1]
		const addressXOeWJ7W = accounts[2]
		const boolOESLJTN = await DipexxxsFlE6.approveAndCall.call(addresstaD0hD6, uintJ7yp0jA, {from: accounts[2]});
//		const boolqPhK80c = await DipexxxsFlE6.transferownership.call(addressf2laKgU, {from: accounts[3]});
//		const boolsPPznf = await DipexxxsFlE6.transferownership.call(addressaKyEPGS, {from: accounts[4]});
//		const boolg1eJ6KE = await DipexxxsFlE6.transferFrom.call(addressqTQ0sVg, address3zq0SK, uinto7sFp1, {from: accounts[4]});
//		const boolYGOG6th = await DipexxxsFlE6.approve.call(addressBHyxZxV, uintIqaXzMg, {from: accounts[1]});
//		const booltyU2pd = await DipexxxsFlE6.transferownership.call(addressXOeWJ7W, {from: accounts[1]});

		assert.equal(boolOESLJTN, true)
		await expect(DipexxxsFlE6.transferownership.call(addressf2laKgU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringXoCzgVU = "0uWyMKi"
		const stringTeXVJo1 = "9k6BY5SyX8xO6ywCb4zSLKaPkBKlW71M1G9vnxb8CyYXiioG0lVAsyLR1zf4Q2Tc"
		const uintbCPqvN = BigInt("1040")
		const Dipexjpk5sl = await Dipex.new(stringXoCzgVU, stringTeXVJo1, uintbCPqvN, {from: accounts[1]});
		const uintTgKkFE = BigInt("779")
		const addressoi95kA = accounts[2]
		const uintUC5lXXF = BigInt("1094")
		const addresssYA0Jic = accounts[1]
		const addresskZyx1mE = accounts[3]
		const uintgfWtKa = BigInt("1259")
		const addressOyJ2cG6 = accounts[0]
		const addressVKnrKEp = accounts[4]
		const addresszMwkuUq = accounts[1]
		const uintSIwyWw1 = BigInt("186")
		const addressmdYL8Rq = accounts[4]
		const uintRkWF7W6 = BigInt("1347")
		const addressOvnZNGZ = accounts[4]
		const boola0ZHrP = await Dipexjpk5sl.approveAndCall.call(addressoi95kA, uintTgKkFE, {from: accounts[1]});
//		const boolLPBRDaf = await Dipexjpk5sl.transferFrom.call(addresskZyx1mE, addresssYA0Jic, uintUC5lXXF, {from: accounts[0]});
//		const boolDBzc0bp = await Dipexjpk5sl.transferFrom.call(addressVKnrKEp, addressOyJ2cG6, uintgfWtKa, {from: accounts[5]});
//		const boolcvdKY9h = await Dipexjpk5sl.transferownership.call(addresszMwkuUq, {from: accounts[2]});
//		const boollvqNVuf = await Dipexjpk5sl.approveAndCall.call(addressmdYL8Rq, uintSIwyWw1, {from: accounts[3]});
//		const boolUhK0gcm = await Dipexjpk5sl.approveAndCall.call(addressOvnZNGZ, uintRkWF7W6, {from: accounts[2]});

		assert.equal(boola0ZHrP, true)
		await expect(Dipexjpk5sl.transferFrom.call(addresskZyx1mE, addresssYA0Jic, uintUC5lXXF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringsfcbUDc = "LypI09HhnhXn8ONpjrC7vOT5Kqie6DgMnySBk2UTGrE94MOWGx6A2CbFkKW5pkeuHuRcnX3be5XH3AD"
		const stringsUofeJ5 = "qe5pswiw1F2jyGQqy9LODKMy7mBqlg6yiIq0bNnq6fVWPRhbMHE3Twcua8TboN7zPpo57rqtBreVHaoisYH"
		const uintSxShnNa = BigInt("1792")
		const DipexrPUx7a6 = await Dipex.new(stringsfcbUDc, stringsUofeJ5, uintSxShnNa, {from: accounts[2]});
		const uintD9KxF6F = BigInt("601")
		const addresszYAQuyJ = accounts[1]
		const uintzKUthw = BigInt("1387")
		const addressbaDRPNB = "0x0000000000000000000000000000000000000001"
		const addressCjF7T7d = accounts[4]
		const uintPuRV1w7 = BigInt("1847")
		const addressGxOU83k = accounts[0]
		const uintG2MSj79 = BigInt("1768")
		const addressNp6Omqe = accounts[1]
		const boolts1p2Ph = await DipexrPUx7a6.approve.call(addresszYAQuyJ, uintD9KxF6F, {from: accounts[0]});
		const boolFVFRG3H = await DipexrPUx7a6.approve.call(addressbaDRPNB, uintzKUthw, {from: accounts[0]});
//		const boolnHmEYz = await DipexrPUx7a6.transferownership.call(addressCjF7T7d, {from: accounts[1]});
//		const boolkRW2oC8 = await DipexrPUx7a6.approveAndCall.call(addressGxOU83k, uintPuRV1w7, {from: accounts[0]});
//		const boolbV6JE9p = await DipexrPUx7a6.approveAndCall.call(addressNp6Omqe, uintG2MSj79, {from: accounts[3]});

		assert.equal(boolFVFRG3H, true)
		assert.equal(boolts1p2Ph, true)
		await expect(DipexrPUx7a6.transferownership.call(addressCjF7T7d, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringhi0Ups7 = "XJLwIgBUnixVexYJjANzmpURDUzN62WAvoOscRLvFtS9NCpJfAfi5UmeXHxKrxhj9PCzxwuXQi2ckChW1w0AVSraKvLs2e"
		const stringc3hWb6E = "PvQQucXNV2X8bsECLW3ADScTQu7iWjriehguyN7IOjYf9qnk3IOtvDM"
		const uintaZsYzyH = BigInt("1726")
		const DipexcG2Zo2f = await Dipex.new(stringhi0Ups7, stringc3hWb6E, uintaZsYzyH, {from: accounts[5]});
		const uintO5EubcJ = BigInt("686")
		const addressK0NUfIg = accounts[3]
//		const boolYoW43IR = await DipexcG2Zo2f.transfer.call(addressK0NUfIg, uintO5EubcJ, {from: accounts[0]});

		await expect(DipexcG2Zo2f.transfer.call(addressK0NUfIg, uintO5EubcJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringxmBCREz = "WItuPc4OMbRWmj4zelQ4VzeoDXl4xSeAtNQoANw4MMj"
		const stringKPjO656 = "cHR7YGR7nhBforeRSMl3oe7zS2ADgmPy81gYn7BjmLQVdFEJFwTSBayGNnXRtt1AM"
		const uintuBQK1WS = BigInt("459")
		const DipexxxsFlE6 = await Dipex.new(stringxmBCREz, stringKPjO656, uintuBQK1WS, {from: accounts[2]});
		const uintBwVQsmR = BigInt("373")
		const addressppVqZ6 = accounts[2]
		const uintUFvIBc4 = BigInt("1776")
		const addressuoZPift = accounts[4]
		const uintSCSvxac = BigInt("153")
		const addressWj7Xg41 = accounts[1]
		const addressK3YMSZp = accounts[1]
		const uintorcf9Z = BigInt("1453")
		const addressZiw0qlu = accounts[1]
		const uinthZtT23O = BigInt("1161")
		const addressOuvqPPj = accounts[5]
		const addressZaA8MpJ = accounts[5]
		const addressFd2P4DX = accounts[2]
//		const boolukpHfU9 = await DipexxxsFlE6.transfer.call(addressppVqZ6, uintBwVQsmR, {from: "0x0000000000000000000000000000000000000001"});
//		const boolmqC7EWV = await DipexxxsFlE6.approve.call(addressuoZPift, uintUFvIBc4, {from: accounts[3]});
//		const boolOESLJTN = await DipexxxsFlE6.approveAndCall.call(addressWj7Xg41, uintSCSvxac, {from: accounts[2]});
//		const boolqPhK80c = await DipexxxsFlE6.transferownership.call(addressK3YMSZp, {from: accounts[3]});
//		const boolYGOG6th = await DipexxxsFlE6.approve.call(addressZiw0qlu, uintorcf9Z, {from: accounts[1]});
//		const boolO4Y3ISG = await DipexxxsFlE6.transferFrom.call(addressZaA8MpJ, addressOuvqPPj, uinthZtT23O, {from: accounts[2]});
//		const booltyU2pd = await DipexxxsFlE6.transferownership.call(addressFd2P4DX, {from: accounts[1]});

		await expect(DipexxxsFlE6.transfer.call(addressppVqZ6, uintBwVQsmR, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringZYysSXm = "GR3IVgzrTWhtTMxOnhdRHEoCv2WY"
		const stringrdSmDbK = "tWdm5mlw322eLssdagg2T8r5vVyNULSRB5jj6jQE9AdAbfAfHrJ0dBOYwpKd0tjqHwlOT2Jk6RxPeP59PFiUt2jG5LyRZ6"
		const uintLzj1ajL = BigInt("96")
		const DipexAcOafq6 = await Dipex.new(stringZYysSXm, stringrdSmDbK, uintLzj1ajL, {from: accounts[4]});
		const uintbGLohmw = BigInt("40")
		const addressffhyvFT = accounts[4]
		const addresswxhLb2k = accounts[0]
		const uintI6KWOvm = BigInt("1113")
		const addressboqm78h = accounts[3]
		const uintiUkp2QW = BigInt("1762")
		const addressMrV86yi = accounts[0]
		const addressJXJW7Dn = accounts[4]
		const addressD9dc9Ak = accounts[1]
		const uintnUPVEeJ = BigInt("1230")
		const addressCVRvqUP = accounts[2]
		const boolIftfu8 = await DipexAcOafq6.approveAndCall.call(addressffhyvFT, uintbGLohmw, {from: accounts[4]});
		const boolq0D8XfQ = await DipexAcOafq6.transferownership.call(addresswxhLb2k, {from: accounts[4]});
//		const boolWaw7U1A = await DipexAcOafq6.approveAndCall.call(addressboqm78h, uintI6KWOvm, {from: accounts[3]});
//		const boolSi85xtt = await DipexAcOafq6.transferFrom.call(addressJXJW7Dn, addressMrV86yi, uintiUkp2QW, {from: accounts[4]});
//		const boolRngSZYa = await DipexAcOafq6.transferownership.call(addressD9dc9Ak, {from: accounts[0]});
//		const boolxJs0dJw = await DipexAcOafq6.approveAndCall.call(addressCVRvqUP, uintnUPVEeJ, {from: accounts[5]});

		assert.equal(boolIftfu8, true)
		assert.equal(boolq0D8XfQ, true)
		await expect(DipexAcOafq6.approveAndCall.call(addressboqm78h, uintI6KWOvm, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringZYysSXm = "GR3IVgzrTWhtTMxOnhdRHEoCv2WY"
		const stringrdSmDbK = "tWdm5mlw322eLssdagg2T8r5vVyNULSRB5jj6jQE9AdAbfAfHrJ0dBOYwpKd0tjqHwlOT2Jk6RxPeP59PFiUt2jG5LyRZ6"
		const uintwK1PPrG = BigInt("96")
		const DipexAcOafq6 = await Dipex.new(stringZYysSXm, stringrdSmDbK, uintwK1PPrG, {from: accounts[4]});
		const uintT1zrNB4 = BigInt("0")
		const addressLwbQA9W = accounts[4]
		const boolIftfu8 = await DipexAcOafq6.approveAndCall.call(addressLwbQA9W, uintT1zrNB4, {from: accounts[4]});

		assert.equal(boolIftfu8, true)
	});

	it('test for Dipex', async () => {
		const stringhi0Ups7 = "XJLwIgBUnixVexYJjANzmpURDUzN62WAvoOscRLvFtS9NCpJfAfi5UmeXHxKrxhj9PCzxwuXQi2ckChW1w0AVSraKvLs2e"
		const stringc3hWb6E = "PvQQucXNV2X8bsECLW3ADScTQu7iWjriehguyN7IOjYf9qnk3IOtvDM"
		const uintHVVeli = BigInt("1726")
		const DipexcG2Zo2f = await Dipex.new(stringhi0Ups7, stringc3hWb6E, uintHVVeli, {from: accounts[5]});
		const uintFEai0P8 = BigInt("0")
		const addressEYogNjU = accounts[3]
		const boolYoW43IR = await DipexcG2Zo2f.transfer.call(addressEYogNjU, uintFEai0P8, {from: accounts[0]});

		assert.equal(boolYoW43IR, true)
	});
})