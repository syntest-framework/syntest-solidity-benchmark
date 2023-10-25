const DSP = artifacts.require("DSP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DSP', (accounts) => {
	it('test for DSP', async () => {
		const DSPmGcZ3R4 = await DSP.new({from: accounts[2]});
		const uintVttYVe9 = BigInt("1163")
		const addressPOP7Wny = accounts[0]
		const boolq8ZIgnU = await DSPmGcZ3R4.burnFrombyOwner.call(addressPOP7Wny, uintVttYVe9, {from: accounts[0]});
		await DSPmGcZ3R4.onlyNewOwner.call({from: accounts[3]});

		await expect(DSPmGcZ3R4.burnFrombyOwner.call(addressPOP7Wny, uintVttYVe9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPfRG2eyo = await DSP.new({from: accounts[0]});
		const addressZcNhXca = accounts[3]
		const uinto3TwuV7 = BigInt("1306")
		const addressl2po4hU = accounts[4]
		const addressFp4SjB = accounts[1]
		const uintAQvh6e2 = BigInt("354")
		const addressXxnJHXJ = accounts[4]
		const addresssdVdzNw = accounts[1]
		const boole7VIbyH = await DSPfRG2eyo.freezeAccount.call(addressZcNhXca, {from: accounts[4]});
		const boolJRyZy7z = await DSPfRG2eyo.decreaseAllowance.call(addressl2po4hU, uinto3TwuV7, {from: accounts[4]});
		const boolw6VyCAM = await DSPfRG2eyo.unfreezeAccount.call(addressFp4SjB, {from: accounts[2]});
		await DSPfRG2eyo.whenNotPaused.call({from: accounts[5]});
		const boolDg8TKGC = await DSPfRG2eyo.transferFrom.call(addresssdVdzNw, addressXxnJHXJ, uintAQvh6e2, {from: accounts[0]});

		await expect(DSPfRG2eyo.freezeAccount.call(addressZcNhXca, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGpjPdi3 = await DSP.new({from: accounts[1]});
		const uintWrdBaQ9 = BigInt("147")
		const addressPbc8IiS = accounts[0]
		const addresshEXTuNv = accounts[5]
		const uintYMA7On = BigInt("682")
		const addressP0y0g0o = accounts[0]
		const addressxM9rL7A = accounts[0]
		const booloUtKpsu = await DSPGpjPdi3.transferFrom.call(addresshEXTuNv, addressPbc8IiS, uintWrdBaQ9, {from: accounts[5]});
		await DSPGpjPdi3.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const boolYkgZhED = await DSPGpjPdi3.transfer.call(addressP0y0g0o, uintYMA7On, {from: accounts[2]});
		const addressbyC9M23 = await DSPGpjPdi3.notFrozen.call(addressxM9rL7A, {from: "0x0000000000000000000000000000000000000001"});
		const uint256BUXCGIB = await DSPGpjPdi3.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(DSPGpjPdi3.transferFrom.call(addresshEXTuNv, addressPbc8IiS, uintWrdBaQ9, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const stringH6Rwj8m = "hDC1WtI1oxdIVuMJ4EGndriWwWTrp3P8L8zIdgHQEsOGjDgEQ9QWrBhAaqIszhOEKCC"
		const stringLWbzGen = "qwKEP6fljBNwW1xyvf6mebaKiNiN2mLfNcnepBn1b3ICB6payW"
		const uintnGsRKw3 = BigInt("221")
		const DSP5E3sFs = await DSP.new(stringH6Rwj8m, stringLWbzGen, uintnGsRKw3, {from: accounts[4]});
		const uintOMLF6Vn = BigInt("655")
		const addressaVFUtWR = accounts[2]
		const addressR0nR4Fr = accounts[2]
		const addressxH2dK50 = accounts[1]
		const boolvgeR55B = await DSP5E3sFs.paused.call({from: accounts[2]});
		const uint8glOFEbt = await DSP5E3sFs.decimals.call({from: accounts[0]});
		await DSP5E3sFs.f.call({from: accounts[2]});
		const boolAQtgQ8A = await DSP5E3sFs.increaseAllowance.call(addressaVFUtWR, uintOMLF6Vn, {from: accounts[5]});
		const uint256pBqtglj = await DSP5E3sFs.allowance.call(addressxH2dK50, addressR0nR4Fr, {from: accounts[2]});
	});

	it('test for DSP', async () => {
		const DSPfBgQ3Tf = await DSP.new({from: accounts[4]});
		const uintdOTX37 = BigInt("1617")
		const addressM4Omge = accounts[2]
		const uint8WOGWdKm = await DSPfBgQ3Tf.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		await DSPfBgQ3Tf.unpause.call({from: accounts[4]});
		const boolh0QG1F = await DSPfBgQ3Tf.approve.call(addressM4Omge, uintdOTX37, {from: accounts[4]});

		assert.equal(uint8WOGWdKm, BigInt("18"))
		await expect(DSPfBgQ3Tf.unpause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPiPd0VTk = await DSP.new({from: "0x0000000000000000000000000000000000000001"});
		const uintbrmfJY = BigInt("947")
		const addressj0wIt3 = accounts[3]
		const uint256SqewE3V = await DSPiPd0VTk.totalSupply.call({from: accounts[1]});
		await DSPiPd0VTk.onlyPauser.call({from: accounts[0]});
		const stringvD2NdpZ = await DSPiPd0VTk.symbol.call({from: accounts[1]});
		const stringtYevDV6 = await DSPiPd0VTk.symbol.call({from: accounts[1]});
		const boolsvUD8wT = await DSPiPd0VTk.transfer.call(addressj0wIt3, uintbrmfJY, {from: accounts[4]});
	});

	it('test for DSP', async () => {
		const DSPfBgQ3Tf = await DSP.new({from: accounts[4]});
		const addressxcTrDmz = accounts[0]
		const uintVSweJKA = BigInt("1617")
		const addressvjGtJXg = accounts[3]
		const uint8WOGWdKm = await DSPfBgQ3Tf.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const addressRJLJESe = await DSPfBgQ3Tf.notFrozen.call(addressxcTrDmz, {from: accounts[1]});
		await DSPfBgQ3Tf.unpause.call({from: accounts[4]});
		const boolh0QG1F = await DSPfBgQ3Tf.approve.call(addressvjGtJXg, uintVSweJKA, {from: accounts[4]});

		assert.equal(uint8WOGWdKm, BigInt("18"))
		await expect(DSPfBgQ3Tf.notFrozen.call(addressxcTrDmz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPfBgQ3Tf = await DSP.new({from: accounts[4]});
		const uintSnhbFW = BigInt("807")
		const addressXiZCpyE = accounts[1]
		const uintxpL20uy = BigInt("1617")
		const addressDDFldhD = accounts[2]
		const uint8WOGWdKm = await DSPfBgQ3Tf.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const boolsllocUc = await DSPfBgQ3Tf.transfer.call(addressXiZCpyE, uintSnhbFW, {from: accounts[1]});
		const boolh0QG1F = await DSPfBgQ3Tf.approve.call(addressDDFldhD, uintxpL20uy, {from: accounts[4]});

		assert.equal(uint8WOGWdKm, BigInt("18"))
		await expect(DSPfBgQ3Tf.transfer.call(addressXiZCpyE, uintSnhbFW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPfBgQ3Tf = await DSP.new({from: accounts[4]});
		const uintW1H0bh = BigInt("97")
		const addressvMycal = accounts[4]
		const uintOIJTt9X = BigInt("807")
		const addressqld6Z4w = accounts[1]
		const addressvZCSyLn = accounts[4]
		const uintZNsban = BigInt("1617")
		const addressrAJwa5 = accounts[2]
		const uint8WOGWdKm = await DSPfBgQ3Tf.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const boolrAVeFT2 = await DSPfBgQ3Tf.approve.call(addressvMycal, uintW1H0bh, {from: accounts[3]});
		const boolsllocUc = await DSPfBgQ3Tf.transfer.call(addressqld6Z4w, uintOIJTt9X, {from: accounts[1]});
		const boolomiHIoS = await DSPfBgQ3Tf.isOwner.call(addressvZCSyLn, {from: accounts[4]});
		const boolh0QG1F = await DSPfBgQ3Tf.approve.call(addressrAJwa5, uintZNsban, {from: accounts[4]});

		assert.equal(boolrAVeFT2, true)
		assert.equal(uint8WOGWdKm, BigInt("18"))
		await expect(DSPfBgQ3Tf.transfer.call(addressqld6Z4w, uintOIJTt9X, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPfBgQ3Tf = await DSP.new({from: accounts[4]});
		const uintYOK7RSm = BigInt("807")
		const addressCeXVWdi = accounts[2]
		const addressTWK8YGg = accounts[2]
		const uintsDArGcO = BigInt("1617")
		const addressCuD9Me = accounts[2]
		const uint8WOGWdKm = await DSPfBgQ3Tf.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const stringbjr62Be = await DSPfBgQ3Tf.symbol.call({from: accounts[3]});
		const boolsllocUc = await DSPfBgQ3Tf.transfer.call(addressCeXVWdi, uintYOK7RSm, {from: accounts[1]});
		const boolrP8A5ir = await DSPfBgQ3Tf.isPauser.call(addressTWK8YGg, {from: accounts[0]});
		const boolh0QG1F = await DSPfBgQ3Tf.approve.call(addressCuD9Me, uintsDArGcO, {from: accounts[4]});

		assert.equal(stringbjr62Be, "DSP")
		assert.equal(uint8WOGWdKm, BigInt("18"))
		await expect(DSPfBgQ3Tf.transfer.call(addressCeXVWdi, uintYOK7RSm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPfBgQ3Tf = await DSP.new({from: accounts[4]});
		const uintRIKl7P = BigInt("269")
		const addressTFVybsI = accounts[0]
		const uintstlE7xy = BigInt("33")
		const addressdUOXSZ = "0x0000000000000000000000000000000000000001"
		const addressxaPf04D = "0x0000000000000000000000000000000000000001"
		const uintAhrL9L = BigInt("1617")
		const addressuQ7HQV0 = accounts[2]
		const boolYgKqzO = await DSPfBgQ3Tf.decreaseAllowance.call(addressTFVybsI, uintRIKl7P, {from: accounts[4]});
		const uint8WOGWdKm = await DSPfBgQ3Tf.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const boolZpmsaX = await DSPfBgQ3Tf.transferFrom.call(addressxaPf04D, addressdUOXSZ, uintstlE7xy, {from: accounts[4]});
		const boolh0QG1F = await DSPfBgQ3Tf.approve.call(addressuQ7HQV0, uintAhrL9L, {from: accounts[4]});
		await DSPfBgQ3Tf.whenNotPaused.call({from: accounts[0]});

		await expect(DSPfBgQ3Tf.decreaseAllowance.call(addressTFVybsI, uintRIKl7P, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPfBgQ3Tf = await DSP.new({from: accounts[4]});
		const addressveq757H = accounts[3]
		const uint256eTc6vGQ = await DSPfBgQ3Tf.balanceOf.call(addressveq757H, {from: accounts[4]});
		const uint8WOGWdKm = await DSPfBgQ3Tf.decimals.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256eTc6vGQ, BigInt("0"))
		assert.equal(uint8WOGWdKm, BigInt("18"))
	});

	it('test for DSP', async () => {
		const DSPfBgQ3Tf = await DSP.new({from: accounts[4]});
		const uinteztZ3w = BigInt("26")
		const addressuKA3oAD = "0x0000000000000000000000000000000000000001"
		const addressPFE0HJz = "0x0000000000000000000000000000000000000001"
		const boolWkTBESN = await DSPfBgQ3Tf.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const boolZpmsaX = await DSPfBgQ3Tf.transferFrom.call(addressPFE0HJz, addressuKA3oAD, uinteztZ3w, {from: accounts[4]});

		assert.equal(boolWkTBESN, false)
		await expect(DSPfBgQ3Tf.transferFrom.call(addressPFE0HJz, addressuKA3oAD, uinteztZ3w, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPlXOFlvA = await DSP.new({from: accounts[4]});
		const addressq6zCtOx = accounts[0]
		const addressr7ivg6 = accounts[0]
		const addresso7u5Wbe = accounts[4]
		const uintzn59q5 = BigInt("1987")
		const addressGJBEPXJ = accounts[3]
		const addressn95FWvL = accounts[0]
		const uintANpIrW = BigInt("436")
		const addressyyicKpo = accounts[4]
		const uint256oMxDQOz = await DSPlXOFlvA.balanceOf.call(addressq6zCtOx, {from: accounts[3]});
		const uint256Q0KUPIc = await DSPlXOFlvA.allowance.call(addresso7u5Wbe, addressr7ivg6, {from: accounts[0]});
		const boolCdDxCZA = await DSPlXOFlvA.increaseAllowance.call(addressGJBEPXJ, uintzn59q5, {from: accounts[1]});
		const addressFIygcz0 = await DSPlXOFlvA.removePauser.call(addressn95FWvL, {from: accounts[5]});
		const boolQY2RLOM = await DSPlXOFlvA.decreaseAllowance.call(addressyyicKpo, uintANpIrW, {from: accounts[0]});

		assert.equal(boolCdDxCZA, true)
		assert.equal(uint256Q0KUPIc, BigInt("0"))
		assert.equal(uint256oMxDQOz, BigInt("0"))
		await expect(DSPlXOFlvA.removePauser.call(addressn95FWvL, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPfBgQ3Tf = await DSP.new({from: accounts[4]});
		const uintujdVxG = BigInt("807")
		const addressN0Rq2CQ = accounts[2]
		const stringN0LGk7w = await DSPfBgQ3Tf.name.call({from: accounts[4]});
		const uint8WOGWdKm = await DSPfBgQ3Tf.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const boolsllocUc = await DSPfBgQ3Tf.transfer.call(addressN0Rq2CQ, uintujdVxG, {from: accounts[1]});

		assert.equal(stringN0LGk7w, "DSP")
		assert.equal(uint8WOGWdKm, BigInt("18"))
		await expect(DSPfBgQ3Tf.transfer.call(addressN0Rq2CQ, uintujdVxG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPfBgQ3Tf = await DSP.new({from: accounts[4]});
		const uintFO5rEIz = BigInt("33")
		const addressjuwQL0 = "0x0000000000000000000000000000000000000002"
		const addressAbbd7ue = "0x0000000000000000000000000000000000000001"
		const uintFCt3Gp1 = BigInt("426")
		const uintESZUPkN = BigInt("602")
		const addressTImtL43 = accounts[4]
		await DSPfBgQ3Tf.f.call({from: accounts[2]});
		const boolZpmsaX = await DSPfBgQ3Tf.transferFrom.call(addressAbbd7ue, addressjuwQL0, uintFO5rEIz, {from: accounts[4]});
		const boolkTSqEkX = await DSPfBgQ3Tf.transferWithLock.call(addressTImtL43, uintESZUPkN, uintFCt3Gp1, {from: accounts[0]});

		await expect(DSPfBgQ3Tf.f.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPfBgQ3Tf = await DSP.new({from: accounts[4]});
		const addressIqCU3zE = accounts[4]
		const addressRnWH87 = accounts[4]
		const uint256eTc6vGQ = await DSPfBgQ3Tf.balanceOf.call(addressIqCU3zE, {from: accounts[4]});
		const stringaN7KCv7 = await DSPfBgQ3Tf.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolWf4PKdo = await DSPfBgQ3Tf.isOwner.call(addressRnWH87, {from: accounts[2]});

		assert.equal(boolWf4PKdo, true)
		assert.equal(stringaN7KCv7, "DSP")
		assert.equal(uint256eTc6vGQ, BigInt("100000000000000000000000000000"))
	});

	it('test for DSP', async () => {
		const DSPfBgQ3Tf = await DSP.new({from: accounts[4]});
		const addressUbzTRFN = accounts[0]
		const uintiZJRjvI = BigInt("33")
		const addressZ9YA42P = "0x0000000000000000000000000000000000000001"
		const address11C1Fl = "0x0000000000000000000000000000000000000001"
		const addressaRNraap = accounts[4]
		const boolFODTG3Z = await DSPfBgQ3Tf.isOwner.call(addressUbzTRFN, {from: accounts[1]});
		const uint256Fb0tRj8 = await DSPfBgQ3Tf.totalSupply.call({from: accounts[1]});
		const boolZpmsaX = await DSPfBgQ3Tf.transferFrom.call(address11C1Fl, addressZ9YA42P, uintiZJRjvI, {from: accounts[4]});
		const uint256v0VuKQE = await DSPfBgQ3Tf.totalSupply.call({from: accounts[4]});
		const addressAcOC5LS = await DSPfBgQ3Tf.upgradeTo.call(addressaRNraap, {from: accounts[1]});

		assert.equal(boolFODTG3Z, false)
		assert.equal(uint256Fb0tRj8, BigInt("100000000000000000000000000000"))
		await expect(DSPfBgQ3Tf.transferFrom.call(address11C1Fl, addressZ9YA42P, uintiZJRjvI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPfBgQ3Tf = await DSP.new({from: accounts[4]});
		const addressQHarCU = accounts[4]
		const uint256eTc6vGQ = await DSPfBgQ3Tf.balanceOf.call(addressQHarCU, {from: accounts[4]});
		await DSPfBgQ3Tf.pause.call({from: accounts[4]});

		assert.equal(uint256eTc6vGQ, BigInt("100000000000000000000000000000"))
		await expect(DSPfBgQ3Tf.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPmGcZ3R4 = await DSP.new({from: accounts[2]});
		const addressiGhJyyZ = accounts[1]
		const addressymsLdlu = await DSPmGcZ3R4.addPauser.call(addressiGhJyyZ, {from: accounts[2]});
		await DSPmGcZ3R4.onlyNewOwner.call({from: accounts[3]});

		await expect(DSPmGcZ3R4.onlyNewOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPCDdwpS4 = await DSP.new({from: accounts[3]});
		const uintw2PzTym = BigInt("1870")
		const addressowglB9t = accounts[4]
		const boolVKPqYHg = await DSPCDdwpS4.burnFrombyOwner.call(addressowglB9t, uintw2PzTym, {from: accounts[3]});
		const uint256gYANgHq = await DSPCDdwpS4.totalSupply.call({from: accounts[3]});
		const boolOkn0sm6 = await DSPCDdwpS4.paused.call({from: accounts[4]});

		await expect(DSPCDdwpS4.burnFrombyOwner.call(addressowglB9t, uintw2PzTym, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPfBgQ3Tf = await DSP.new({from: accounts[4]});
		const addressnoCFs8w = accounts[4]
		const addresssNhbc0y = accounts[1]
		const addresscLNO0xV = accounts[1]
		const addressxC38MYy = accounts[1]
		const uint256eTc6vGQ = await DSPfBgQ3Tf.balanceOf.call(addressnoCFs8w, {from: accounts[4]});
		const boolrCGQOc = await DSPfBgQ3Tf.unfreezeAccount.call(addresssNhbc0y, {from: accounts[4]});
		const booljbEKe5 = await DSPfBgQ3Tf.isPauser.call(addresscLNO0xV, {from: "0x0000000000000000000000000000000000000001"});
		const boolprrB9iG = await DSPfBgQ3Tf.paused.call({from: accounts[5]});
		const uint256Qnd0Xd9 = await DSPfBgQ3Tf.balanceOf.call(addressxC38MYy, {from: accounts[4]});

		assert.equal(uint256eTc6vGQ, BigInt("100000000000000000000000000000"))
		await expect(DSPfBgQ3Tf.unfreezeAccount.call(addresssNhbc0y, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPfBgQ3Tf = await DSP.new({from: accounts[4]});
		const uintMnAwsaO = BigInt("1807")
		const addressL7TcAK = accounts[1]
		const addressVuqtN3b = accounts[4]
		await DSPfBgQ3Tf.renouncePauser.call({from: accounts[3]});
		const bools83jBh5 = await DSPfBgQ3Tf.mint.call(addressL7TcAK, uintMnAwsaO, {from: accounts[0]});
		const uint256eTc6vGQ = await DSPfBgQ3Tf.balanceOf.call(addressVuqtN3b, {from: accounts[4]});

		await expect(DSPfBgQ3Tf.renouncePauser.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPfBgQ3Tf = await DSP.new({from: accounts[4]});
		const uintSGkcv9y = BigInt("873")
		const addressXRaoxG4 = accounts[5]
		const uintdVsQlsJ = BigInt("823")
		const uintchMJ6ds = BigInt("1493")
		const addressTp92t2r = accounts[0]
		const addressUTZKC0 = accounts[4]
		const addressq3pqWst = accounts[3]
		const boolJYkXVot = await DSPfBgQ3Tf.mint.call(addressXRaoxG4, uintSGkcv9y, {from: accounts[4]});
		const boolcUSbXtq = await DSPfBgQ3Tf.lock.call(addressTp92t2r, uintchMJ6ds, uintdVsQlsJ, {from: accounts[1]});
		const uint256mo1euTQ = await DSPfBgQ3Tf.allowance.call(addressq3pqWst, addressUTZKC0, {from: accounts[0]});

		assert.equal(boolJYkXVot, true)
		await expect(DSPfBgQ3Tf.lock.call(addressTp92t2r, uintchMJ6ds, uintdVsQlsJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPmGcZ3R4 = await DSP.new({from: accounts[2]});
		const uintMn7KQZ = BigInt("522")
		const addressILBzbaS = "0x0000000000000000000000000000000000000001"
		const addressGJzdbVp = accounts[1]
		const boolAV3tbpR = await DSPmGcZ3R4.approve.call(addressILBzbaS, uintMn7KQZ, {from: accounts[3]});
		const addressMrqTIpP = await DSPmGcZ3R4.removePauser.call(addressGJzdbVp, {from: accounts[2]});
		await DSPmGcZ3R4.onlyNewOwner.call({from: accounts[3]});

		assert.equal(boolAV3tbpR, true)
		await expect(DSPmGcZ3R4.removePauser.call(addressGJzdbVp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPfBgQ3Tf = await DSP.new({from: accounts[4]});
		const addressVBrXQH2 = accounts[0]
		const addressxHljZA = accounts[4]
		const addressp2Px9ne = await DSPfBgQ3Tf.upgradeTo.call(addressVBrXQH2, {from: accounts[4]});
		const uint256eTc6vGQ = await DSPfBgQ3Tf.balanceOf.call(addressxHljZA, {from: accounts[4]});

		assert.equal(uint256eTc6vGQ, BigInt("100000000000000000000000000000"))
	});
})