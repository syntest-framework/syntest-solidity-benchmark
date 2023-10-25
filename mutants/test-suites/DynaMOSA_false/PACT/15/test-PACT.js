const PACT = artifacts.require("PACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PACT', (accounts) => {
	it('test for PACT', async () => {
		const PACTxDmtsNv = await PACT.new({from: accounts[0]});
		const addressoRNBz1j = accounts[2]
		const addressgyeLMGH = accounts[3]
		const addressDH0e1Y1 = accounts[4]
//		const boolbmPfqM0 = await PACTxDmtsNv.setupBasePool.call(addressoRNBz1j, {from: accounts[2]});
//		const boolcriL6N3 = await PACTxDmtsNv.setupBasePool.call(addressgyeLMGH, {from: accounts[2]});
//		const boolMrXFnR1 = await PACTxDmtsNv.setupReserve.call(addressDH0e1Y1, {from: accounts[3]});

		await expect(PACTxDmtsNv.setupBasePool.call(addressoRNBz1j, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTN8EKEIP = await PACT.new({from: accounts[4]});
		const addressrMuRIRI = accounts[0]
		const addressGPIpK7v = accounts[1]
//		const boolS0uCzsL = await PACTN8EKEIP.setupFarming.call(addressrMuRIRI, {from: accounts[0]});
//		const uint8qvEp6ZM = await PACTN8EKEIP.decimals.call({from: accounts[3]});
//		const uintjO42EKs = await PACTN8EKEIP.balanceOf.call(addressGPIpK7v, {from: accounts[3]});
//		const uint8uxofqz = await PACTN8EKEIP.decimals.call({from: accounts[3]});

		await expect(PACTN8EKEIP.setupFarming.call(addressrMuRIRI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTNPKr7ei = await PACT.new({from: accounts[2]});
		const addressQZij7Cx = accounts[3]
		const uintzqv0dJI = BigInt("1116")
		const addressQNP2l77 = accounts[0]
		const uint8o8d6eOu = await PACTNPKr7ei.decimals.call({from: accounts[2]});
		const stringoUxOsL = await PACTNPKr7ei.name.call({from: accounts[2]});
		const uint8Co7zy1A = await PACTNPKr7ei.decimals.call({from: accounts[0]});
//		const boolb6NETmk = await PACTNPKr7ei.setupBasePool.call(addressQZij7Cx, {from: accounts[5]});
//		const boolzjdxJkb = await PACTNPKr7ei.approve.call(addressQNP2l77, uintzqv0dJI, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringoUxOsL, "P2PB2B community token")
		assert.equal(uint8Co7zy1A, BigInt("18"))
		assert.equal(uint8o8d6eOu, BigInt("18"))
		await expect(PACTNPKr7ei.setupBasePool.call(addressQZij7Cx, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTaNtUPMp = await PACT.new({from: accounts[1]});
		const uintXJ0TKKc = BigInt("590")
		const addressK7NYBGQ = accounts[4]
		const uintPr7rKKt = BigInt("904")
		const addressIMCaBF = accounts[0]
		const addressGauoNqP = accounts[4]
//		const boolRLBIN44 = await PACTaNtUPMp.transfer.call(addressK7NYBGQ, uintXJ0TKKc, {from: accounts[1]});
//		const boolBY4l3xc = await PACTaNtUPMp.transferFrom.call(addressGauoNqP, addressIMCaBF, uintPr7rKKt, {from: accounts[4]});
//		const uint8k1Y04gi = await PACTaNtUPMp.decimals.call({from: accounts[0]});
//		const stringj1fq20 = await PACTaNtUPMp.name.call({from: accounts[4]});
//		const stringO319dyx = await PACTaNtUPMp.name.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(PACTaNtUPMp.transfer.call(addressK7NYBGQ, uintXJ0TKKc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTKbBsL2g = await PACT.new({from: accounts[3]});
		const addressVnAlfK4 = accounts[5]
		const addressmT6zGyI = accounts[0]
		const addressmLKpCHN = accounts[1]
		const uintnotkIUK = BigInt("1702")
		const addressfzWla2L = "0x0000000000000000000000000000000000000001"
		const addresseOixKWd = "0x0000000000000000000000000000000000000001"
		const uinttjcMjbS = await PACTKbBsL2g.balanceOf.call(addressVnAlfK4, {from: accounts[0]});
//		const boolzbftEpW = await PACTKbBsL2g.setupRewards.call(addressmT6zGyI, {from: accounts[3]});
//		const boolmdv5d8p = await PACTKbBsL2g.setupBasePool.call(addressmLKpCHN, {from: accounts[1]});
//		const boolHJzQ5lr = await PACTKbBsL2g.approve.call(addressfzWla2L, uintnotkIUK, {from: accounts[0]});
//		const boolAFWAKoM = await PACTKbBsL2g.setupTeam.call(addresseOixKWd, {from: accounts[4]});

		assert.equal(uinttjcMjbS, BigInt("0"))
		await expect(PACTKbBsL2g.setupRewards.call(addressmT6zGyI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTDd7U8eC = await PACT.new({from: accounts[1]});
		const uintHpz8iTO = BigInt("244")
		const addressUhX7XYv = accounts[0]
		const addressDqUYIvs = accounts[4]
		const addressL6f2Kni = accounts[1]
		const addressgUamYDy = accounts[3]
//		const boolm0sPIH = await PACTDd7U8eC.transferFrom.call(addressDqUYIvs, addressUhX7XYv, uintHpz8iTO, {from: accounts[0]});
//		const uintISoOqMu = await PACTDd7U8eC.totalSupply.call({from: accounts[5]});
//		const boolH4FdNmC = await PACTDd7U8eC.setupTeam.call(addressL6f2Kni, {from: accounts[2]});
//		const bool8FxR3V = await PACTDd7U8eC.setupBasePool.call(addressgUamYDy, {from: accounts[4]});

		await expect(PACTDd7U8eC.transferFrom.call(addressDqUYIvs, addressUhX7XYv, uintHpz8iTO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTFbkGb36 = await PACT.new({from: accounts[0]});
		const addressJUounUE = accounts[3]
		const uintFEbQXPm = BigInt("724")
		const addressF0vY5cI = accounts[2]
		const uintq7dAz3m = BigInt("986")
		const addresskjiJ9H = accounts[0]
		const addressj4mjqws = accounts[0]
		const uint8h9awgF = await PACTFbkGb36.decimals.call({from: accounts[1]});
//		const boolutxUHFM = await PACTFbkGb36.setupReserve.call(addressJUounUE, {from: accounts[2]});
//		const uint8yvuAdSQ = await PACTFbkGb36.decimals.call({from: accounts[0]});
//		const booltFeo4U = await PACTFbkGb36.transfer.call(addressF0vY5cI, uintFEbQXPm, {from: accounts[0]});
//		const boolbWVRPC = await PACTFbkGb36.transferFrom.call(addressj4mjqws, addresskjiJ9H, uintq7dAz3m, {from: accounts[3]});
//		const uint8KngMgWb = await PACTFbkGb36.decimals.call({from: accounts[2]});

		assert.equal(uint8h9awgF, BigInt("18"))
		await expect(PACTFbkGb36.setupReserve.call(addressJUounUE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTdC9jcpL = await PACT.new({from: accounts[1]});
		const addresstygabys = accounts[5]
		const addresscTkM9VV = accounts[0]
		const addressLsFOz8P = accounts[4]
		const uint8ZLl2W9M = await PACTdC9jcpL.decimals.call({from: accounts[2]});
		const uint8Mhbzkbr = await PACTdC9jcpL.decimals.call({from: accounts[1]});
		const stringuVdHJi6 = await PACTdC9jcpL.symbol.call({from: accounts[0]});
//		const boolfmvEHy3 = await PACTdC9jcpL.setupBasePool.call(addresstygabys, {from: accounts[0]});
//		const uintul7th4M = await PACTdC9jcpL.allowance.call(addressLsFOz8P, addresscTkM9VV, {from: accounts[2]});
//		const stringUgWMkLJ = await PACTdC9jcpL.symbol.call({from: accounts[0]});

		assert.equal(stringuVdHJi6, "PACT")
		assert.equal(uint8Mhbzkbr, BigInt("18"))
		assert.equal(uint8ZLl2W9M, BigInt("18"))
		await expect(PACTdC9jcpL.setupBasePool.call(addresstygabys, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTLvlNeDt = await PACT.new({from: accounts[0]});
		const addressZbSYlpr = accounts[0]
		const uintZkqSUZ6 = BigInt("457")
		const addressiw7YxHj = "0x0000000000000000000000000000000000000001"
//		const boolE7pNNK = await PACTLvlNeDt.setupTeam.call(addressZbSYlpr, {from: accounts[2]});
//		const uintZqsLeNi = await PACTLvlNeDt.totalSupply.call({from: accounts[2]});
//		const uint8vvvgPRS = await PACTLvlNeDt.decimals.call({from: accounts[0]});
//		const boolygVB8Dk = await PACTLvlNeDt.approve.call(addressiw7YxHj, uintZkqSUZ6, {from: accounts[2]});

		await expect(PACTLvlNeDt.setupTeam.call(addressZbSYlpr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTdC9jcpL = await PACT.new({from: accounts[1]});
		const addressfm7GAxG = accounts[0]
		const addressMWdCHSt = accounts[4]
		const uint8ZLl2W9M = await PACTdC9jcpL.decimals.call({from: accounts[2]});
		const uint8Mhbzkbr = await PACTdC9jcpL.decimals.call({from: accounts[1]});
		const stringuVdHJi6 = await PACTdC9jcpL.symbol.call({from: accounts[0]});
		const uintul7th4M = await PACTdC9jcpL.allowance.call(addressMWdCHSt, addressfm7GAxG, {from: accounts[2]});
		const stringUgWMkLJ = await PACTdC9jcpL.symbol.call({from: accounts[0]});

		assert.equal(stringUgWMkLJ, "PACT")
		assert.equal(stringuVdHJi6, "PACT")
		assert.equal(uint8Mhbzkbr, BigInt("18"))
		assert.equal(uint8ZLl2W9M, BigInt("18"))
		assert.equal(uintul7th4M, BigInt("0"))
	});

	it('test for PACT', async () => {
		const PACTKbBsL2g = await PACT.new({from: accounts[3]});
		const addressXut1JyM = accounts[5]
		const addressgyMtNeC = accounts[0]
		const addressSsbOuyc = accounts[3]
		const addressh7SwwW7 = accounts[1]
		const uintxtNo6fy = BigInt("1702")
		const addressSXcm4ar = "0x0000000000000000000000000000000000000001"
		const addressDSnbvxt = "0x0000000000000000000000000000000000000001"
		const uinttjcMjbS = await PACTKbBsL2g.balanceOf.call(addressXut1JyM, {from: accounts[0]});
		const uinthC7gl4F = await PACTKbBsL2g.totalSupply.call({from: accounts[1]});
		const stringgmLHoIo = await PACTKbBsL2g.name.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolzbftEpW = await PACTKbBsL2g.setupRewards.call(addressgyMtNeC, {from: accounts[3]});
//		const boolHAdwgUL = await PACTKbBsL2g.setupRewards.call(addressSsbOuyc, {from: accounts[0]});
//		const boolmdv5d8p = await PACTKbBsL2g.setupBasePool.call(addressh7SwwW7, {from: accounts[1]});
//		const boolHJzQ5lr = await PACTKbBsL2g.approve.call(addressSXcm4ar, uintxtNo6fy, {from: accounts[0]});
//		const boolAFWAKoM = await PACTKbBsL2g.setupTeam.call(addressDSnbvxt, {from: accounts[4]});

		assert.equal(stringgmLHoIo, "P2PB2B community token")
		assert.equal(uinthC7gl4F, BigInt("1000000000000000000000000000"))
		assert.equal(uinttjcMjbS, BigInt("0"))
		await expect(PACTKbBsL2g.setupRewards.call(addressgyMtNeC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTDd7U8eC = await PACT.new({from: accounts[1]});
		const uinth77UUxG = BigInt("1847")
		const addressMyIsuzN = "0x0000000000000000000000000000000000000001"
		const uintqg1X6n1 = BigInt("244")
		const addressHzgsmJE = accounts[0]
		const addressWOY0HtO = accounts[4]
		const addressc0EpwpM = accounts[1]
		const addressbNf3mg = accounts[3]
		const boolI9mxqS = await PACTDd7U8eC.approve.call(addressMyIsuzN, uinth77UUxG, {from: accounts[5]});
//		const boolm0sPIH = await PACTDd7U8eC.transferFrom.call(addressWOY0HtO, addressHzgsmJE, uintqg1X6n1, {from: accounts[0]});
//		const uintISoOqMu = await PACTDd7U8eC.totalSupply.call({from: accounts[5]});
//		const boolH4FdNmC = await PACTDd7U8eC.setupTeam.call(addressc0EpwpM, {from: accounts[2]});
//		const bool8FxR3V = await PACTDd7U8eC.setupBasePool.call(addressbNf3mg, {from: accounts[4]});

		assert.equal(boolI9mxqS, true)
		await expect(PACTDd7U8eC.transferFrom.call(addressWOY0HtO, addressHzgsmJE, uintqg1X6n1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTGG4Sb7k = await PACT.new({from: accounts[3]});
		const uintRTVR9ZK = BigInt("793")
		const addresscJCoFjf = accounts[3]
		const uintpJbkuOO = BigInt("1547")
		const addressPXNuNA = accounts[3]
		const uintbrIcQv = BigInt("1572")
		const addressAvQOITH = accounts[2]
		const stringhZ9EOgD = await PACTGG4Sb7k.name.call({from: accounts[0]});
//		const boolLRpd6jB = await PACTGG4Sb7k.burn.call(addresscJCoFjf, uintRTVR9ZK, {from: accounts[4]});
//		const boolIJCuvMD = await PACTGG4Sb7k.approve.call(addressPXNuNA, uintpJbkuOO, {from: accounts[0]});
//		const boolucgGTh8 = await PACTGG4Sb7k.approve.call(addressAvQOITH, uintbrIcQv, {from: accounts[1]});

		assert.equal(stringhZ9EOgD, "P2PB2B community token")
		await expect(PACTGG4Sb7k.burn.call(addresscJCoFjf, uintRTVR9ZK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTHZYWvWY = await PACT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintWru9L46 = BigInt("2008")
		const addressTA96LRl = accounts[2]
		const addressaSpDI8j = accounts[0]
		const addressKExW7UL = accounts[3]
		const boolNxTmjO4 = await PACTHZYWvWY.burn.call(addressTA96LRl, uintWru9L46, {from: "0x0000000000000000000000000000000000000001"});
		const boolX2TGf4i = await PACTHZYWvWY.setupRewards.call(addressaSpDI8j, {from: accounts[2]});
		const boolK4B5K44 = await PACTHZYWvWY.setupTeam.call(addressKExW7UL, {from: accounts[3]});
		const stringybgW6dh = await PACTHZYWvWY.name.call({from: accounts[5]});
	});
})