const WOLF = artifacts.require("WOLF");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WOLF', (accounts) => {
	it('test for WOLF', async () => {
		const stringD9dfGB = "oIXkDVE28q5"
		const stringBMJogOk = "bLFKeL3OsBh2kYdJ5AzOulpeap98cB1JhxSSnQ63kKvGxQ4x6iFQKR3o3XUzn1qmy"
		const uintyLK1Y1D = BigInt("978")
		const WOLFqQhFHNF = await WOLF.new(stringD9dfGB, stringBMJogOk, uintyLK1Y1D, {from: accounts[5]});
		const uinthfOtXVb = BigInt("925")
		const addressakMyruB = accounts[0]
		const addressPeeyA5a = accounts[1]
		const uintHRNs1w = BigInt("1730")
		const addressgq4obMs = accounts[3]
		const addressIxrIPO = accounts[1]
		const uintz5si8c = BigInt("585")
		const addressOcHBgSr = accounts[1]
		const uintkm9neQo = BigInt("582")
		const addresseirxYMc = accounts[2]
		const addressLhGeUNR = accounts[4]
		const boolqocjge = await WOLFqQhFHNF.transferFrom.call(addressPeeyA5a, addressakMyruB, uinthfOtXVb, {from: accounts[2]});
		const boolVX0NT9T = await WOLFqQhFHNF.transferFrom.call(addressIxrIPO, addressgq4obMs, uintHRNs1w, {from: accounts[1]});
		const boolq4Tz9LR = await WOLFqQhFHNF.approveAndCall.call(addressOcHBgSr, uintz5si8c, {from: "0x0000000000000000000000000000000000000001"});
		const boolq1DGAG3 = await WOLFqQhFHNF.transferFrom.call(addressLhGeUNR, addresseirxYMc, uintkm9neQo, {from: accounts[4]});

		await expect(WOLFqQhFHNF.transferFrom.call(addressPeeyA5a, addressakMyruB, uinthfOtXVb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringv6x97oM = "ej1hSzaf6BzDg1kFdHe"
		const stringKXcCI8d = "wpXSfq6liQW7dgAGzrQ7VjawmP3tWjTCJhG7D5TYLewQiuzG8Wxxn80MqfBcwLTbzOEj5G2SjzB3nuo4ttJu6VULevi1mjup"
		const uintELVkCBL = BigInt("793")
		const WOLFft3S64 = await WOLF.new(stringv6x97oM, stringKXcCI8d, uintELVkCBL, {from: accounts[1]});
		const uintQIXQYI8 = BigInt("1203")
		const addressXteVf4 = accounts[5]
		const uintx76wuUH = BigInt("686")
		const addressf5MRKBJ = accounts[3]
		const uintb6yUz6P = BigInt("1266")
		const addressXu6pPIs = accounts[1]
		const uintiGQGyve = BigInt("1371")
		const addressvU8GQc0 = accounts[4]
		const address4hIwC1 = accounts[1]
		const boolktiokhr = await WOLFft3S64.approve.call(addressXteVf4, uintQIXQYI8, {from: accounts[3]});
		const boolxcaYa6g = await WOLFft3S64.approveAndCall.call(addressf5MRKBJ, uintx76wuUH, {from: accounts[3]});
		const boolV9wtyAj = await WOLFft3S64.approveAndCall.call(addressXu6pPIs, uintb6yUz6P, {from: accounts[2]});
		const boolKyHYeij = await WOLFft3S64.approve.call(addressvU8GQc0, uintiGQGyve, {from: accounts[0]});
		const boolOFmEto = await WOLFft3S64.transferownership.call(address4hIwC1, {from: accounts[2]});

		assert.equal(boolktiokhr, true)
		await expect(WOLFft3S64.approveAndCall.call(addressf5MRKBJ, uintx76wuUH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringrvDEd6v = "9OdUP3r7RknP9lT5zCIFDOmORAUZ7Ca4CAMMWKGfBg26NkngHm90XSCICUfDeRGjmCG"
		const stringAdXdUK = "UgezSeMH1E4YN04uVwbn1c9e2ZuMLQWGLIR6JkQc7CN"
		const uintCGJwjaC = BigInt("1638")
		const WOLFKp2DC7 = await WOLF.new(stringrvDEd6v, stringAdXdUK, uintCGJwjaC, {from: "0x0000000000000000000000000000000000000001"});
		const uintIFgyGcw = BigInt("1566")
		const addressEoSFvmL = accounts[0]
		const uintOMpOwS = BigInt("205")
		const addressulzWYXJ = accounts[0]
		const uintrXZOxMm = BigInt("1217")
		const addressgRRhCbq = accounts[5]
		const addressn5Cl2zu = accounts[1]
		const addressjRXavOi = accounts[5]
		const boolFqpQewM = await WOLFKp2DC7.approveAndCall.call(addressEoSFvmL, uintIFgyGcw, {from: accounts[2]});
		const boolmSDPUc = await WOLFKp2DC7.transfer.call(addressulzWYXJ, uintOMpOwS, {from: accounts[0]});
		const boolOaKZPHe = await WOLFKp2DC7.transferFrom.call(addressn5Cl2zu, addressgRRhCbq, uintrXZOxMm, {from: accounts[1]});
		const boolBfGa2gA = await WOLFKp2DC7.transferownership.call(addressjRXavOi, {from: accounts[3]});
	});

	it('test for WOLF', async () => {
		const stringnu1w7id = "tALeYPL6qFXmX1DEp4UPKKh84L3T3xE5PpdfxSgP4FOMCbt"
		const stringwcl6REY = "Vd9anEaF8e2sRIHn6NZW9NksEBIxz7JAKjYfXyTfdDM5iaoMOD5nqJt4NQprUjiFMTEtTJ7QE5ulu2ZWf"
		const uintjBCGarb = BigInt("365")
		const WOLFrWOoD2Z = await WOLF.new(stringnu1w7id, stringwcl6REY, uintjBCGarb, {from: accounts[1]});
		const uintl5qLqfv = BigInt("592")
		const addressPmGhey = accounts[3]
		const uintAXA29Ci = BigInt("1282")
		const addressrkmWSrJ = accounts[3]
		const uintFEnhjYf = BigInt("1810")
		const addressOWpWq2v = accounts[4]
		const uintagSiD40 = BigInt("418")
		const addressB0BDuvE = accounts[0]
		const addressMWEDKdK = accounts[0]
		const boolzAFoXQh = await WOLFrWOoD2Z.approveAndCall.call(addressPmGhey, uintl5qLqfv, {from: accounts[1]});
		const boolhwhn4Cp = await WOLFrWOoD2Z.transfer.call(addressrkmWSrJ, uintAXA29Ci, {from: accounts[4]});
		const boolRwyrlWB = await WOLFrWOoD2Z.approveAndCall.call(addressOWpWq2v, uintFEnhjYf, {from: accounts[1]});
		const boolw9VH74V = await WOLFrWOoD2Z.transferFrom.call(addressMWEDKdK, addressB0BDuvE, uintagSiD40, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolzAFoXQh, true)
		await expect(WOLFrWOoD2Z.transfer.call(addressrkmWSrJ, uintAXA29Ci, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringnu1w7id = "tALeYPL6qFXmX1DEp4UPKKh84L3T3xE5PpdfxSgP4FOMCbt"
		const stringwcl6REY = "Vd9anEaF8e2sRIHn6NZW9NksEBIxz7JAKjYfXyTfdDM5iaoMOD5nqJt4NQprUjiFMTEtTJ7QE5ulu2ZWf"
		const uintZ918jVi = BigInt("365")
		const WOLFrWOoD2Z = await WOLF.new(stringnu1w7id, stringwcl6REY, uintZ918jVi, {from: accounts[1]});
		const uintx8tKyD = BigInt("592")
		const addressckdXrEz = accounts[3]
		const uint84YCS6 = BigInt("1197")
		const addresslnbopBV = accounts[5]
		const uintOZnCFBn = BigInt("111")
		const addressnGVuxkm = accounts[3]
		const uintNwNg51 = BigInt("1394")
		const addressG40nMri = accounts[5]
		const addressGTB4HUM = "0x0000000000000000000000000000000000000001"
		const uintNf4soYM = BigInt("1810")
		const addressWsrIdGB = accounts[4]
		const uintbsHkUUl = BigInt("418")
		const addressNtkVV8J = accounts[0]
		const addressHSerzkf = accounts[0]
		const boolzAFoXQh = await WOLFrWOoD2Z.approveAndCall.call(addressckdXrEz, uintx8tKyD, {from: accounts[1]});
		const boold8bg3Y0 = await WOLFrWOoD2Z.transfer.call(addresslnbopBV, uint84YCS6, {from: accounts[1]});
		const boolhwhn4Cp = await WOLFrWOoD2Z.transfer.call(addressnGVuxkm, uintOZnCFBn, {from: accounts[4]});
		const boolB6I6vmw = await WOLFrWOoD2Z.transferFrom.call(addressGTB4HUM, addressG40nMri, uintNwNg51, {from: accounts[4]});
		const boolRwyrlWB = await WOLFrWOoD2Z.approveAndCall.call(addressWsrIdGB, uintNf4soYM, {from: accounts[1]});
		const boolw9VH74V = await WOLFrWOoD2Z.transferFrom.call(addressHSerzkf, addressNtkVV8J, uintbsHkUUl, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boold8bg3Y0, true)
		assert.equal(boolzAFoXQh, true)
		await expect(WOLFrWOoD2Z.transfer.call(addressnGVuxkm, uintOZnCFBn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringnu1w7id = "tALeYPL6qFXmX1DEp4UPKKh84L3T3xE5PpdfxSgP4FOMCbt"
		const stringwcl6REY = "Vd9anEaF8e2sRIHn6NZW9NksEBIxz7JAKjYfXyTfdDM5iaoMOD5nqJt4NQprUjiFMTEtTJ7QE5ulu2ZWf"
		const uintCJqdX8w = BigInt("365")
		const WOLFrWOoD2Z = await WOLF.new(stringnu1w7id, stringwcl6REY, uintCJqdX8w, {from: accounts[1]});
		const uintpN8u0o = BigInt("588")
		const addressJh6epW = accounts[3]
		const uintz0pSKzI = BigInt("798")
		const addressH5ovKot = accounts[3]
		const addressjVPxdlO = accounts[3]
		const uintGHMrhRz = BigInt("1282")
		const addresswDZZI2 = accounts[3]
		const uintYvPKHt = BigInt("1810")
		const addressD7qS6oV = accounts[4]
		const boolzAFoXQh = await WOLFrWOoD2Z.approveAndCall.call(addressJh6epW, uintpN8u0o, {from: accounts[1]});
		const boolKn8HMaV = await WOLFrWOoD2Z.approve.call(addressH5ovKot, uintz0pSKzI, {from: accounts[5]});
		const boolutLuFNq = await WOLFrWOoD2Z.transferownership.call(addressjVPxdlO, {from: accounts[0]});
		const boolhwhn4Cp = await WOLFrWOoD2Z.transfer.call(addresswDZZI2, uintGHMrhRz, {from: accounts[4]});
		const boolRwyrlWB = await WOLFrWOoD2Z.approveAndCall.call(addressD7qS6oV, uintYvPKHt, {from: accounts[1]});

		assert.equal(boolKn8HMaV, true)
		assert.equal(boolzAFoXQh, true)
		await expect(WOLFrWOoD2Z.transferownership.call(addressjVPxdlO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringE93XaKi = "ACoKeB1hD3e5wdEcSUd1Iayd3HqIvafr2TEW9vsNGM5kiVjPQCqy84lO31YZYw1HxxfO4v7S"
		const stringrvGWOsa = "K21MD8D3NDAlkzWHq3x0fQNdGRfgyrRTzsDT"
		const uintkOap9YK = BigInt("860")
		const WOLFcoqn0nC = await WOLF.new(stringE93XaKi, stringrvGWOsa, uintkOap9YK, {from: accounts[3]});
		const uintMiWuuY = BigInt("1488")
		const addressFdtu5S = accounts[2]
		const addressT9fnZvs = accounts[4]
		const uinttSupHeY = BigInt("1013")
		const addressBDHzURO = accounts[2]
		const addressVlGcb2h = accounts[3]
		const uintm06QGlg = BigInt("98")
		const addressavGryG1 = accounts[3]
		const addresspzABnyg = accounts[4]
		const boolASKBdwW = await WOLFcoqn0nC.approveAndCall.call(addressFdtu5S, uintMiWuuY, {from: accounts[3]});
		const boolOapdCgm = await WOLFcoqn0nC.transferownership.call(addressT9fnZvs, {from: accounts[3]});
		const boolbn4cTon = await WOLFcoqn0nC.approveAndCall.call(addressBDHzURO, uinttSupHeY, {from: accounts[2]});
		const boolaCJMpuR = await WOLFcoqn0nC.transferownership.call(addressVlGcb2h, {from: accounts[4]});
		const boolTRKGiEK = await WOLFcoqn0nC.transferFrom.call(addresspzABnyg, addressavGryG1, uintm06QGlg, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolASKBdwW, true)
		assert.equal(boolOapdCgm, true)
		await expect(WOLFcoqn0nC.approveAndCall.call(addressBDHzURO, uinttSupHeY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringnu1w7id = "tALeYPL6qFXmX1DEp4UPKKh84L3T3xE5PpdfxSgP4FOMCbt"
		const stringwcl6REY = "Vd9anEaF8e2sRIHn6NZW9NksEBIxz7JAKjYfXyTfdDM5iaoMOD5nqJt4NQprUjiFMTEtTJ7QE5ulu2ZWf"
		const uintkuUjhLX = BigInt("365")
		const WOLFrWOoD2Z = await WOLF.new(stringnu1w7id, stringwcl6REY, uintkuUjhLX, {from: accounts[1]});
		const uintHDXuuKy = BigInt("0")
		const addressOddwtzK = accounts[4]
		const boolrFjYdWj = await WOLFrWOoD2Z.transfer.call(addressOddwtzK, uintHDXuuKy, {from: accounts[3]});

		assert.equal(boolrFjYdWj, true)
	});

	it('test for WOLF', async () => {
		const stringnu1w7id = "tALeYPL6qFXmX1DEp4UPKKh84L3T3xE5PpdfxSgP4FOMCbt"
		const stringwcl6REY = "Vd9anEaF8e2sRIHn6NZW9NksEBIxz7JAKjYfXyTfdDM5iaoMOD5nqJt4NQprUjiFMTEtTJ7QE5ulu2ZWf"
		const uintdbeivg = BigInt("365")
		const WOLFrWOoD2Z = await WOLF.new(stringnu1w7id, stringwcl6REY, uintdbeivg, {from: accounts[1]});
		const uintSmg2UIl = BigInt("0")
		const addressKrIi0p = accounts[6]
		const boolRwyrlWB = await WOLFrWOoD2Z.approveAndCall.call(addressKrIi0p, uintSmg2UIl, {from: accounts[1]});

		assert.equal(boolRwyrlWB, true)
	});
})