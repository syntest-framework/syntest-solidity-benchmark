const PACT = artifacts.require("PACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PACT', (accounts) => {
	it('test for PACT', async () => {
		const PACTWymDeE = await PACT.new({from: accounts[4]});
		const addressG2E8xNP = accounts[1]
		const addresslwWqw4c = accounts[4]
		const addressMPTamyF = accounts[2]
		const uintdzafn7R = BigInt("1495")
		const addressvQzuTg2 = accounts[4]
		const addressSNTfMJD = accounts[3]
		const uintAlPWaSw = await PACTWymDeE.allowance.call(addresslwWqw4c, addressG2E8xNP, {from: accounts[1]});
		const boolqKcsTp = await PACTWymDeE.setupFarming.call(addressMPTamyF, {from: accounts[5]});
		const boolJZjVMA7 = await PACTWymDeE.transferFrom.call(addressSNTfMJD, addressvQzuTg2, uintdzafn7R, {from: accounts[4]});

		assert.equal(uintAlPWaSw, BigInt("0"))
		await expect(PACTWymDeE.setupFarming.call(addressMPTamyF, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTDXa0Il = await PACT.new({from: accounts[2]});
		const uintVO0cFXS = BigInt("1840")
		const addressrE9WoXx = accounts[4]
		const addressXs4HVBb = "0x0000000000000000000000000000000000000001"
		const uintQVYQzny = BigInt("1931")
		const addressm0ceOh0 = accounts[3]
		const boolZqze1jC = await PACTDXa0Il.transferFrom.call(addressXs4HVBb, addressrE9WoXx, uintVO0cFXS, {from: accounts[1]});
		const uint8aFClJfp = await PACTDXa0Il.decimals.call({from: accounts[0]});
		const boolhpm06q = await PACTDXa0Il.transfer.call(addressm0ceOh0, uintQVYQzny, {from: "0x0000000000000000000000000000000000000001"});

		await expect(PACTDXa0Il.transferFrom.call(addressXs4HVBb, addressrE9WoXx, uintVO0cFXS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTgg1N48W = await PACT.new({from: accounts[5]});
		const addressliCD9yI = accounts[3]
		const addressqCU56xk = accounts[5]
		const uinthkaJ7BU = BigInt("713")
		const addressSznZjK = accounts[3]
		const addressqDR3TrW = accounts[1]
		const uintzL8ujl = await PACTgg1N48W.balanceOf.call(addressliCD9yI, {from: accounts[3]});
		const boolXQKNUqO = await PACTgg1N48W.setupReserve.call(addressqCU56xk, {from: accounts[4]});
		const boolDxYchh9 = await PACTgg1N48W.approve.call(addressSznZjK, uinthkaJ7BU, {from: accounts[1]});
		const uint8yUU0OJf = await PACTgg1N48W.decimals.call({from: accounts[5]});
		const uintcAVqKYD = await PACTgg1N48W.balanceOf.call(addressqDR3TrW, {from: accounts[3]});

		assert.equal(uintzL8ujl, BigInt("0"))
		await expect(PACTgg1N48W.setupReserve.call(addressqCU56xk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTfkWk1zj = await PACT.new({from: accounts[2]});
		const addressBy0IXBq = accounts[0]
		const addresssFxXjh1 = accounts[3]
		const addressqFfYAZt = accounts[5]
		const uinttI7gTRk = await PACTfkWk1zj.balanceOf.call(addressBy0IXBq, {from: accounts[4]});
		const boolFhyFbWg = await PACTfkWk1zj.setupTeam.call(addresssFxXjh1, {from: accounts[4]});
		const boolue8ckBV = await PACTfkWk1zj.setupBasePool.call(addressqFfYAZt, {from: accounts[4]});
		const uint8YSBJMv5 = await PACTfkWk1zj.decimals.call({from: accounts[2]});

		assert.equal(uinttI7gTRk, BigInt("0"))
		await expect(PACTfkWk1zj.setupTeam.call(addresssFxXjh1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTfssYSsr = await PACT.new({from: accounts[1]});
		const addressKZOMlrH = "0x0000000000000000000000000000000000000001"
		const addressZ21zXG = "0x0000000000000000000000000000000000000001"
		const stringlz69xwc = await PACTfssYSsr.symbol.call({from: accounts[5]});
		const uint623Fxu = await PACTfssYSsr.balanceOf.call(addressKZOMlrH, {from: accounts[0]});
		const stringoB4xA7f = await PACTfssYSsr.name.call({from: accounts[1]});
		const boolJ0NIW12 = await PACTfssYSsr.setupTeam.call(addressZ21zXG, {from: accounts[5]});

		assert.equal(stringlz69xwc, "PACT")
		assert.equal(stringoB4xA7f, "P2PB2B community token")
		assert.equal(uint623Fxu, BigInt("0"))
		await expect(PACTfssYSsr.setupTeam.call(addressZ21zXG, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACT0uFX1e = await PACT.new({from: accounts[0]});
		const uintWBL5I3Z = BigInt("805")
		const addressVyU7Al2 = accounts[1]
		const addressHqylekD = accounts[4]
		const uintfHYXkMe = BigInt("1998")
		const addressqBQJnIK = accounts[3]
		const booljYfs2T0 = await PACT0uFX1e.approve.call(addressVyU7Al2, uintWBL5I3Z, {from: accounts[1]});
		const boolTeEMBNa = await PACT0uFX1e.setupReserve.call(addressHqylekD, {from: accounts[5]});
		const booloWXPEd2 = await PACT0uFX1e.burn.call(addressqBQJnIK, uintfHYXkMe, {from: accounts[4]});

		assert.equal(booljYfs2T0, true)
		await expect(PACT0uFX1e.setupReserve.call(addressHqylekD, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTDuytWbW = await PACT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintDnLvdi4 = BigInt("516")
		const addressU57JQHs = accounts[0]
		const addresst3AWeGC = accounts[3]
		const uintI8zeuv7 = BigInt("255")
		const addressjYTeR6M = accounts[2]
		const uintSaEMOxV = BigInt("54")
		const addressxMVZSt = accounts[4]
		const uintRbKWOuL = BigInt("463")
		const addresstDRHwA = accounts[4]
		const addressYQGM1zn = accounts[0]
		const boolzcIGhA3 = await PACTDuytWbW.approve.call(addressU57JQHs, uintDnLvdi4, {from: accounts[1]});
		const boolNxtXDVm = await PACTDuytWbW.setupReserve.call(addresst3AWeGC, {from: accounts[1]});
		const boolHwHomcW = await PACTDuytWbW.transfer.call(addressjYTeR6M, uintI8zeuv7, {from: accounts[2]});
		const boolQS4YInS = await PACTDuytWbW.burn.call(addressxMVZSt, uintSaEMOxV, {from: accounts[3]});
		const stringy5dtwve = await PACTDuytWbW.name.call({from: accounts[3]});
		const boolHh43FrO = await PACTDuytWbW.transferFrom.call(addressYQGM1zn, addresstDRHwA, uintRbKWOuL, {from: accounts[3]});
	});

	it('test for PACT', async () => {
		const PACT0uFX1e = await PACT.new({from: accounts[0]});
		const uintLneB9f = BigInt("805")
		const addresse3xDODt = accounts[1]
		const addressQwLKTC5 = accounts[2]
		const addressqToUZKQ = accounts[3]
		const uintgZ7A8KU = BigInt("1998")
		const addressARfcPp = accounts[3]
		const booljYfs2T0 = await PACT0uFX1e.approve.call(addresse3xDODt, uintLneB9f, {from: accounts[1]});
		const booljSgitKB = await PACT0uFX1e.setupRewards.call(addressQwLKTC5, {from: accounts[3]});
		const boolTeEMBNa = await PACT0uFX1e.setupReserve.call(addressqToUZKQ, {from: accounts[5]});
		const booloWXPEd2 = await PACT0uFX1e.burn.call(addressARfcPp, uintgZ7A8KU, {from: accounts[4]});

		assert.equal(booljYfs2T0, true)
		await expect(PACT0uFX1e.setupRewards.call(addressQwLKTC5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTDXa0Il = await PACT.new({from: accounts[2]});
		const uint8aFClJfp = await PACTDXa0Il.decimals.call({from: accounts[0]});

		assert.equal(uint8aFClJfp, BigInt("18"))
	});

	it('test for PACT', async () => {
		const PACT0uFX1e = await PACT.new({from: accounts[0]});
		const uintvKlbI1X = BigInt("611")
		const addressInua9id = accounts[3]
		const uinteeZkKxY = BigInt("805")
		const addresscUDDObZ = accounts[1]
		const uintoBRamBh = BigInt("1998")
		const addressKWfTbAN = accounts[3]
		const boolvCqvjKl = await PACT0uFX1e.approve.call(addressInua9id, uintvKlbI1X, {from: accounts[3]});
		const booljYfs2T0 = await PACT0uFX1e.approve.call(addresscUDDObZ, uinteeZkKxY, {from: accounts[1]});
		const booloWXPEd2 = await PACT0uFX1e.burn.call(addressKWfTbAN, uintoBRamBh, {from: accounts[4]});

		assert.equal(booljYfs2T0, true)
		assert.equal(boolvCqvjKl, true)
		await expect(PACT0uFX1e.burn.call(addressKWfTbAN, uintoBRamBh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTDXa0Il = await PACT.new({from: accounts[2]});
		const addressvpa7C70 = accounts[4]
		const boolVzemo7u = await PACTDXa0Il.setupBasePool.call(addressvpa7C70, {from: "0x0000000000000000000000000000000000000001"});
		const uint8aFClJfp = await PACTDXa0Il.decimals.call({from: accounts[0]});
		const uintdecAst5 = await PACTDXa0Il.totalSupply.call({from: accounts[4]});

		await expect(PACTDXa0Il.setupBasePool.call(addressvpa7C70, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTDXa0Il = await PACT.new({from: accounts[2]});
		const uintevb47vI = BigInt("1840")
		const addressx6KT1pF = accounts[4]
		const addresspvm0u0Q = "0x0000000000000000000000000000000000000000"
		const boolZqze1jC = await PACTDXa0Il.transferFrom.call(addresspvm0u0Q, addressx6KT1pF, uintevb47vI, {from: accounts[1]});
		const uintS9doORI = await PACTDXa0Il.totalSupply.call({from: accounts[1]});
		const uint8V2259a7 = await PACTDXa0Il.decimals.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(PACTDXa0Il.transferFrom.call(addresspvm0u0Q, addressx6KT1pF, uintevb47vI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACT0uFX1e = await PACT.new({from: accounts[0]});
		const uintjtezePt = BigInt("611")
		const addressRaULHHD = accounts[3]
		const addressS2pXHPy = accounts[0]
		const addressafTg80l = accounts[1]
		const uintJtQeZR = BigInt("1140")
		const addressRxBwdln = accounts[3]
		const uintZ4Ky6s = BigInt("802")
		const addresssk6k4Yc = accounts[1]
		const uintmAskC20 = BigInt("1998")
		const addressHyBarhx = accounts[3]
		const boolvCqvjKl = await PACT0uFX1e.approve.call(addressRaULHHD, uintjtezePt, {from: accounts[3]});
		const uintOzlm0zY = await PACT0uFX1e.allowance.call(addressafTg80l, addressS2pXHPy, {from: accounts[5]});
		const boolIhIfJOQ = await PACT0uFX1e.transfer.call(addressRxBwdln, uintJtQeZR, {from: accounts[0]});
		const booljYfs2T0 = await PACT0uFX1e.approve.call(addresssk6k4Yc, uintZ4Ky6s, {from: accounts[1]});
		const booloWXPEd2 = await PACT0uFX1e.burn.call(addressHyBarhx, uintmAskC20, {from: accounts[4]});

		assert.equal(boolvCqvjKl, true)
		assert.equal(uintOzlm0zY, BigInt("0"))
		await expect(PACT0uFX1e.transfer.call(addressRxBwdln, uintJtQeZR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTDXa0Il = await PACT.new({from: accounts[2]});
		const uintGlVKqXc = await PACTDXa0Il.totalSupply.call({from: accounts[2]});
		const stringbDebkLr = await PACTDXa0Il.name.call({from: accounts[1]});
		const uint8aFClJfp = await PACTDXa0Il.decimals.call({from: accounts[0]});

		assert.equal(stringbDebkLr, "P2PB2B community token")
		assert.equal(uint8aFClJfp, BigInt("18"))
		assert.equal(uintGlVKqXc, BigInt("1000000000000000000000000000"))
	});
})